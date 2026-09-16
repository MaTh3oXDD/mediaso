import type { ServicePage } from './content.types';

/**
 * Strony usługowe. Kolejność w tablicy jest kolejnością w hubie `/uslugi`
 * i w sitemapie - pierwsze idą te z największym potencjałem wyszukiwań.
 */
export const SERVICE_PAGES: readonly ServicePage[] = [
  {
    slug: 'pozycjonowanie-klinik',
    navLabel: 'Pozycjonowanie klinik',
    h1: 'Pozycjonowanie klinik i przychodni',
    seoTitle: 'Pozycjonowanie klinik i przychodni (SEO medyczne) | mediaso',
    seoDescription:
      'SEO dla klinik, przychodni i gabinetów: audyt od 1 000 zł netto, podstrony usług i lokalizacji, wizytówka Google, treści zgodne z zasadami branży.',
    schemaName: 'Pozycjonowanie stron placówek medycznych',
    schemaServiceType: 'SEO dla branży medycznej',
    pricing: [
      {
        title: 'Pozycjonowanie',
        rows: [
          {
            name: 'Audyt i optymalizacja SEO na start',
            price: '1 000 – 2 500 zł',
            scope: 'analiza techniczna, podstawowe rekomendacje i wdrożenie uzgodnionych poprawek',
          },
          {
            name: 'Nowe podstrony usług i lokalizacji',
            price: '160 – 220 zł/h',
            scope: 'rozbudowa serwisu po estymacji; przy nowej stronie w cenie pakietu',
          },
          {
            name: 'Opieka Pro',
            price: '700 – 1 200 zł/mies.',
            scope: 'do 5 godzin pracy w miesiącu, priorytetowa obsługa, comiesięczny raport',
          },
          {
            name: 'Konsultacja techniczna',
            price: '160 – 220 zł/h',
            scope: 'analiza problemu, rekomendacja lub plan wdrożenia',
          },
        ],
      },
    ],
    lead:
      'Pozycjonowanie kliniki polega na tym, żeby strona placówki pojawiała się w Google wtedy, gdy pacjent szuka konkretnej usługi w konkretnym mieście. W praktyce oznacza to trzy rzeczy naraz: osobną podstronę dla każdej usługi, którą placówka realnie sprzedaje, uporządkowaną wizytówkę Google spiętą z tymi podstronami oraz techniczną stronę serwisu, którą Google potrafi przeczytać i szybko wyświetlić na telefonie. Największy ruch w medycynie jest lokalny i bardzo konkretny: „ortodonta Wrocław Krzyki", „USG jamy brzusznej Poznań", „endokrynolog prywatnie Gdańsk". Jedna strona z listą wszystkich usług nie wygra żadnego z tych zapytań, bo odpowiada na wszystkie po trochu. Prowadzimy pozycjonowanie w modelu: audyt, architektura podstron, treści, wdrożenie techniczne, comiesięczne raportowanie pozycji i telefonów z Google.',
    sections: [
      {
        heading: 'Od czego zaczynamy: audyt zamiast obietnic',
        paragraphs: [
          'Pierwsze dwa tygodnie to praca na danych placówki, nie na szablonie. Sprawdzamy, na jakie frazy strona już się wyświetla w Search Console, które podstrony przynoszą telefony, jak wygląda wizytówka Google w porównaniu z trzema najbliższymi konkurentami i co blokuje indeksowanie po stronie technicznej.',
          'Z audytu wychodzi lista fraz podzielona na trzy koszyki: zapytania, na których placówka jest blisko pierwszej dziesiątki i wystarczy je dopchnąć, zapytania wymagające nowej podstrony oraz zapytania, których nie warto atakować, bo kupuje je sieć medyczna z budżetem nieporównywalnym z lokalną przychodnią. Ten trzeci koszyk jest równie ważny - oszczędza miesiące pracy.',
        ],
        bullets: [
          'analiza widoczności w Google Search Console i pozycji na frazy usługowe',
          'porównanie wizytówki Google z konkurencją w promieniu obsługiwanego obszaru',
          'audyt techniczny: indeksowanie, szybkość na telefonie, dane strukturalne',
          'mapa fraz z podziałem na usługi, lokalizacje i pytania pacjentów',
        ],
      },
      {
        heading: 'Architektura podstron: jedna usługa, jeden adres',
        paragraphs: [
          'Google przypisuje wynik do adresu URL, nie do domeny. Jeżeli implantologia, ortodoncja i higienizacja mieszkają na jednej podstronie „Usługi", strona konkuruje sama ze sobą i przegrywa z gabinetem, który ma trzy osobne adresy. Rozbijamy ofertę na podstrony i pilnujemy, żeby każda odpowiadała na inne pytanie pacjenta.',
          'Każda podstrona usługi dostaje opis przebiegu wizyty, przygotowanie pacjenta, przeciwwskazania, orientacyjny czas i cenę oraz sekcję pytań. Przy placówkach wieloodziałowych dokładamy warstwę lokalizacji: osobny adres dla każdego oddziału z godzinami, parkingiem, dojazdem i zespołem. Struktura linkowania trzyma to razem - z usługi do oddziału i z oddziału do usług, które w nim realnie działają.',
        ],
        bullets: [
          'osobna podstrona dla każdej usługi kupowanej przez pacjenta',
          'strony oddziałów dla placówek z kilkoma adresami',
          'linkowanie wewnętrzne między usługą, oddziałem i specjalistą',
          'dane strukturalne MedicalBusiness i FAQ na podstronach usług',
        ],
      },
      {
        heading: 'Treść, która przechodzi przez wymagania branży medycznej',
        paragraphs: [
          'Reklama i prezentacja usług medycznych podlega ograniczeniom, których nie ma w innych branżach - obowiązują między innymi przepisy o zawodach lekarza i lekarza dentysty oraz zasady kodeksu etyki lekarskiej dotyczące treści reklamowych. Nie obiecujemy w tekstach wyników leczenia, nie budujemy przekazu na porównaniach z konkretnymi konkurentami i nie publikujemy zdjęć pacjentów bez pisemnej zgody.',
          'Treści opiniuje osoba merytoryczna po stronie placówki. To nie jest formalność: opis zabiegu napisany przez copywritera bez konsultacji z lekarzem prowadzącym potrafi zawierać błąd, który kosztuje wiarygodność u pacjenta i u Google. Publikujemy dopiero po akceptacji.',
        ],
      },
      {
        heading: 'Jak to wyceniamy',
        paragraphs: [
          'Zaczynamy od pozycji „audyt i optymalizacja SEO na start": 1 000-2 500 zł netto. Obejmuje analizę techniczną, listę fraz, rekomendacje i wdrożenie uzgodnionych poprawek na istniejącej stronie. Po audycie wiadomo, co dalej ma sens - i dopiero wtedy powstaje wycena.',
          'Rozbudowa serwisu o podstrony usług i lokalizacji rozliczana jest jako praca nad stroną, po 160-220 zł netto za godzinę albo w ramach pakietu, jeśli stronę budujemy od zera. Stała opieka nad widocznością mieści się w pakiecie Opieka Pro, 700-1 200 zł miesięcznie, razem z comiesięcznym raportem wykonanych prac.',
        ],
      },
      {
        heading: 'Czego realnie oczekiwać i kiedy',
        paragraphs: [
          'SEO nie działa w tydzień. Pierwsze ruchy pozycji na frazy o niskiej konkurencji widać zwykle po 6-10 tygodniach od wdrożenia zmian technicznych i publikacji podstron. Frazy ogólne w dużym mieście to horyzont kilku kwartałów i nie ma sensu obiecywać inaczej.',
          'Podstawowa optymalizacja nie jest gwarancją pozycji, ruchu ani liczby zapytań - wynik zależy też od konkurencji, treści, budżetu i historii domeny. To, co możemy obiecać, to wykonana praca i jej rozliczenie: pozycje na uzgodnionej liście fraz, wejścia z wyszukiwarki oraz telefony i kliknięcia w trasę z wizytówki Google.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ile trwa pozycjonowanie kliniki, zanim widać efekty?',
        answer:
          'Pierwsze wzrosty pozycji na frazy lokalne i mniej konkurencyjne pojawiają się zwykle po 6-10 tygodniach od wdrożenia zmian. Frazy ogólne w dużych miastach wymagają zwykle 6-12 miesięcy systematycznej pracy. Każdy, kto obiecuje pierwsze miejsce w miesiąc, sprzedaje coś innego niż SEO.',
      },
      {
        question: 'Czy pozycjonowanie kliniki jest zgodne z zakazem reklamy usług medycznych?',
        answer:
          'Tak, o ile treści trzymają się ograniczeń branżowych. Publikujemy rzetelne informacje o zakresie usług, przebiegu wizyty i cenach, nie obiecujemy skutków leczenia i nie budujemy przekazu na porównaniach z konkretnymi placówkami. Każdy tekst medyczny akceptuje osoba merytoryczna po stronie placówki.',
      },
      {
        question: 'Ile kosztuje audyt SEO placówki?',
        answer:
          'Audyt i optymalizacja SEO na start to 1 000-2 500 zł netto: analiza techniczna, lista fraz, rekomendacje i wdrożenie uzgodnionych poprawek. Dalsze prace - nowe podstrony usług, treści, stała opieka - wyceniamy dopiero po audycie, bo wcześniej nie wiadomo, ile ich potrzeba.',
      },
      {
        question: 'Czy potrzebuję nowej strony, żeby zacząć pozycjonowanie?',
        answer:
          'Nie zawsze. Jeżeli obecna strona jest indeksowana, działa na telefonie i da się do niej dopisywać podstrony, pracujemy na niej. Nową stronę rekomendujemy, gdy serwis nie ma systemu zarządzania treścią, ładuje się kilka sekund albo jest zbudowany tak, że Google nie widzi jego treści.',
      },
      {
        question: 'Co z placówką, która ma kilka oddziałów?',
        answer:
          'Każdy oddział dostaje własną podstronę z adresem, godzinami, zespołem i listą usług realizowanych na miejscu, a także osobną wizytówkę Google. Bez tego oddziały konkurują ze sobą w wynikach lokalnych i żaden nie wychodzi wysoko.',
      },
    ],
    related: [
      {
        path: '/uslugi/strony-internetowe-dla-placowek-medycznych',
        label: 'Strony internetowe dla placówek medycznych',
        description: 'Podstrony usług i lokalizacji, które da się pozycjonować.',
      },
      {
        path: '/uslugi/wizytowka-google-dla-placowki',
        label: 'Wizytówka Google dla placówki',
        description: 'Lokalne wyniki i mapy - druga połowa widoczności w Google.',
      },
      {
        path: '/wiedza/pozycjonowanie-kliniki-krok-po-kroku',
        label: 'Pozycjonowanie kliniki krok po kroku',
        description: 'Kolejność działań opisana tak, żeby dało się ją zrobić samodzielnie.',
      },
    ],
  },
  {
    slug: 'strony-internetowe-dla-placowek-medycznych',
    navLabel: 'Strony internetowe',
    h1: 'Strony internetowe dla placówek medycznych',
    seoTitle: 'Strony internetowe dla przychodni i klinik | mediaso',
    seoDescription:
      'Strony dla przychodni, klinik i gabinetów: od 2 900 zł netto, podstrony usług, rezerwacja wizyt, CMS, RODO. Realizacja od 1 do 6 tygodni.',
    schemaName: 'Strony internetowe dla placówek medycznych',
    schemaServiceType: 'Tworzenie stron internetowych',
    priceFrom: '2900',
    pricing: [
      {
        title: 'Pakiety stron',
        rows: [
          {
            name: 'Wizytówka Basic',
            price: '2 900 – 3 900 zł',
            scope: 'do 3 podstron, gotowy szablon, formularz kontaktowy, podstawowe SEO, 1 runda poprawek; 1–2 tygodnie',
          },
          {
            name: 'Wizytówka Custom',
            price: '4 900 – 6 500 zł',
            scope: 'do 6 podstron, indywidualny wygląd, mapa, galeria, opinie, SEO on-page, 2 rundy poprawek; 2–4 tygodnie',
          },
          {
            name: 'Strona firmowa z blogiem i CMS',
            price: '7 000 – 11 000 zł',
            scope: 'do 10 podstron, system CMS, blog, szkolenie z obsługi, 2 rundy poprawek; 3–6 tygodni',
          },
        ],
      },
      {
        title: 'Rezerwacja wizyt i płatności',
        rows: [
          {
            name: 'Integracja gotowego systemu rezerwacji',
            price: '1 800 – 3 500 zł',
            scope: 'Booksy, Calendly, SimplyBook.me lub podobny; do 5 usług; 3–7 dni roboczych',
          },
          {
            name: 'Dedykowany system rezerwacji Basic',
            price: '12 000 – 18 000 zł',
            scope: 'kalendarz, do 10 usług i 5 pracowników, panel administratora, e-maile; 5–8 tygodni',
          },
          {
            name: 'Dedykowany system rezerwacji Pro',
            price: 'od 20 000 zł',
            scope: 'wiele lokalizacji, role, integracje; cena po specyfikacji',
          },
          {
            name: 'Integracja płatności online',
            price: '1 200 – 2 500 zł',
            scope: 'jedna bramka (Przelewy24, Stripe, PayU), do 3 metod płatności',
          },
        ],
      },
      {
        title: 'Utrzymanie',
        rows: [
          {
            name: 'Hosting',
            price: '80 – 200 zł/mies.',
            scope: 'SSL, kopie zapasowe, monitoring dostępności; domena osobno',
          },
          {
            name: 'Opieka Basic',
            price: '250 – 450 zł/mies.',
            scope: 'do 2 godzin pracy w miesiącu: aktualizacje, kopie, drobne poprawki',
          },
          {
            name: 'Opieka Pro',
            price: '700 – 1 200 zł/mies.',
            scope: 'do 5 godzin pracy w miesiącu, priorytet, raport, konsultacja do 30 minut',
          },
          {
            name: 'Rozwój systemu',
            price: '160 – 220 zł/h',
            scope: 'nowe funkcje i większe zmiany, zawsze po estymacji',
          },
        ],
      },
      {
        title: 'Dodatkowo',
        rows: [
          {
            name: 'Migracja z innej platformy',
            price: 'od 40% ceny projektu',
            scope: 'wycena po sprawdzeniu danych, hostingu i możliwości eksportu',
          },
          {
            name: 'Wprowadzenie treści',
            price: '30 – 80 zł/szt.',
            scope: 'zależnie od liczby pól, zdjęć i źródła danych',
          },
          {
            name: 'Dodatkowa runda poprawek',
            price: '160 – 220 zł/h',
            scope: 'prace poza liczbą rund zawartą w pakiecie',
          },
        ],
      },
    ],
    lead:
      'Strona placówki medycznej ma do wykonania trzy zadania i wszystko poza nimi jest dodatkiem. Ma pozwolić pacjentowi umówić wizytę w kilka sekund, odpowiedzieć na pytania, które w innym wypadku trafiłyby do rejestracji, i pokazać się w Google wtedy, gdy ktoś szuka konkretnej usługi w okolicy. Większość stron przychodni przegrywa na pierwszym punkcie: numer telefonu jest w stopce, formularz ma dziewięć pól, a godziny otwarcia leżą w PDF-ie. Budujemy strony wokół ścieżki pacjenta, nie wokół struktury organizacyjnej placówki - bo pacjent nie szuka „działu diagnostyki obrazowej", tylko USG kolana na przyszły tydzień. Do tego dochodzą rzeczy niewidoczne: szybkość ładowania na telefonie w słabym zasięgu, dostępność dla osób starszych i formularze zgodne z RODO.',
    sections: [
      {
        heading: 'Co ma być na stronie przychodni',
        paragraphs: [
          'Zestaw obowiązkowy jest krótki i prawie zawsze niekompletny w istniejących serwisach. Telefon widoczny bez przewijania i klikalny na telefonie. Godziny przyjęć jako tekst, nie obrazek. Adres z mapą i informacją o parkingu. Cennik albo przynajmniej przedziały cenowe. Lista specjalistów z tym, co realnie przyjmują.',
          'Dalej idzie warstwa, która zdejmuje pracę z rejestracji: przygotowanie do badań, wymagane dokumenty, zasady odwoływania wizyt, informacja o teleporadach. Każde z tych pytań zadawane jest przez telefon kilkanaście razy dziennie w średniej przychodni.',
        ],
        bullets: [
          'klikalny telefon i przycisk umówienia wizyty na każdym ekranie',
          'osobna podstrona każdej usługi z ceną i przebiegiem wizyty',
          'strony oddziałów i specjalistów przy placówkach wieloosobowych',
          'przygotowanie do badań i dokumenty do pobrania',
          'formularz kontaktowy z klauzulą RODO i zgodą na kontakt',
        ],
      },
      {
        heading: 'Umawianie wizyt: integracja albo prosty formularz',
        paragraphs: [
          'Jeżeli placówka pracuje na systemie gabinetowym z modułem e-rejestracji, spinamy stronę z tym systemem i nie budujemy drugiego, konkurencyjnego kalendarza. Podwójny grafik to gwarancja podwójnej rezerwacji tego samego terminu.',
          'Gdy integracja nie wchodzi w grę, robimy formularz zgłoszenia wizyty: usługa, preferowany termin, dane kontaktowe i zgoda na kontakt. Zgłoszenie idzie mailem do rejestracji, a pacjent dostaje jasną informację, że to prośba o kontakt, nie potwierdzona rezerwacja. Uczciwy komunikat oszczędza reklamacji.',
        ],
      },
      {
        heading: 'Technologia i utrzymanie',
        paragraphs: [
          'Strony budujemy jako serwisy statyczne albo na sprawdzonym systemie CMS, zależnie od tego, kto i jak często będzie aktualizował treść. Placówka dostaje dostęp do edycji cennika, godzin i aktualności bez dzwonienia do agencji.',
          'Połączenie idzie po HTTPS, a formularze zapisują tylko te dane, które są potrzebne do odpowiedzi. Kopie zapasowe i monitoring dostępności wchodzą w hosting, aktualizacje oprogramowania w pakiet opieki technicznej. Po opłaceniu całości wynagrodzenia placówka dostaje uzgodnione w umowie prawa i dostępy do projektu.',
        ],
        bullets: [
          'panel do samodzielnej edycji treści, cennika i godzin',
          'certyfikat SSL, kopie zapasowe i monitoring dostępności w ramach hostingu',
          'wynik Core Web Vitals mierzony po wdrożeniu, nie deklarowany',
          'opieka techniczna z aktualizacjami i monitoringiem dostępności',
        ],
      },
      {
        heading: 'Pakiety, terminy i ceny',
        paragraphs: [
          'Pracujemy na trzech pakietach. Cena pakietowa obowiązuje w granicach opisanych limitów - liczba podstron, formularzy i rund poprawek jest maksymalna, nie orientacyjna. Wszystkie kwoty są netto, termin liczy się od otrzymania kompletu materiałów i zaliczki.',
          'Wizytówka Basic, 2 900-3 900 zł, do 3 podstron, gotowy szablon dopasowany do marki, formularz kontaktowy, podstawowe SEO on-page, jedna runda poprawek. Termin 1-2 tygodnie. Wystarcza praktyce jednoosobowej i gabinetowi, który potrzebuje adresu, cennika i telefonu w widocznym miejscu.',
          'Wizytówka Custom, 4 900-6 500 zł, do 6 podstron, indywidualny układ i typografia, mapa Google, galeria, sekcja opinii, dwie rundy poprawek. Termin 2-4 tygodnie. To najczęstszy wybór przychodni, która chce osobną podstronę dla każdej z kilku usług.',
          'Strona firmowa z blogiem i CMS, 7 000-11 000 zł, do 10 podstron, wdrożenie systemu zarządzania treścią, blog z kategoriami i wyszukiwaniem, integracja z dwoma profilami społecznościowymi, szkolenie z obsługi. Termin 3-6 tygodni. Dla placówki, która sama chce publikować i rozbudowywać serwis.',
        ],
        note: 'Cena pakietowa nie obejmuje przygotowania tekstów, zdjęć i identyfikacji wizualnej ani dokumentów prawnych. Prace poza pakietem rozliczamy po 160-220 zł netto za godzinę, zawsze po wcześniejszej estymacji.',
      },
      {
        heading: 'Rezerwacja wizyt i płatności',
        paragraphs: [
          'Jeżeli placówka korzysta z gotowego systemu rezerwacji, osadzamy go na stronie: konfiguracja widżetu, do 5 usług lub typów wizyt, powiadomienia i testy na telefonie. Koszt 1 800-3 500 zł, termin 3-7 dni roboczych. Abonament samego systemu opłaca placówka osobno.',
          'Gdy gotowe narzędzie nie wystarcza, budujemy dedykowany system rezerwacji. Wariant Basic, 12 000-18 000 zł, obejmuje publiczny kalendarz dostępności, do 10 usług i 5 pracowników lub gabinetów, panel administratora, potwierdzenia e-mail i jedną bramkę płatności. Termin 5-8 tygodni. Wariant Pro, od 20 000 zł, dotyczy wielu lokalizacji, rozbudowanych ról i integracji - tu najpierw powstaje specyfikacja i harmonogram, dopiero potem cena.',
          'Integracja płatności online, jeśli placówka pobiera przedpłaty za wizyty komercyjne: 1 200-2 500 zł za jedną bramkę i do trzech metod płatności. Prowizje operatora są poza tą kwotą.',
        ],
      },
      {
        heading: 'Utrzymanie po wdrożeniu',
        paragraphs: [
          'Hosting z certyfikatem SSL, kopiami zapasowymi i monitoringiem dostępności: 80-200 zł miesięcznie, zależnie od rodzaju strony. Domenę placówka opłaca we własnym zakresie.',
          'Opieka Basic, 250-450 zł miesięcznie, obejmuje do 2 godzin pracy: aktualizacje, kontrolę działania, kopie i drobne poprawki treści. Opieka Pro, 700-1 200 zł miesięcznie, to do 5 godzin, priorytetowa obsługa, comiesięczny raport wykonanych prac i konsultacja. Niewykorzystane godziny nie przechodzą na kolejny miesiąc.',
          'Nowe funkcje i większe zmiany rozliczamy po 160-220 zł netto za godzinę. Przed rozpoczęciem dostajesz opis zadania, szacowany czas albo cenę maksymalną i termin. Przez 30 dni od publikacji bezpłatnie usuwamy błędy wynikające z niezgodności z uzgodnionym zakresem.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje strona internetowa dla przychodni?',
        answer:
          'Wizytówka do 3 podstron kosztuje 2 900-3 900 zł netto, wersja z indywidualnym projektem i sześcioma podstronami 4 900-6 500 zł, a strona z blogiem i systemem zarządzania treścią 7 000-11 000 zł. Do tego dochodzi hosting od 80 zł miesięcznie i opcjonalna opieka techniczna od 250 zł miesięcznie. Rezerwacja wizyt to osobna pozycja: od 1 800 zł za osadzenie gotowego systemu.',
      },
      {
        question: 'Ile trwa wykonanie strony dla placówki medycznej?',
        answer:
          'Wizytówka Basic 1-2 tygodnie, Custom 2-4 tygodnie, strona z blogiem i CMS 3-6 tygodni - licząc od otrzymania kompletu materiałów i zaliczki. Termin przesuwa się najczęściej z powodu materiałów po stronie placówki: zdjęć zespołu, zatwierdzonego cennika i opisów usług wymagających akceptacji merytorycznej.',
      },
      {
        question: 'Czy strona będzie zgodna z RODO?',
        answer:
          'Formularze zbierają tylko dane potrzebne do odpowiedzi, zawierają klauzulę informacyjną i osobną zgodę na kontakt, a dane trafiają na serwer w Unii Europejskiej. Placówka dostaje też politykę prywatności dopasowaną do tego, co strona faktycznie zbiera, a nie szablon z internetu.',
      },
      {
        question: 'Czy mogę sam edytować treści?',
        answer:
          'Tak. Cennik, godziny przyjęć, skład zespołu i aktualności edytuje się z panelu bez znajomości kodu. Zmiany w strukturze strony i nowe podstrony usług robimy w ramach opieki albo na zlecenie.',
      },
    ],
    related: [
      {
        path: '/uslugi/pozycjonowanie-klinik',
        label: 'Pozycjonowanie klinik',
        description: 'Strona bez widoczności w Google nie pozyskuje pacjentów.',
      },
      {
        path: '/wiedza/ile-kosztuje-strona-dla-przychodni',
        label: 'Ile kosztuje strona internetowa dla przychodni',
        description: 'Z czego składa się wycena i gdzie firmy ukrywają koszty.',
      },
    ],
  },
  {
    slug: 'social-media-dla-klinik',
    navLabel: 'Social media',
    h1: 'Social media dla klinik, gabinetów i lekarzy',
    seoTitle: 'Social media dla klinik, gabinetów i lekarzy | mediaso',
    seoDescription:
      'Prowadzimy Facebooka i Instagrama klinik, gabinetów i lekarzy: treści, grafiki, wideo, obsługa wiadomości. Od 2 700 zł miesięcznie, kampanie Meta Ads wyceniane osobno.',
    schemaName: 'Prowadzenie social media placówek medycznych',
    schemaServiceType: 'Zarządzanie mediami społecznościowymi',
    priceFrom: '2700',
    pricing: [
      {
        title: 'Pakiety prowadzenia social mediów',
        rows: [
          {
            name: 'Pakiet 1',
            price: '2 999 zł pierwszy miesiąc',
            priceNext: '2 700 zł każdy kolejny miesiąc',
            features: [
              'audyt i optymalizacja obecnych profili (lub ich założenie), w tym wizytówki Google',
              'strategia komunikacji',
              '12 postów graficznych i karuzel edukacyjnych miesięcznie',
              'relacje (Stories) na Instagramie i Facebooku',
              'moderacja komentarzy',
              'miesięczny harmonogram treści i copywriting',
              'grafiki zgodne z identyfikacją wizualną placówki',
              '10 zdjęć do wykorzystania w social mediach, na stronie i w wizytówce Google',
            ],
          },
          {
            name: 'Pakiet 2',
            price: '3 999 zł pierwszy miesiąc',
            priceNext: '3 600 zł każdy kolejny miesiąc',
            features: [
              'audyt i optymalizacja obecnych profili (lub ich założenie), w tym wizytówki Google',
              'strategia komunikacji',
              '8 postów graficznych lub karuzel i 4 rolki na Instagram i Facebook',
              'TikTok: 4 filmy miesięcznie',
              'raz w miesiącu sesja nagraniowo-zdjęciowa w placówce',
              'miesięczny harmonogram treści i copywriting',
              'relacje (Stories) na Instagramie i Facebooku',
              'dedykowana oprawa graficzna',
              'moderacja komentarzy',
              '20 zdjęć do wykorzystania w social mediach, na stronie i w wizytówce Google',
            ],
          },
          {
            name: 'Pakiet 3',
            price: '4 499 zł pierwszy miesiąc',
            priceNext: '3 900 zł każdy kolejny miesiąc',
            features: [
              'audyt i optymalizacja obecnych profili (lub ich założenie), w tym wizytówki Google',
              'strategia komunikacji',
              '8 postów graficznych lub karuzel i 6 rolek na Instagram i Facebook',
              'TikTok: 6 filmów miesięcznie',
              'raz w miesiącu sesja nagraniowo-zdjęciowa w placówce',
              'miesięczny harmonogram treści i copywriting',
              'relacje (Stories) na Instagramie i Facebooku',
              'dedykowana oprawa graficzna',
              'moderacja komentarzy',
              '20 zdjęć do wykorzystania w social mediach, na stronie i w wizytówce Google',
            ],
          },
        ],
      },
    ],
    lead:
      'Profil kliniki na Facebooku i Instagramie pełni rolę, o której łatwo zapomnieć: pacjent, który usłyszał nazwę placówki od znajomego, sprawdza ją tam, zanim zadzwoni. Widzi wtedy albo pracującą placówkę z aktualnymi informacjami i odpowiedziami na wiadomości, albo profil z ostatnim postem sprzed roku. To rozstrzyga więcej decyzji niż jakakolwiek kampania. Prowadzenie social mediów placówki medycznej sprowadza się więc najpierw do regularności i obsługi wiadomości, a dopiero potem do zasięgów. Dochodzi do tego ograniczenie, którego nie ma w innych branżach: nie wolno publikować wizerunku ani danych pacjenta bez zgody, a treść nie może obiecywać efektu leczenia. Pracujemy w rytmie miesięcznym, na planie treści zatwierdzanym z wyprzedzeniem.',
    sections: [
      {
        heading: 'Co publikujemy zamiast cytatów o zdrowiu',
        paragraphs: [
          'Treści, które w placówkach medycznych realnie generują kontakt, są konkretne: nowy sprzęt i co dzięki niemu można zbadać, nowy specjalista z zakresem przyjęć, wolne terminy w tym tygodniu, przygotowanie do konkretnego badania, odpowiedź na pytanie, które rejestracja słyszy codziennie.',
          'Post z ogólną grafiką o dbaniu o zdrowie nie przynosi nic poza wypełnieniem kalendarza. Plan treści układamy z zespołem placówki, bo to rejestracja i lekarze wiedzą, o co pacjenci pytają najczęściej.',
        ],
        bullets: [
          'zapowiedzi wolnych terminów i nowych usług',
          'przedstawienie specjalistów: zakres przyjęć, doświadczenie, języki',
          'instrukcje przygotowania do badań w formie krótkiego wideo',
          'odpowiedzi na powtarzalne pytania z rejestracji',
          'komunikaty organizacyjne: dni wolne, zmiany godzin, nowy adres',
        ],
      },
      {
        heading: 'Profil lekarza a profil placówki',
        paragraphs: [
          'Lekarz prowadzący własną praktykę potrzebuje czegoś innego niż przychodnia z sześcioma poradniami. Profil placówki komunikuje dostępność, zakres usług i organizację. Profil lekarza sprzedaje kompetencję konkretnej osoby, więc treść stoi na tym, co ten specjalista realnie robi: jakie przypadki prowadzi, na jakim sprzęcie pracuje, na jakich konferencjach bywa i co z tego wynika dla pacjenta.',
          'Prowadzimy oba warianty, a przy lekarzu zatrudnionym w kilku miejscach ustalamy na starcie, co należy do jego marki osobistej, a co do marki placówki. Bez tego rozdziału pojawia się problem przy zmianie pracy: profil zbudowany wokół adresu przychodni traci sens, gdy lekarz zaczyna przyjmować gdzie indziej.',
          'Jedno ograniczenie dotyczy obu przypadków tak samo. Lekarz występujący we własnym imieniu podlega zasadom kodeksu etyki lekarskiej co do treści reklamowych, więc materiał opiera się na informacji o zakresie przyjęć i przebiegu leczenia, nie na obietnicy wyniku.',
        ],
        bullets: [
          'profil lekarza: marka osobista, zakres przyjęć, doświadczenie, wystąpienia',
          'profil placówki: dostępność terminów, organizacja, zespół, usługi',
          'rozdział treści przy lekarzu przyjmującym w kilku miejscach',
          'wideo z lekarzem jako materiał, którego nie skopiuje żadna konkurencja',
        ],
      },
      {
        heading: 'Obsługa wiadomości i komentarzy',
        paragraphs: [
          'Wiadomości na Messengerze i Instagramie to dziś ta sama kolejka co telefon do rejestracji, tylko bez sygnału zajętości. Ustalamy z placówką, na co odpowiadamy sami, a co przekazujemy do rejestracji - i w jakim czasie.',
          'Twarda zasada: żadnych porad medycznych i żadnych danych o stanie zdrowia w wiadomościach. Pytania o objawy przekierowujemy do kontaktu telefonicznego lub wizyty. Komentarze z negatywną opinią zostają widoczne, odpowiedź idzie publicznie i bez ujawniania, czy autor był pacjentem, bo samo potwierdzenie tego faktu jest ujawnieniem danych o zdrowiu.',
        ],
      },
      {
        heading: 'Kampanie Meta Ads dla placówki',
        paragraphs: [
          'Reklamy uruchamiamy pod konkretny cel: zapełnienie grafiku nowej poradni, promocję usługi komercyjnej albo pozyskanie kontaktów na konsultację. Kampania bez celu liczbowego kończy się raportem z zasięgami, których nie da się przełożyć na przychód.',
          'Meta ma osobne ograniczenia dla reklam dotyczących zdrowia - nie pozwala między innymi kierować przekazu na domniemany stan zdrowia odbiorcy. Piszemy więc teksty mówiące o usłudze i placówce, nie o problemie odbiorcy, i to samo dotyczy kierowania kampanii.',
          'Kampanie nie wchodzą w żaden pakiet prowadzenia profili - wyceniamy je osobno, zależnie od celu i liczby kampanii. Budżet mediowy, czyli kwota wydana na same reklamy w Meta, jest osobnym kosztem.',
        ],
        bullets: [
          'cel kampanii wyrażony liczbą kontaktów lub wizyt, nie zasięgiem',
          'osobne kampanie dla usług komercyjnych i dla informacji organizacyjnych',
          'pomiar telefonów i formularzy, nie tylko kliknięć',
          'raport miesięczny z kosztem pozyskania kontaktu',
        ],
      },
      {
        heading: 'Jak wygląda współpraca',
        paragraphs: [
          'Zaczynamy od audytu profili i przeglądu tego, co placówka publikowała do tej pory. Potem ustalamy plan treści na miesiąc, zbieramy materiał zdjęciowy i wideo na miejscu albo pracujemy na materiałach placówki, a publikację poprzedza akceptacja.',
          'Pracujemy w trzech pakietach, od 2 999 złotych za pierwszy miesiąc i 2 700 złotych za każdy kolejny. Pierwszy miesiąc kosztuje więcej, bo obejmuje audyt i optymalizację profili albo ich założenie, razem z wizytówką Google. Pakiety 2 i 3 dokładają rolki, filmy na TikToku i comiesięczną sesję nagraniowo-zdjęciową w placówce. Pełny zakres pakietów jest w cenniku na dole strony.',
        ],
      },
    ],
    faq: [
      {
        question: 'Czy klinika może pokazywać pacjentów w social mediach?',
        answer:
          'Tylko za pisemną zgodą na publikację wizerunku, ze wskazaniem kanału i możliwością wycofania. Samo pokazanie osoby w placówce medycznej ujawnia informację o korzystaniu ze świadczeń, czyli dane szczególnej kategorii. Bez zgody publikujemy wyłącznie materiały z zespołem i wnętrzami bez pacjentów.',
      },
      {
        question: 'Czy prowadzicie social media dla pojedynczego lekarza, nie dla całej placówki?',
        answer:
          'Tak. Profil lekarza prowadzimy jako markę osobistą: zakres przyjęć, prowadzone przypadki, sprzęt, wystąpienia i publikacje. To inna praca niż profil przychodni, która komunikuje głównie dostępność i organizację. Przy lekarzu przyjmującym w kilku miejscach ustalamy na starcie, które treści należą do jego marki, a które do marki placówki.',
      },
      {
        question: 'Ile postów miesięcznie ma sens dla placówki medycznej?',
        answer:
          'Cztery publikacje tygodniowo utrzymują profil w rotacji i dają zapas treści na wiadomości i relacje. Poniżej dwóch tygodniowo profil wygląda na porzucony. Powyżej ośmiu rośnie koszt, a przyrost kontaktów zwykle już nie nadąża.',
      },
      {
        question: 'Kto odpowiada na wiadomości od pacjentów?',
        answer:
          'Ustalamy podział na starcie. Pytania organizacyjne - godziny, ceny, zakres usług - obsługujemy my. Wszystko, co dotyczy stanu zdrowia, terminu wizyty konkretnego pacjenta lub wyników, idzie do rejestracji placówki. Nigdy nie udzielamy porad medycznych w imieniu placówki.',
      },
      {
        question: 'Czy prowadzicie profile na TikToku i YouTubie?',
        answer:
          'Prowadzimy, jeśli placówka ma specjalistę gotowego regularnie występować przed kamerą. Bez tego kanały wideo nie mają z czego żyć i lepiej zainwestować ten budżet w Google i wizytówkę.',
      },
    ],
    related: [
      {
        path: '/uslugi/wizytowka-google-dla-placowki',
        label: 'Wizytówka Google dla placówki',
        description: 'Pacjent sprawdza mapy i opinie, zanim otworzy Facebooka.',
      },
      {
        path: '/wiedza/rodo-w-marketingu-placowki-medycznej',
        label: 'RODO w marketingu placówki medycznej',
        description: 'Zgody na wizerunek, opinie i kontakt - co trzeba mieć na piśmie.',
      },
    ],
  },
  {
    slug: 'wizytowka-google-dla-placowki',
    navLabel: 'Wizytówka Google',
    h1: 'Wizytówka Google dla placówki medycznej',
    seoTitle: 'Optymalizacja wizytówki Google dla placówki medycznej | mediaso',
    seoDescription:
      'Prowadzimy Profil Firmy w Google dla klinik i przychodni: kategorie, usługi, zdjęcia, opinie pacjentów, posty i raport widoczności w mapach.',
    schemaName: 'Optymalizacja Profilu Firmy w Google',
    schemaServiceType: 'Local SEO',
    pricing: [
      {
        title: 'Wdrożenie',
        rows: [
          {
            name: 'Audyt i wdrożenie profilu',
            price: '900 – 1 400 zł jednorazowo',
            scope: 'audyt wizytówki z listą priorytetów i pełna optymalizacja: kategorie, usługi, atrybuty, zdjęcia',
          },
        ],
      },
      {
        title: 'Bieżąca obsługa',
        rows: [
          {
            name: 'Pakiet Start',
            price: '600 – 900 zł/mies.',
            scope: 'aktualne godziny i usługi, zdjęcia, posty, odpowiedzi na opinie',
          },
          {
            name: 'Pakiet Optymalny',
            price: '900 – 1 500 zł/mies.',
            scope: 'zakres Start oraz systemowe zbieranie opinii, frazy lokalne i comiesięczny raport widoczności',
          },
          {
            name: 'Placówka z kilkoma lokalizacjami',
            price: 'wycena indywidualna',
            scope: 'osobna wizytówka dla każdego oddziału, jedna umowa i jeden zbiorczy raport',
          },
        ],
      },
    ],
    lead:
      'Wizytówka Google jest dla placówki medycznej ważniejsza niż strona internetowa, bo pacjent widzi ją pierwszą i często na niej kończy. Z panelu w mapach dzwoni, sprawdza godziny, czyta opinie i wyznacza trasę - bez otwierania witryny. Trzy rzeczy decydują o tym, czy placówka pojawia się w lokalnych wynikach: poprawnie dobrana kategoria główna, kompletność profilu oraz opinie, ich liczba, świeżość i odpowiedzi placówki. Większość wizytówek przychodni przegrywa na pierwszym punkcie, bo ma ustawioną kategorię ogólną zamiast tej, której realnie szuka pacjent. Prowadzimy profil jak stałą pozycję: uzupełniamy usługi i godziny, publikujemy zdjęcia i posty, pilnujemy spójności danych z innymi serwisami i odpowiadamy na opinie w sposób, który nie ujawnia, kto był pacjentem.',
    sections: [
      {
        heading: 'Kategoria i usługi - miejsce, gdzie przegrywa większość placówek',
        paragraphs: [
          'Kategoria główna to najmocniejszy sygnał w lokalnych wynikach. Przychodnia z kategorią „przychodnia" nie pojawi się na zapytanie o ortodontę, nawet jeśli ortodonta przyjmuje na miejscu. Dobieramy kategorię główną pod usługę o największej wartości i uzupełniamy listę kategorii dodatkowych.',
          'Do tego wypełniamy sekcję usług konkretnymi nazwami zabiegów i badań z krótkimi opisami. Ta lista pojawia się w profilu i pomaga Google zrozumieć, na jakie zapytania wyświetlać placówkę.',
        ],
        bullets: [
          'dobór kategorii głównej pod usługę o najwyższej wartości',
          'kategorie dodatkowe pokrywające resztę zakresu przyjęć',
          'lista usług z opisami i cenami, jeśli placówka je publikuje',
          'atrybuty: dostępność dla wózków, parking, płatności, teleporady',
        ],
      },
      {
        heading: 'Godziny, zdjęcia i posty',
        paragraphs: [
          'Godziny muszą być zgodne z rzeczywistością, łącznie z dniami świątecznymi i przerwami urlopowymi. Pacjent, który przyjdzie pod zamknięte drzwi w godzinach podanych w mapach, zostawia opinię i to ta opinia zostaje na lata.',
          'Zdjęcia aktualizujemy cyklicznie: wejście od strony ulicy, poczekalnia, gabinety, zespół, sprzęt. Wejście od ulicy jest ważniejsze, niż się wydaje - po nim pacjent rozpoznaje budynek. Posty publikujemy z informacjami o wolnych terminach, nowych specjalistach i zmianach organizacyjnych.',
        ],
      },
      {
        heading: 'Opinie: zbieranie i odpowiadanie',
        paragraphs: [
          'Prośbę o opinię wysyłamy do wszystkich pacjentów z danej grupy, nie tylko do tych, którzy wyglądają na zadowolonych, i nie oferujemy niczego w zamian. Selekcja i wynagradzanie łamią zasady Google i wywracają wiarygodność profilu, gdy wyjdą na jaw.',
          'Odpowiadamy na każdą opinię, także negatywną, i nigdy nie potwierdzamy w odpowiedzi, że autor był pacjentem placówki. Standardowa formuła: podziękowanie, zaproszenie do kontaktu bezpośredniego, żadnych szczegółów o leczeniu. Wyjaśnienia idą w rozmowie, nie publicznie.',
        ],
        bullets: [
          'prośba o opinię po wizycie, wysyłana systemowo do całej grupy pacjentów',
          'odpowiedź na każdą opinię w ciągu kilku dni roboczych',
          'zgłaszanie opinii łamiących zasady platformy zamiast wdawania się w spór',
          'monitoring średniej oceny i tempa przyrostu opinii',
        ],
      },
      {
        heading: 'Placówki z kilkoma adresami',
        paragraphs: [
          'Każdy oddział to osobna wizytówka pod własnym adresem i numerem telefonu, spięta z podstroną tego oddziału na stronie. Wspólna wizytówka dla trzech lokalizacji nie wyświetli się w żadnej z nich poprawnie.',
          'Przy większej liczbie oddziałów pilnujemy spójności nazw i danych między wizytówkami, katalogami branżowymi i stroną. Rozjazd w numerze telefonu albo w nazwie osłabia lokalne wyniki wszystkich lokalizacji naraz.',
        ],
      },
    ],
    faq: [
      {
        question: 'Czy placówka medyczna może mieć wizytówkę Google bez podawania adresu?',
        answer:
          'Placówka przyjmująca pacjentów w gabinecie musi podać adres - to warunek pojawienia się w mapach. Ukrycie adresu jest przewidziane dla firm dojeżdżających do klienta i przy stacjonarnej przychodni zadziała przeciwko widoczności.',
      },
      {
        question: 'Jak szybko widać efekty optymalizacji wizytówki?',
        answer:
          'Zmiany kategorii i uzupełnienie profilu Google przetwarza zwykle w kilka dni, a pierwsze różnice w liczbie wyświetleń i telefonów widać w statystykach profilu po dwóch do czterech tygodniach. Wzrost napędzany opiniami jest wolniejszy, bo zależy od tempa ich zbierania.',
      },
      {
        question: 'Co zrobić z fałszywą negatywną opinią?',
        answer:
          'Zgłosić ją do Google jako naruszenie zasad i równolegle odpowiedzieć publicznie w sposób rzeczowy, bez ujawniania, czy autor był pacjentem. Google usuwa część zgłoszeń, ale nie wszystkie - spokojna odpowiedź pod opinią pracuje na wizerunek nawet wtedy, gdy opinia zostaje.',
      },
      {
        question: 'Czy warto płacić za pozycjonowanie wizytówki?',
        answer:
          'Warto, jeśli praca polega na uzupełnianiu profilu, zbieraniu opinii i publikowaniu treści. Nie warto, jeśli wykonawca obiecuje sztuczne opinie albo manipulację lokalizacją - Google karze za to zawieszeniem profilu, a odzyskanie go bywa trudne.',
      },
    ],
    related: [
      {
        path: '/uslugi/pozycjonowanie-klinik',
        label: 'Pozycjonowanie klinik',
        description: 'Wizytówka i strona pracują razem albo żadna nie wychodzi wysoko.',
      },
      {
        path: '/uslugi/social-media-dla-klinik',
        label: 'Social media dla klinik',
        description: 'Drugie miejsce, w którym pacjent sprawdza placówkę przed telefonem.',
      },
      {
        path: '/wiedza/jak-zbierac-opinie-pacjentow',
        label: 'Jak zbierać opinie pacjentów zgodnie z prawem',
        description: 'Gotowa procedura zbierania opinii bez selekcji i nagród.',
      },
    ],
  },
];
