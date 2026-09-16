<?php
/**
 * Odbiornik formularza kontaktowego mediaso.
 *
 * Wysyla zgloszenia przez SMTP z uwierzytelnieniem (OVH / Zimbra: ssl0.ovh.net).
 * Dane logowania NIE leza w repozytorium - patrz loadConfig() ponizej.
 *
 * Odpowiada JSON-em: {"ok":true} albo {"ok":false,"error":"<kod>"}.
 */

declare(strict_types=1);

require __DIR__ . '/lib/smtp.php';

// ---------------------------------------------------------------------------
// Konfiguracja
// ---------------------------------------------------------------------------

/**
 * Sciezki przeszukiwane w poszukiwaniu pliku konfiguracyjnego, w kolejnosci.
 * Plik ma zwracac tablice - wzor w deploy/mediaso-config.example.php.
 */
const CONFIG_PATHS = [
    '/etc/mediaso/config.php',
    __DIR__ . '/../../mediaso-config.php',
];

const DEFAULTS = [
    'mail_to' => 'kontakt@mediaso.pl',
    'mail_from' => 'kontakt@mediaso.pl',
    'mail_from_name' => 'Formularz mediaso',
    'smtp_host' => 'ssl0.ovh.net',
    'smtp_port' => 587,
    'smtp_encryption' => 'tls',
    'smtp_user' => 'kontakt@mediaso.pl',
    'smtp_pass' => '',
    'allowed_origins' => ['https://mediaso.pl', 'https://www.mediaso.pl'],
    'rate_limit_max' => 5,
    'rate_limit_window' => 3600,
    'debug' => false,
];

/** @return array<string,mixed> */
function loadConfig(): array
{
    $config = DEFAULTS;

    foreach (CONFIG_PATHS as $path) {
        if (is_readable($path)) {
            $loaded = require $path;
            if (is_array($loaded)) {
                $config = array_merge($config, $loaded);
            }
            break;
        }
    }

    // Zmienne srodowiskowe (np. z fastcgi_param) maja pierwszenstwo.
    foreach (['smtp_host', 'smtp_port', 'smtp_user', 'smtp_pass', 'mail_to', 'mail_from'] as $key) {
        $env = getenv('MEDIASO_' . strtoupper($key));
        if ($env !== false && $env !== '') {
            $config[$key] = $key === 'smtp_port' ? (int) $env : $env;
        }
    }

    return $config;
}

// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

/**
 * @param array<string,mixed> $payload
 */
function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function fail(int $status, string $code): void
{
    respond($status, ['ok' => false, 'error' => $code]);
}

/** Dlugosc tekstu; mbstring bywa wylaczony na tanich hostingach. */
function len(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function clientIp(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : '0.0.0.0';
}

/** Usuwa znaki, ktorymi da sie wstrzyknac dodatkowe naglowki maila. */
function sanitizeHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n", "\0", '%0a', '%0d'], '', $value));
}

/** Prosty limiter oparty o plik w katalogu tymczasowym. */
function rateLimitExceeded(string $ip, int $max, int $window): bool
{
    $file = sys_get_temp_dir() . '/mediaso-contact-' . sha1($ip) . '.json';
    $now = time();
    $hits = [];

    if (is_readable($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            $hits = array_values(array_filter(
                $decoded,
                static fn($ts): bool => is_int($ts) && $ts > $now - $window
            ));
        }
    }

    if (count($hits) >= $max) {
        return true;
    }

    $hits[] = $now;
    @file_put_contents($file, json_encode($hits), LOCK_EX);

    return false;
}

$config = loadConfig();

// --- Metoda ----------------------------------------------------------------

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$allowedOrigins = (array) $config['allowed_origins'];

if ($method === 'OPTIONS') {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origin, $allowedOrigins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Max-Age: 86400');
    }
    http_response_code(204);
    exit;
}

