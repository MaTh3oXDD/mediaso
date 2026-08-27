<?php
/**
 * Wzor konfiguracji formularza kontaktowego.
 *
 * Na serwerze skopiuj to jako /etc/mediaso/config.php, wpisz haslo skrzynki
 * i zabezpiecz plik:
 *
 *   sudo mkdir -p /etc/mediaso
 *   sudo cp mediaso-config.example.php /etc/mediaso/config.php
 *   sudo nano /etc/mediaso/config.php
 *   sudo chown root:www-data /etc/mediaso/config.php
 *   sudo chmod 640 /etc/mediaso/config.php
 *
 * Ten plik NIE trafia na serwer razem z aplikacja i nie ma go w katalogu public/.
 */

declare(strict_types=1);

return [
    // Adres, na ktory przychodza zgloszenia.
    'mail_to' => 'kontakt@mediaso.pl',

    // Nadawca. Musi byc adresem, na ktory logujesz sie do SMTP, inaczej OVH odrzuci wysylke.
    'mail_from' => 'kontakt@mediaso.pl',
    'mail_from_name' => 'Formularz mediaso',

    // OVH MX Plan / Zimbra. Port 587 to STARTTLS, 465 to SSL - wtedy ustaw 'ssl'.
    'smtp_host' => 'ssl0.ovh.net',
    'smtp_port' => 587,
    'smtp_encryption' => 'tls',
    'smtp_user' => 'kontakt@mediaso.pl',
    'smtp_pass' => 'TUTAJ_HASLO_SKRZYNKI',

    // Skad wolno wysylac formularz.
    'allowed_origins' => [
        'https://mediaso.pl',
        'https://www.mediaso.pl',
    ],

    // Limit zgloszen z jednego IP w oknie czasowym (sekundy).
    'rate_limit_max' => 5,
    'rate_limit_window' => 3600,

    // true zwraca w odpowiedzi HTTP transkrypt rozmowy z SMTP. Wylacz po testach.
    'debug' => false,
];
