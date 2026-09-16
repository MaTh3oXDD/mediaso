# Audyt danych strukturalnych — mediaso.pl

Data: 2026-08-27
Metoda: bezpośrednie pobranie JSON-LD z wyrenderowanego HTML każdej podstrony
Uwaga: agent `seo-schema` przerwał pracę trzykrotnie bez zapisu; ten plik powstał z bezpośredniej ekstrakcji.

## Wynik: 65/100

## Co jest zaimplementowane

| Strona | Typy JSON-LD |
|---|---|
| `/` | Organization, WebSite, WebPage |
| `/uslugi` | Organization, WebSite, WebPage, BreadcrumbList |
| `/o-nas` | Organization, WebSite, WebPage, BreadcrumbList |
| `/kontakt` | Organization, WebSite, **ContactPage**, BreadcrumbList |
| `/diagnostyka` | Organization, WebSite, WebPage, BreadcrumbList |

Wszystkie bloki parsują się poprawnie. Zero błędów składniowych.

### Mocne strony

- **Prawidłowe `@id` i referencje.** `Organization` ma stabilne `@id` (`https://mediaso.pl/#organization`), a usługi odwołują się do niego przez `provider: {"@id": ...}` zamiast duplikować dane. To poprawny wzorzec grafowy, rzadko spotykany na stronach tej wielkości.
- **`BreadcrumbList` obecny** na każdej podstronie. Na stronie głównej słusznie go nie ma.
- **`ContactPage` zamiast generycznego `WebPage`** na `/kontakt` — właściwy typ dla tej strony.
- **`hasOfferCatalog` z pełnym katalogiem usług.** Sześć wpisów `Offer` → `itemOffered: Service`, każdy z `name`, `description`, `serviceType`, `url`, `provider` i `areaServed`.
- **`areaServed: Country/Polska`** zastosowane konsekwentnie na poziomie organizacji, punktu kontaktu i każdej usługi — poprawne dla modelu zdalnego.
- **`logo` jako `ImageObject`** z wymiarami 512×512, nie gołym URL-em.

## Braki i błędy

### 1. Opisy bez polskich znaków — ŚREDNIE

Wszystkie teksty w JSON-LD mają wycięte diakrytyki:

```
"description": "Agencja marketingowa dla placowek medycznych: strony
                internetowe, social media i optymalizacja Google."
"name": "Uslugi mediaso"
"serviceType": "Zarzadzanie mediami spolecznosciowymi"
```

Widoczny HTML ma polskie znaki poprawnie — rozjazd dotyczy wyłącznie danych strukturalnych. To dane, które Google czyta wprost i może wykorzystać w wynikach rozszerzonych. Poprawić na „placówek", „Usługi", „Zarządzanie mediami społecznościowymi".

Źródło: `site.config.ts` / generator schematu w `src/app/core/`.

### 2. Brak `sameAs` — WYSOKIE

Organizacja nie ma ani jednego linku do profilu zewnętrznego. Żadnego LinkedIna, Facebooka, Instagrama, wizytówki Google.

To najpoważniejszy brak, bo:
- `sameAs` to główny sposób, w jaki Google łączy stronę z encją firmy w Knowledge Graph
- firma sprzedaje prowadzenie social mediów, nie linkując do żadnego własnego profilu

```json
"sameAs": [
  "https://www.linkedin.com/company/mediaso",
  "https://www.facebook.com/mediaso",
  "https://www.instagram.com/mediaso",
  "https://g.page/mediaso"
]
```

### 3. Brak sekcji FAQ i `FAQPage` — ŚREDNIE

Nigdzie na stronie.

**Zastrzeżenie co do wyniku rozszerzonego.** Google od sierpnia 2023 ogranicza wyniki rozszerzone FAQ do witryn rządowych i zdrowotnych o uznanym autorytecie; pojawiły się też doniesienia o dalszym wycofywaniu tego formatu. Nie weryfikowałem aktualnego stanu wytycznych, więc **nie zakładaj, że `FAQPage` da gwiazdki w SERP-ie**. Sprawdź bieżącą dokumentację Google przed wdrożeniem.