if ($method !== 'POST') {
    header('Allow: POST');
    fail(405, 'method_not_allowed');
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    fail(403, 'forbidden_origin');
}
if ($origin !== '') {
    header('Access-Control-Allow-Origin: ' . $origin);
}

// --- Wejscie ---------------------------------------------------------------

$raw = file_get_contents('php://input') ?: '';

if (strpos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        fail(400, 'invalid_json');
    }
    $data = $decoded;
} else {
    $data = $_POST;
}

$field = static function (string $key) use ($data): string {
    $value = $data[$key] ?? '';

    return is_string($value) ? trim($value) : '';
};

$name = $field('name');
$email = $field('email');
$company = $field('company');
$message = $field('message');
$service = $field('service');
$source = $field('source');
// Checkbox przychodzi jako JSON-owe true; z formularza bez JS jako "on".
$consent = ($data['consent'] ?? false) === true || ($data['consent'] ?? '') === 'on';

$errors = [];

if (len($name) < 2 || len($name) > 100) {
    $errors[] = 'name';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || len($email) > 150) {
    $errors[] = 'email';
}
if (len($company) > 150) {
    $errors[] = 'company';
}
if (len($message) < 2 || len($message) > 5000) {
    $errors[] = 'message';
}
if (len($service) > 100) {
    $errors[] = 'service';
}
if (len($source) > 50) {
    $errors[] = 'source';
}
if (!$consent) {
    $errors[] = 'consent';
}

if ($errors !== []) {
    error_log('mediaso: walidacja odrzucila pola [' . implode(', ', $errors) . '], IP ' . clientIp());
    respond(422, ['ok' => false, 'error' => 'validation', 'fields' => $errors]);
}

if (rateLimitExceeded(clientIp(), (int) $config['rate_limit_max'], (int) $config['rate_limit_window'])) {
    fail(429, 'rate_limited');
}

// --- Wysylka ---------------------------------------------------------------

if ($config['smtp_pass'] === '') {
    error_log('mediaso: brak hasla SMTP - sprawdz plik konfiguracyjny');
    fail(500, 'send_failed');
}

$safeName = sanitizeHeaderValue($name);
$safeEmail = sanitizeHeaderValue($email);

$subject = sprintf('Formularz mediaso: %s', $safeName);

$body = implode("\r\n", [
    'Nowe zgloszenie z formularza na mediaso.pl',
    '',
    'Imie i nazwisko: ' . $name,
    'E-mail: ' . $email,
    'Placowka / firma: ' . ($company !== '' ? $company : '-'),
    'Zainteresowanie: ' . ($service !== '' ? $service : '-'),
    'Zrodlo: ' . ($source !== '' ? $source : '-'),
    'Zgoda na przetwarzanie danych: tak',
    '',
    'Wiadomosc:',
    $message,
    '',
    '---',
    'IP: ' . clientIp(),
    'Data: ' . date('Y-m-d H:i:s'),
    'User-Agent: ' . sanitizeHeaderValue((string) ($_SERVER['HTTP_USER_AGENT'] ?? '-')),
]);

$mailer = new SmtpMailer(
    (string) $config['smtp_host'],
    (int) $config['smtp_port'],
    (string) $config['smtp_user'],
    (string) $config['smtp_pass'],
    (string) $config['smtp_encryption']
);

try {
    $mailer->send(
        (string) $config['mail_from'],
        (string) $config['mail_from_name'],
        (string) $config['mail_to'],
        $subject,
        $body,
        // Odpowiedz w kliencie pocztowym idzie prosto do pytajacego.
        ['Reply-To' => SmtpMailer::encodeHeader($safeName) . ' <' . $safeEmail . '>']
    );
} catch (SmtpException $e) {
    error_log('mediaso: SMTP - ' . $e->getMessage());

    if (!empty($config['debug'])) {
        respond(500, [
            'ok' => false,
            'error' => 'send_failed',
            'detail' => $e->getMessage(),
            'transcript' => $mailer->transcript(),
        ]);
    }

    fail(500, 'send_failed');
}

respond(200, ['ok' => true]);
