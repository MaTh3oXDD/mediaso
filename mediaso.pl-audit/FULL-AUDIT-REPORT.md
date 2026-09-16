# Pełny audyt SEO — mediaso.pl

Data: 2026-08-27
Zakres: 6 podstron (`/`, `/uslugi`, `/o-nas`, `/kontakt`, `/portfolio`, `/diagnostyka`) plus `/polityka-prywatnosci`
Stack: Angular 20, prerendering do statycznego HTML, nginx 1.28.3 na VPS

---

## Podsumowanie

### Wynik ogólny: 54/100

| Obszar | Waga | Wynik | Wkład |
|---|---|---|---|
| SEO techniczne | 22% | 74 | 16,3 |
| Jakość treści | 23% | 34 | 7,8 |
| On-page | 20% | 55 | 11,0 |
| Dane strukturalne | 10% | 65 | 6,5 |
| Wydajność (CWV) | 10% | 55 | 5,5 |
| Gotowość na AI search | 10% | 41 | 4,1 |
| Obrazy | 5% | 60 | 3,0 |

Rozkład jest wymowny: warstwa techniczna trzyma się dobrze (74), treść leży (34). To nie jest strona zepsuta — to strona pusta.

### Typ biznesu

Agencja marketingowa B2B sprzedająca placówkom medycznym. Model service-area: `/kontakt` mówi wprost „Polska — pracujemy zdalnie z całym krajem". Brak adresu jest świadomą decyzją i dla SAB decyzją poprawną.

### Pięć głównych problemów

1. **Brak architektury treści.** Sześć usług na jednej podstronie po ~79 słów każda. Konkurenci mają osobny URL i 500–1500 słów na usługę. Jeden URL nie zarankuje na pięć intencji zakupowych.
2. **Zero warstwy informacyjnej.** Nie ma bloga ani bazy wiedzy. Dla frazy „marketing medyczny" 67% wyników w Google to artykuły — na tym etapie ścieżki nie istniejesz.
3. **Zero dowodów.** `/portfolio` to placeholder. Nigdzie nie ma nazwy klienta, liczby ani opinii. Wymiar zaufania wypadł 5,6/25 średnio dla wszystkich person kupujących — najniżej ze wszystkich mierzonych wymiarów.
4. **Zero linków zwrotnych.** Common Crawl (styczeń–marzec 2026) nie zna domeny. Brak PageRank, brak centralności, zero hostów linkujących.
5. **`www.mediaso.pl` nie działa.** Wiszący rekord AAAA bez rekordu A, nic nie nasłuchuje. Reguła przekierowania siedzi w `.htaccess`, ale serwuje nginx, więc nigdy się nie uruchamia.

### Pięć szybkich wygranych

1. Rekord A dla `www` + przekierowanie 301 w nginx
2. Nagłówek HSTS (jedna linijka)
3. HTTP/2 w dyrektywie `listen` — teraz wszystko idzie po HTTP/1.1
4. Naprawa `tel:` ze spacjami — łamie click-to-call
5. `sameAs` w schemacie plus link do profili społecznościowych

---

## SEO techniczne — 74/100

Najmocniejszy obszar. Szczegóły: `findings/technical.md`.

**Działa poprawnie** (zweryfikowane na żywo, nie z konfiguracji): robots.txt i sitemap.xml prawidłowe, kanoniczne odsyłają do siebie na każdej stronie, unikalne tytuły i opisy, przekierowania HTTP→HTTPS i końcowego slasha to poprawne 301, brak miękkich 404, HTML prerenderowany (`is_spa: false`), viewport mobilny poprawny, JS z nagłówkami `immutable` i rocznym cache.

**Problemy:**

| Waga | Problem |
|---|---|
| Krytyczne | `www` nie rozwiązuje się — dangling AAAA, brak A, `.htaccess` martwy pod nginx |
| Wysokie | Brak `Strict-Transport-Security` |
| Wysokie | Brak `Content-Security-Policy` |
| Średnie | 74 deklaracje `@font-face` inline w `<head>` każdej strony, pełne zakresy cyrylicy/greki/wietnamskiego |
| Niskie | Brak `Permissions-Policy`, brak IndexNow |

Przełącznik PL/EN działa po stronie klienta, bez osobnych URL-i i bez hreflang — zgodnie z ustaleniem, że angielska wersja to wygoda dla gości, nie kanał ruchu.

---

## Jakość treści — 34/100

Najsłabszy obszar. Szczegóły: `findings/content.md`.

### Objętość wobec minimów

| Strona | Słowa | Minimum dla typu | Werdykt |
|---|---|---|---|
| `/` | 415 | 500 | poniżej progu |
| `/uslugi` | 475 | 800 na jedną usługę (tu jest ich sześć) | daleko poniżej |
| `/diagnostyka` | 727 | 800 | przy progu, ale to 84 pytania, nie tekst wyjaśniający |
| `/o-nas` | 164 | — | krytycznie za mało jak na główną powierzchnię E-E-A-T |
| `/kontakt` | 90 | — | akceptowalne dla typu |
| `/portfolio` | 76 | 500+ | placeholder |