Rekomendacja stoi mimo to, ale z innego powodu: sekcja pytań i odpowiedzi napisana pełnymi zdaniami to treść, którą modele językowe cytują wprost, i która domyka lukę „brak cytowalnych akapitów" z audytu GEO. Wartość jest w treści widocznej dla użytkownika, nie w samym znaczniku.

**Czego nie robić:** 84 pozycje z `/diagnostyka` to kryteria diagnostyczne typu tak/nie, bez tekstu odpowiedzi. Nie nadają się na `FAQPage` w obecnej formie. Są surowcem na artykuły wyjaśniające, z których dopiero można wyprowadzić prawdziwe pytania i odpowiedzi.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mediaso.pl/uslugi#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ile kosztuje strona internetowa dla przychodni?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pełna odpowiedź tekstem, minimum 50 słów, bez odsyłania do kontaktu."
      }
    }
  ]
}
```

Warunek: pytania i odpowiedzi muszą być widoczne na stronie dla użytkownika. Sam schemat bez treści to naruszenie wytycznych.

### 4. Brak encji `Person` — WYSOKIE

Zero osób w danych strukturalnych, co odpowiada zeru nazwisk w treści. Po uzupełnieniu `/o-nas`:

```json
{
  "@type": "Person",
  "@id": "https://mediaso.pl/o-nas#imie-nazwisko",
  "name": "Imię Nazwisko",
  "jobTitle": "Stanowisko",
  "worksFor": { "@id": "https://mediaso.pl/#organization" },
  "sameAs": ["https://www.linkedin.com/in/profil"]
}
```

Dopiąć do `Organization` przez `employee` lub `founder`.

### 5. Brak identyfikatorów rejestrowych — ŚREDNIE

Nie ma NIP-u ani REGON-u — ani w treści, ani w schemacie. W polskim B2B kupujący to sprawdza przed umową.

```json
"vatID": "PL0000000000",
"taxID": "0000000000",
"identifier": { "@type": "PropertyValue", "name": "REGON", "value": "000000000" }
```

Adres słusznie pominięty — model zdalny, `areaServed` załatwia sprawę.

### 6. Brak `AggregateRating` i `Review` — ŚREDNIE

Zero opinii w schemacie, bo zero opinii na stronie. Firma sprzedająca „zarządzanie opiniami pacjentów" nie pokazuje żadnej własnej.

Do wdrożenia dopiero po zebraniu prawdziwych opinii. Wystawianie `AggregateRating` bez widocznych recenzji to ręczna kara.

### 7. `Service` wskazują wszystkie na jeden URL — WYSOKIE po rozbiciu usług

Sześć encji `Service` ma osobne `@id` z fragmentami (`/uslugi#strony-internetowe`), ale wszystkie mają `url: "https://mediaso.pl/uslugi"`.

Przy rozbiciu `/uslugi` na osobne strony każdy `Service` musi dostać własny `url` i własny `@id` na docelowej podstronie. Inaczej schemat będzie wskazywał na hub zamiast na stronę, która ma rankować.

### 8. Brak `Organization.foundingDate` i `numberOfEmployees` — NISKIE

Drobne sygnały wiarygodności, tanie do dodania.

## Kolejność wdrożenia

1. Poprawić polskie znaki w JSON-LD — jedna zmiana w generatorze
2. Dodać `sameAs` — wymaga wcześniejszego założenia profili
3. Dodać NIP/REGON
4. `FAQPage` na `/uslugi` wraz z widoczną sekcją FAQ w treści
5. `Person` po przepisaniu `/o-nas`
6. Przepiąć `url` w `Service` przy rozbijaniu usług na podstrony
7. `AggregateRating` dopiero po zebraniu realnych opinii
