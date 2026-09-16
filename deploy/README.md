# Wdrozenie mediaso na VPS

VPS: `54.38.204.179`, uzytkownik `ubuntu`, nginx + PHP 8.5-FPM.
Strona jest prerenderowana do statycznego HTML. PHP obsluguje wylacznie
formularz kontaktowy pod `/api/contact.php`.

**Uwaga na to, gdzie wklejasz komende.** Kazdy blok ma naglowek:

- **[KOMPUTER]** - PowerShell w katalogu `C:\Users\Mateusz\Desktop\mediaso`
- **[VPS]** - terminal Termiusa zalogowany na serwer

Pliki projektu sa tylko na komputerze. Na VPS trafiaja przez `scp` i `deploy.ps1`.
Komendy [KOMPUTER] sa napisane pod PowerShella - w Git Bashu czesc z nich nie
zadziala i odwrotnie.

---

## Krok 1 - klucz SSH [KOMPUTER]

Logujesz sie haslem, a skrypt wdrozeniowy potrzebuje klucza. Jednorazowo:

```powershell
ssh-keygen -t ed25519 -C mediaso-deploy -f "$env:USERPROFILE\.ssh\id_ed25519"
```

Zapyta o haslo do klucza - **wcisnij Enter dwa razy**, zeby zostawic puste.
(Nie podawaj `-N ""`, PowerShell zjada pusty argument.)

Teraz wgraj klucz na serwer. `ssh-copy-id` nie istnieje na Windows, wiec robimy
to recznie - zapyta o haslo do serwera:

```powershell
$key = (Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" -Raw).Trim()
ssh ubuntu@54.38.204.179 "mkdir -p ~/.ssh; chmod 700 ~/.ssh; echo '$key' >> ~/.ssh/authorized_keys; chmod 600 ~/.ssh/authorized_keys"
```

Sprawdz - ta komenda ma wypisac `klucz-dziala` **bez pytania o haslo**:

```powershell
ssh ubuntu@54.38.204.179 "echo klucz-dziala"
```

Jesli nadal pyta o haslo, nie idz dalej.

## Krok 2 - wyslij pliki konfiguracyjne [KOMPUTER]

```powershell
cd C:\Users\Mateusz\Desktop\mediaso
scp deploy\nginx\mediaso.pl.conf deploy\mediaso-config.example.php ubuntu@54.38.204.179:~/
```

Sprawdz, ze doszly:

```powershell
ssh ubuntu@54.38.204.179 "ls -l ~/mediaso.pl.conf ~/mediaso-config.example.php"
```

Bez tego kroku komendy `cp` w krokach 3 i 4 nie maja czego kopiowac.

## Krok 3 - katalogi i nginx [VPS]

```bash
sudo mkdir -p /var/www/mediaso/releases
sudo chown -R ubuntu:www-data /var/www/mediaso
sudo chmod 755 /var/www/mediaso

sudo cp ~/mediaso.pl.conf /etc/nginx/sites-available/mediaso.pl
sudo ln -sf /etc/nginx/sites-available/mediaso.pl /etc/nginx/sites-enabled/mediaso.pl
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
```

`nginx -t` musi powiedziec `syntax is ok` i `test is successful`. Dopiero wtedy:

```bash
sudo systemctl reload nginx
```

## Krok 4 - haslo SMTP [VPS]

Poczta stoi na OVH (Zimbra), wiec PHP loguje sie do `ssl0.ovh.net` haslem
skrzynki `kontakt@mediaso.pl`. Haslo nie moze trafic do repozytorium:

```bash
sudo mkdir -p /etc/mediaso
sudo cp ~/mediaso-config.example.php /etc/mediaso/config.php
sudo nano /etc/mediaso/config.php
```

Nano ma pokazac gotowy plik z komentarzami. **Jesli jest pusty, komenda `cp`
sie nie wykonala** - wyjdz przez `Ctrl+X` i wroc do kroku 2.

W pliku znajdz linie `'smtp_pass' => 'TUTAJ_HASLO_SKRZYNKI',` i wpisz haslo
skrzynki. Zapis: `Ctrl+O`, `Enter`. Wyjscie: `Ctrl+X`. Potem zabezpiecz plik:

```bash
sudo chown root:www-data /etc/mediaso/config.php
sudo chmod 640 /etc/mediaso/config.php
rm ~/mediaso-config.example.php
```

## Krok 5 - pierwsze wdrozenie [KOMPUTER]

```powershell
cd C:\Users\Mateusz\Desktop\mediaso
.\deploy\deploy.ps1
```

Skrypt buduje `docs\`, pakuje tarem, wysyla przez scp i rozpakowuje na serwerze
jako `/var/www/mediaso/releases/<data>`. Symlink `current` przestawia sie na
koncu, wiec nie ma momentu z polowicznie skopiowana strona.

Sprawdz [VPS] - ma byc `HTTP/1.1 200 OK`:

```bash
curl -I -H "Host: mediaso.pl" http://127.0.0.1/
```

## Krok 6 - HTTPS [VPS]

Dopiero gdy strona odpowiada po HTTP:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d mediaso.pl -d www.mediaso.pl
```

