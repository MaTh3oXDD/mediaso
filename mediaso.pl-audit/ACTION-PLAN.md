# Plan działania SEO — mediaso.pl

Data audytu: 2026-08-27
Wynik ogólny: **54/100**
Typ biznesu: agencja marketingowa B2B, model zdalny (service-area business), rynek: Polska

---

## Diagnoza w jednym zdaniu

Strona jest technicznie poprawna i pusta merytorycznie: sześć podstron, z których jedna to placeholder, łącznie ok. 1900 słów. Google nie ma czego rankować poza nazwą marki.

Audyt SERP-ów potwierdził to twardo. Dla pięciu kluczowych fraz sprawdziliśmy, jakie **typy stron** faktycznie wygrywają:

| Fraza | Co wygrywa w Google | Co masz |
|---|---|---|
| marketing medyczny | artykuł blogowy (67% wyników) | nic — bloga nie ma |
| marketing dla placówek medycznych | strona ofertowa (71%) | strona główna, 415 słów, zero case studies |
| strony internetowe dla przychodni | oferta + realizacje | jeden punkt na `/uslugi`, `/portfolio` puste |
| marketing dla gabinetu stomatologicznego | dedykowana strona pod stomatologię | jedno słowo w podtytule |
| pozycjonowanie klinik | blog albo dedykowana podstrona | jeden akapit wśród sześciu usług |

Konkurent `medyczny-marketing.pl` zajmuje **dwa miejsca w top 3** na „pozycjonowanie klinik", bo ma na to dwie osobne podstrony. Jeden URL nie zarankuje na pięć różnych intencji zakupowych — to problem architektury, nie copywritingu.

---

## Faza 1 — Naprawy krytyczne (tydzień 1)

Rzeczy, które kosztują niewiele czasu, a blokują wszystko inne.

### 1.1 `www.mediaso.pl` nie działa — KRYTYCZNE

Subdomena `www` ma w DNS wiszący rekord AAAA (tylko IPv6) i nic za nim nie stoi. Brak rekordu A. Host się nie przekierowuje — po prostu timeoutuje.

W repo jest reguła przekierowania `www` → apex w `.htaccess`, ale stronę serwuje **nginx, nie Apache**, więc ta reguła nigdy się nie wykonuje.

Skutek: każdy link zwrotny z `www` i każdy adres wpisany ręcznie z `www` prowadzi donikąd.

Do zrobienia:
- dodać rekord A dla `www` wskazujący na 54.38.204.179
- dodać w nginx server block z `return 301 https://mediaso.pl$request_uri;`

### 1.2 Brak nagłówka HSTS — WYSOKIE

Przekierowanie HTTP→HTTPS działa, ale bez `Strict-Transport-Security` każda pierwsza wizyta idzie plaintextem. Jedna linijka w konfiguracji nginx.

### 1.3 Brak Content-Security-Policy — WYSOKIE

Nagłówek nie występuje w ogóle. Masz już `X-Content-Type-Options`, `X-Frame-Options` i `Referrer-Policy` — CSP to domknięcie kompletu.

### 1.4 Linki `tel:` mają spacje — NISKIE

`href="tel:+48 517 910 330"` łamie RFC 3966. Na części mobilnych przeglądarek click-to-call nie zadziała. Poprawka: `tel:+48517910330`. Występuje w stopce i na `/kontakt`.

### 1.5 HTTP/2 wyłączone na nginx — WYSOKIE

Wszystkie zasoby first-party idą po HTTP/1.1 (potwierdzone curlem i Lighthouse). Tylko Google Fonts używa h2. To dławi ładowanie limitem ~6 połączeń i pogłębia problem z LCP. Dopisanie `http2` do dyrektywy `listen`.

---

## Faza 2 — Architektura treści (tygodnie 2–6)

Tu leży 80% efektu. Bez tego reszta nie ma znaczenia.

### 2.1 Rozbij `/uslugi` na osobne strony — KRYTYCZNE

Obecnie: 475 słów na sześć usług, średnio 79 słów na usługę. Konkurenci na dedykowanych stronach mają po 500–1500 słów każda.

Kolejność według potencjału (z danych SERP):