### E-E-A-T: 44/100

| Wymiar | Wynik | Główny brak |
|---|---|---|
| Doświadczenie | 10/25 | sześć deklaracji doświadczenia, zero nazw, dat i liczb |
| Ekspertyza | 12/25 | żadnego nazwiska na całej stronie, brak encji `Person` w danych strukturalnych |
| Autorytet | 8/25 | brak wzmianek w mediach, logotypów klientów, badge'ów partnerskich |
| Wiarygodność | 14/30 | brak NIP/REGON, brak opinii, niepodparte „DANE PACJENTÓW W PEŁNI BEZPIECZNE" |

Najmocniejszy sygnał ekspertyzy na całej stronie to narzędzie `/diagnostyka` — 84 kryteria w 10 obszarach operacyjnych placówki. Pokazuje realną znajomość tego, jak działa przychodnia, nie tylko marketingu. Ta wiedza jest uwięziona w jednym interaktywnym module i nigdzie nie występuje jako treść.

---

## On-page — 55/100

**Mocne:** tytuły i opisy meta są dobre — unikalne, we właściwej długości, z frazą i marką. Każda strona ma dokładnie jeden H1 (zweryfikowane; wcześniejsze doniesienie o zduplikowanym H1 na `/uslugi` okazało się fałszywe).

**Słabe:**
- Linkowanie wewnętrzne praktycznie nie istnieje — każda strona ma te same 12 linków z nawigacji i stopki, zero linków z treści
- `/uslugi` obsługuje sześć intencji jednym URL-em
- `/portfolio` wypadło z górnego menu, ale nadal wisi w stopce — do ujednolicenia

---

## Dane strukturalne — 65/100

Szczegóły: `findings/schema.md`.

**Obecne:** `Organization`, `WebSite`, `WebPage`, `ContactPage`, `BreadcrumbList`, `OfferCatalog`, `Offer`, `Service` (×6), `ContactPoint`, `ImageObject`. Wszystko parsuje się bez błędów.

To najlepiej zrobiona część strony. Wzorzec grafowy jest poprawny — `Organization` ma stabilne `@id`, a usługi odwołują się do niego referencją zamiast duplikować dane. `BreadcrumbList` jest na każdej podstronie, `ContactPage` użyte zamiast generycznego `WebPage`, `areaServed: Country/Polska` konsekwentnie na każdym poziomie.

**Brakuje:** `sameAs` (ani jednego linku do profilu zewnętrznego, w firmie sprzedającej social media), `Person` dla zespołu, NIP/REGON, `AggregateRating`/`Review`, oraz sekcji FAQ napisanej pełnymi zdaniami.

Co do FAQ: nie licz na wynik rozszerzony. Google od sierpnia 2023 ogranicza go do witryn rządowych i zdrowotnych, a format mógł zostać wycofany dalej — nie weryfikowałem bieżących wytycznych. Wartość leży w widocznej treści, która domyka lukę „brak cytowalnych akapitów" z audytu GEO. 84 pozycje z `/diagnostyka` to kryteria tak/nie bez odpowiedzi i w obecnej formie się na to nie nadają.

**Błąd danych:** opisy w JSON-LD są pozbawione polskich znaków — „placowek", „Uslugi mediaso", „Zarzadzanie mediami spolecznosciowymi". Widoczny HTML ma diakrytyki poprawnie, rozjazd dotyczy tylko danych strukturalnych, które Google czyta wprost.

---

## Wydajność — 55/100

Dane wyłącznie laboratoryjne — brak dostępu do CrUX i Search Console, więc realnych pomiarów użytkowników nie widać. Szczegóły: `findings/performance.md`.

| Metryka | `/` | `/uslugi` | Próg |
|---|---|---|---|
| LCP | 3,8 s | 2,8 s | ≤2,5 s |
| CLS | 0 | 0 | ≤0,1 |
| INP | brak danych polowych | brak danych polowych | ≤200 ms |

LCP nie przechodzi na obu stronach. Przyczyną nie są obrazki — 78–84% czasu to opóźnienie renderowania przez pracę JS przy starcie. Same polyfille to ok. 1,8 s skryptowania, 2116 zadań przed pierwszym malowaniem.

`hero-bg.png` (527 kB) i `hero-ekg.gif` **nie trafiają do użytkowników** — nie ma ich w ruchu sieciowym ani w kodzie źródłowym. Zostały w `public/` jako martwe pliki.

HTTP/2 wyłączone — wszystkie zasoby first-party idą po HTTP/1.1. Gzip i cache skonfigurowane poprawnie; Brotli byłby dodatkiem.

---

## Gotowość na AI search — 41/100

Szczegóły: `findings/geo.md`.

| Składowa | Wynik |
|---|---|
| Cytowalność | 35 |
| Struktura | 55 |
| Multimedia | 15 |
| Autorytet | 20 |
| Technikalia | 75 |

Boty AI mają pełny dostęp — `Allow: /` obejmuje GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot i Google-Extended. Nic nie jest zablokowane.