Certbot dopisze bloki `listen 443 ssl`, sciezki do certyfikatow i
przekierowanie z portu 80. Odnawianie ustawia sam.

## Krok 7 - sprawdzenie [KOMPUTER]

W PowerShellu `curl` to alias `Invoke-WebRequest`, wiec **wpisuj `curl.exe`**:

```powershell
curl.exe -I https://mediaso.pl/                       # 200
curl.exe -I https://mediaso.pl/kontakt                # 200, bez przekierowania
curl.exe -I https://mediaso.pl/kontakt/               # 301 na /kontakt
curl.exe -I https://mediaso.pl/nie-ma-takiej-strony   # 404
curl.exe -I https://mediaso.pl/.htaccess              # 403
curl.exe -s https://mediaso.pl/robots.txt
```

Formularz - powinno przyjsc na `kontakt@mediaso.pl`:

```powershell
curl.exe -s -X POST https://mediaso.pl/api/contact.php -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"Testowa wiadomosc z curl\"}"
```

Ma zwrocic `{"ok":true}`.

---

## Kolejne wdrozenia [KOMPUTER]

Jedna komenda:

```powershell
.\deploy\deploy.ps1
```

## Cofniecie do poprzedniego wydania [VPS]

```bash
ls -1t /var/www/mediaso/releases
ln -sfn /var/www/mediaso/releases/<data> /var/www/mediaso/current
```

## Gdy formularz nie dziala

`send_failed` w odpowiedzi oznacza problem z SMTP. Wlacz diagnostyke [VPS]:

```bash
sudo nano /etc/mediaso/config.php      # 'debug' => true
```

Powtorz curla z kroku 7 - odpowiedz bedzie zawierac transkrypt rozmowy z
serwerem SMTP. Logi PHP:

```bash
sudo journalctl -u php8.5-fpm -n 50
```

Po diagnozie ustaw `'debug' => false`.

## Wersja dla Git Basha

`deploy/deploy.sh` robi to samo co `deploy.ps1`, ale wymaga Git Basha.
Jesli pracujesz w PowerShellu, uzywaj `.ps1` i zignoruj `.sh`.

---

## Zmiany po audycie SEO (2026-08-29)

Konfiguracja nginx w `deploy/nginx/mediaso.pl.conf` została przepisana. Zawiera teraz
komplet bloków HTTPS, więc po wgraniu nie trzeba nic dopisywać ręcznie.

### Krok A - rekord A dla `www` [PANEL DNS]

`www.mediaso.pl` ma w DNS wiszący rekord AAAA (IPv6) i nic za nim nie stoi, przez co host
nie odpowiada. Każdy link z `www` prowadzi donikąd.

1. Usuń rekord AAAA dla `www` albo wskaż nim działający adres IPv6 serwera.
2. Dodaj rekord `A`: nazwa `www`, wartość `54.38.204.179`.
3. Sprawdź po propagacji: `nslookup www.mediaso.pl`.

Bez tego kroku przekierowanie w nginx nie ma czego obsłużyć.

### Krok B - wgraj nową konfigurację [KOMPUTER] + [VPS]

```powershell
# [KOMPUTER]
cd C:\Users\Mateusz\Desktop\mediaso
scp deploy\nginx\mediaso.pl.conf ubuntu@54.38.204.179:~/
```

```bash
# [VPS]
sudo cp ~/mediaso.pl.conf /etc/nginx/sites-available/mediaso.pl.conf
sudo nginx -t && sudo systemctl reload nginx
```

Jeśli `nginx -t` zgłasza brak certyfikatu dla `www.mediaso.pl`, rozszerz certyfikat:

```bash
sudo certbot --nginx -d mediaso.pl -d www.mediaso.pl
sudo nginx -t && sudo systemctl reload nginx
```

### Krok C - sprawdź, czy nagłówki wyszły [KOMPUTER]

```powershell
curl.exe -sI https://mediaso.pl/ | findstr /I "HTTP strict-transport content-security permissions"
curl.exe -sI https://www.mediaso.pl/ | findstr /I "HTTP location"
curl.exe -s -o NUL -w "%{http_version}\n" https://mediaso.pl/
```

Oczekiwane: `strict-transport-security`, `content-security-policy` i `permissions-policy`
na apeksie, `301` z `www` na `https://mediaso.pl/`, wersja HTTP `2`.

### Krok D - IndexNow po wdrożeniu [KOMPUTER]

Klucz leży w `public/<klucz>.txt` i po wdrożeniu musi być dostępny pod
`https://mediaso.pl/<klucz>.txt`. Zgłoszenie adresów:

```powershell
npm run indexnow
```

Google z IndexNow nie korzysta - to przyspiesza indeksowanie w Bing i Seznam.

### Sitemapa generuje się sama

`npm run build` uruchamia najpierw `scripts/generate-sitemap.mjs`, który czyta slugi
podstron usług i artykułów z `src/app/content/` i zapisuje `public/sitemap.xml`.
Nie edytuj tego pliku ręcznie - przy następnym buildzie zmiany znikną.