| Nowy URL | Fraza docelowa | Dlaczego priorytet |
|---|---|---|
| `/uslugi/pozycjonowanie-klinik` | pozycjonowanie klinik | konkurent trzyma 2 miejsca w top 3 dwiema podstronami |
| `/uslugi/marketing-stomatologiczny` | marketing dla gabinetu stomatologicznego | 4/6 wyników to strony dedykowane wyłącznie stomatologii |
| `/uslugi/strony-internetowe-dla-placowek-medycznych` | strony internetowe dla przychodni | wygrywa oferta połączona z realizacjami |
| `/uslugi/social-media-dla-klinik` | social media dla kliniki | — |
| `/uslugi/wizytowka-google-dla-placowki` | optymalizacja wizytówki Google | — |
| `/uslugi/infolinia-medyczna` | infolinia medyczna dla przychodni | najmniejsza konkurencja |

Każda strona: min. 800 słów, sekcja „jak pracujemy", konkretne bolączki branży (przy stomatologii: implanty, NFZ vs. prywatne, higienistki — nie ogólniki o „marketingu medycznym"), własne CTA, FAQ na dole.

`/uslugi` zostaje jako hub linkujący do wszystkich sześciu.

### 2.2 Uruchom bazę wiedzy `/wiedza` lub `/blog` — KRYTYCZNE

Dla fraz definicyjnych Google w 67% przypadków nagradza artykuły. Bez tej warstwy nie pojawiasz się na etapie, na którym właściciel placówki dopiero szuka rozwiązania.

Masz gotowy surowiec: **84 pytania diagnostyczne z `/diagnostyka`**, ułożone w 10 obszarów (strategia, pozyskiwanie, rejestracja, strona, marketing, rentowność, KPI, automatyzacja, opinie, skalowalność). Każdy obszar to gotowy artykuł wyjaśniający, *dlaczego* te kryteria mają znaczenie.

Pierwsze teksty:
- „Czym jest marketing medyczny" — fraza definicyjna, blogi biorą 67% wyników
- „Pozycjonowanie kliniki krok po kroku"
- „RODO w marketingu placówki medycznej" — zero pokrycia u konkurencji
- „Ile kosztuje strona internetowa dla przychodni"
- „Jak zbierać opinie pacjentów zgodnie z prawem"

### 2.3 Napełnij `/portfolio` — KRYTYCZNE

Strona obiecuje case studies i dostarcza 76 słów „w przygotowaniu". Jest oznaczona `noindex`, więc nie szkodzi w indeksie — szkodzi w konwersji.

Wskaźnik zaufania wypadł najniżej ze wszystkich mierzonych wymiarów: **5,6/25 średnio dla wszystkich person kupujących**. Przyczyna jest jedna: nigdzie na stronie nie ma nazwy klienta, liczby ani opinii.

Minimum: 2–3 realizacje z nazwą placówki (za zgodą), stanem przed, tym co zrobiliście i liczbą po. Potem zdjąć `noindex`.

### 2.4 Przepisz `/o-nas` — KRYTYCZNE

164 słowa, zero nazwisk, zero zdjęć, zero certyfikatów. Sprzedajesz optymalizację wizytówek Google i Meta Ads, nie pokazując ani jednego badge'a partnera.

Strona główna twierdzi, że zespół ma doświadczenie w *zarządzaniu placówkami medycznymi*. Jeśli to prawda, to twój najmocniejszy wyróżnik na tle agencji, które znają tylko marketing — a jest zapisany jako niesprawdzalne zdanie. Nazwiska, lata, konkretne placówki.

Dorzuć NIP/REGON. W polskim B2B kupujący to sprawdza przed podpisaniem umowy.

### 2.5 Uważaj na zdanie „DANE PACJENTÓW W PEŁNI BEZPIECZNE"

To absolutne twierdzenie bez pokrycia — brak wzmianki o RODO, umowie powierzenia, lokalizacji hostingu. Google traktuje niepodparte deklaracje absolutne jako sygnał niskiej jakości, a tu dotyczy danych pacjentów. Albo dopisz konkrety, albo złagodź.

---

## Faza 3 — Autorytet i widoczność (miesiąc 2–3)

### 3.1 Zero linków zwrotnych