Problem leży w treści: żadna strona nie ma samodzielnego akapitu długości 134–167 słów, który model mógłby zacytować. Wszystko jest pocięte na punkty z checkboxami i etykiety interfejsu. Do tego zerowy ślad zewnętrzny — brak LinkedIna, YouTube'a, wzmianek w katalogach. Dlatego zapytanie „agencja marketingowa dla przychodni" w ChatGPT czy Perplexity nie wyrzuci mediaso.

`/llms.txt` nie istnieje (404). Tani dodatek, choć Google go ignoruje.

---

## Obrazy — 60/100

Na całej stronie są **dwa obrazy** — logo w nagłówku i w stopce. Oba mają `alt` i wymiary, więc technicznie jest czysto i nie ma ryzyka CLS.

Problemem jest nieobecność: zero zdjęć zespołu, zrzutów realizacji, wizualizacji procesu, wykresów. Dla kupującego oceniającego agencję to brak każdego wizualnego dowodu pracy. Do tego zerowa obecność w wyszukiwarce grafiki.

Favicon i og-image zostały wymienione 2026-08-27 na kadr z logo (białe M na czarnym kwadracie).

---

## SXO — analiza SERP-ów

Pełna analiza pięciu zapytań: `findings/sxo.md`.

Zbadaliśmy, jaki **typ strony** Google faktycznie nagradza dla fraz, które ten biznes powinien wygrywać:

| Fraza | Dominujący typ | Pewność | Odpowiednik u ciebie |
|---|---|---|---|
| marketing medyczny | artykuł blogowy | ~67% | brak — bloga nie ma |
| marketing dla placówek medycznych | strona ofertowa | ~71% | `/` — 415 słów, zero case studies |
| strony internetowe dla przychodni | oferta + realizacje | ~60% | punkt na `/uslugi`, `/portfolio` puste |
| marketing dla gabinetu stomatologicznego | dedykowana strona pod stomatologię | ~67% | brak |
| pozycjonowanie klinik | blog lub dedykowana podstrona | mieszane | akapit na `/uslugi` |

Wynik SXO strony głównej: **44/100**. Wynik `/uslugi`: **37/100**.

Najmocniejszy dowód na problem architektury: konkurent `medyczny-marketing.pl` zajmuje dwa miejsca w top 3 na „pozycjonowanie klinik" dwiema osobnymi podstronami.

Osobna obserwacja: `/diagnostyka` nie ma odpowiednika u żadnego konkurenta w żadnym z pięciu zbadanych SERP-ów. To realny wyróżnik zakopany jedno kliknięcie w nawigacji, bez żadnej treści kierującej na niego ruch.

---

## Local SEO

Szczegóły: `findings/local.md`.

NAP jest spójny — nazwa, telefon i e-mail zgadzają się między HTML-em, JSON-LD i meta tagami. Brak adresu jest konsekwentny i dla modelu zdalnego poprawny.

Największa dziura: sprzedajesz „optymalizację wizytówki Google", a nie ma śladu twojej własnej — zero linku do profilu, zero widgetu opinii, zero `aggregateRating`. Narzędzie `/diagnostyka` pyta klientów o ich oceny w Google, nie pokazując żadnej swojej.

Katalogów (Panorama Firm, Aleo, GoWork) nie udało się zweryfikować programowo — Google zablokował zgodą, GoWork zwrócił 403, Aleo nie odpowiedziało. Wymaga sprawdzenia ręcznego.

---

## Sitemap

Szczegóły: `findings/sitemap.md`.

XML poprawny, 5 URL-i. Brak `/portfolio` i `/polityka-prywatnosci` **nie jest błędem** — obie mają `noindex: true` w `app.routes.ts`, z komentarzem wyjaśniającym, że portfolio jest ukryte do czasu prawdziwych case studies.

Jedyny problem: wszystkie 5 adresów ma tę samą zahardkodowaną datę `lastmod` (2026-08-24) i nic jej nie odświeża. Plik jest pisany ręcznie — przy pięciu stronach to nieistotne, przy blogu się rozjedzie.

---

## Ograniczenia audytu

- Brak poświadczeń Google (GSC, CrUX, GA4) — nie widać realnych pozycji, wyświetleń, ruchu ani polowych Core Web Vitals. Wszystkie liczby wydajnościowe są laboratoryjne.
- Brak kluczy Moz i Bing Webmaster — profil linków oparty wyłącznie na Common Crawl, który domeny nie zna.
- Brak DataForSEO — pozycje w SERP-ach szacowane przez wyszukiwanie, nie przez API rankingowe. Procenty dominacji typów stron są kierunkowe.
- Katalogi firm nieweryfikowalne programowo (blokady i 403).
- Zrzut mobilny pominięty na życzenie.

---

## Pliki

- `ACTION-PLAN.md` — plan działania z priorytetami
- `findings/technical.md` — 191 linii
- `findings/content.md` — 155 linii
- `findings/sxo.md` — 195 linii
- `findings/geo.md`
- `findings/schema.md`
- `findings/local.md` — 92 linie
- `findings/performance.md` — 101 linii
- `findings/sitemap.md` — 95 linii
- `screenshots/home-desktop.png`
- `audit-data.json` — dane do generowania raportu PDF