Common Crawl (edycja styczeń–marzec 2026) **nie zna domeny mediaso.pl** — brak PageRank, brak centralności, zero hostów linkujących. Domena nie istnieje w grafie sieci.

Do zrobienia: katalogi branżowe, publikacje w portalach dla właścicieli placówek, wystąpienia, wpisy gościnne. Bez tego nawet dobra treść stoi w miejscu na konkurencyjnych frazach.

### 3.2 Załóż i podlinkuj wizytówkę Google

Sprzedajesz „optymalizację wizytówki Google", a na stronie nie ma śladu twojej własnej: brak linku do profilu, brak widgetu opinii, brak `aggregateRating`. Dla właściciela kliniki oceniającego wykonawcę to zauważalna dziura w wiarygodności.

Model zdalny jest w porządku — GBP obsługuje service-area business: adres ukryty, obszary działania wypisane, właściwa kategoria główna.

### 3.3 Brak `sameAs` w schemacie

Zero linków do jakiegokolwiek profilu społecznościowego w danych strukturalnych — w firmie, która sprzedaje prowadzenie social mediów.

### 3.4 Wypchnij `/diagnostyka` na wierzch

To jedyny zasób bez konkurencji: w żadnym z pięciu zbadanych SERP-ów nie pojawiło się porównywalne narzędzie interaktywne. Teraz siedzi jedno kliknięcie w nawigacji, bez żadnej treści, która by na nie kierowała. Powinno być drugim CTA na stronie głównej i domknięciem każdego artykułu.

---

## Faza 4 — Wydajność i utrzymanie (ciągłe)

### 4.1 LCP nie przechodzi na obu badanych stronach — WYSOKIE

Strona główna 3,8 s, `/uslugi` 2,8 s przy progu 2,5 s. To nie wina obrazków — 78–84% czasu to opóźnienie renderowania przez pracę JS przy starcie (same polyfille ok. 1,8 s, 2116 zadań przed pierwszym malowaniem).

CLS wynosi 0 na obu stronach — tu jest czysto.

Uwaga: to dane laboratoryjne. Bez podpiętego Search Console i CrUX nie widać, co realnie mierzą użytkownicy.

### 4.2 Fonty

74 deklaracje `@font-face` wstrzykiwane w `<head>` każdej strony, z pełnym zakresem cyrylicy, greki i wietnamskiego, których polska strona nigdy nie użyje. Surowy HTML waży przez to ~73 kB. Poprawka: zamawiać z Google Fonts tylko `latin,latin-ext`.

Cormorant Garamond nie ładuje się na żadnej z badanych stron — sprawdź, czy nie jest martwym balastem.

### 4.3 Sitemap pisany ręcznie

Wszystkie 5 URL-i ma jedną zahardkodowaną datę `lastmod` (2026-08-24) i nic jej nie odświeża. Przy 5 stronach to nieistotne. Zanim dojdzie sześć podstron usług i blog — potrzebny generator, inaczej sitemap się rozjedzie z `app.routes.ts`.

### 4.4 Podepnij Search Console i Analytics

Audyt szedł bez danych z GSC, CrUX i GA4, więc realnych pozycji, wyświetleń ani ruchu nie widać — wszystko powyżej opiera się na danych publicznych i laboratoryjnych. Podpięcie GSC to warunek mierzenia czegokolwiek.

---

## Kolejność, gdyby robić po jednej rzeczy

1. Napraw `www` (1.1) — dosłownie DNS plus trzy linijki nginx
2. Podepnij Search Console (4.4) — bez tego lecisz na ślepo
3. `/o-nas` z nazwiskami i NIP-em (2.4) — pół dnia pisania
4. Dwie realizacje na `/portfolio` (2.3) — odblokowuje najniżej punktowany wymiar
5. `/uslugi/pozycjonowanie-klinik` (2.1) — pierwsza dedykowana strona ofertowa
6. `/uslugi/marketing-stomatologiczny` (2.1) — druga
7. Pierwsze trzy artykuły w bazie wiedzy (2.2)
8. HTTP/2 i HSTS na nginx (1.5, 1.2)
9. Wizytówka Google (3.2)
10. Reszta podstron usług i budowa linków (2.1, 3.1)

Punkty 1–4 zamykają się w tygodniu. Punkty 5–7 to główna praca i główny zwrot.
