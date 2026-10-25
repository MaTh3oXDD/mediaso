import type { ServicePage } from './content.types';

/**
 * Strony usługowe. Kolejność w tablicy jest kolejnością w hubie `/uslugi`
 * i w sitemapie - pierwsze idą te z największym potencjałem wyszukiwań.
 */
export const SERVICE_PAGES: readonly ServicePage[] = [
  {
    slug: 'pozycjonowanie-klinik',
    navLabel: 'Pozycjonowanie klinik',
    h1: 'Pozycjonowanie klinik, przychodni i centrów medycznych',
    seoTitle: 'Pozycjonowanie klinik medycznych i przychodni - SEO dla klinik | mediaso',
    seoDescription:
      'Pozycjonowanie klinik, centrów medycznych, przychodni i gabinetów lekarskich. Frazy lokalne, podstrony usług, wizytówka Google i treści zgodne z zakazem reklamy.',
    schemaName: 'Pozycjonowanie klinik i placówek medycznych',
    schemaServiceType: 'SEO dla branży medycznej',
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
        heading: 'Pozycjonowanie lokalne placówki medycznej',
        paragraphs: [
          'Pacjent rzadko wpisuje samą nazwę specjalizacji. Wpisuje „ginekolog Mokotów", „rezonans magnetyczny Łódź prywatnie" albo „stomatolog blisko mnie". Google odpowiada na takie zapytania dwoma blokami naraz: mapą z trzema placówkami i zwykłymi wynikami pod nią. Pozycjonowanie lokalne obsługuje oba: wizytówkę Google z właściwą kategorią i opiniami oraz podstrony usług z nazwą miasta i dzielnicy w treści, tytule i danych strukturalnych.',
          'Przy centrum medycznym z kilkoma poradniami układamy frazy w siatkę: specjalizacja razem z miastem, badanie razem z miastem, a przy dużych miastach dodatkowo dzielnica. Każde pole siatki dostaje jeden adres na stronie, a wizytówka linkuje do podstrony, której zapytanie dotyczy, zamiast do strony głównej.',
        ],
        bullets: [
          'frazy „usługa + miasto" i „usługa + dzielnica" przypisane do konkretnych podstron',
          'spójna nazwa, adres i telefon na stronie, w wizytówce i w katalogach medycznych',
          'dane strukturalne MedicalClinic lub Physician z adresem i godzinami',
          'linki z wizytówki Google do podstron usług, nie tylko do strony głównej',
        ],
        link: {
          path: '/uslugi/wizytowka-google-dla-placowki',
          label: 'Wizytówka Google dla placówki',
          description: 'Druga połowa pozycjonowania lokalnego: mapy, kategorie i opinie.',
        },
      },
      {
        heading: 'SEO dla klinik stomatologicznych, estetycznych i dla lekarzy',
        paragraphs: [
          'Każdy typ placówki ma inny rozkład zapytań. Klinika stomatologiczna zarabia na implantach, ortodoncji i protetyce, więc to te trzy usługi dostają najbardziej rozbudowane podstrony z przebiegiem leczenia, etapami i pytaniami o ból i czas gojenia. Klinika medycyny estetycznej i chirurgii plastycznej konkuruje na frazach zabiegowych, gdzie treść musi omijać obietnicę efektu i zdjęcia przed i po bez zgody - tu ograniczenia reklamy są najczęściej łamane przez konkurencję i najczęściej zgłaszane.',
          'Przy pozycjonowaniu lekarza pracujemy też na nazwisku. Pacjent, który dostał polecenie, wpisuje imię i nazwisko specjalisty, a w wynikach widzi zwykle profil w katalogu lekarzy zamiast strony samego lekarza. Osobna podstrona specjalisty z zakresem przyjęć, kwalifikacjami i miejscami przyjęć, spięta danymi strukturalnymi Physician, odzyskuje ten ruch. Fizjoterapia, diagnostyka obrazowa i laboratoria mają własne wzorce zapytań, głównie cenowe i lokalne, i dla nich budujemy osobną mapę fraz.',
        ],
        bullets: [
          'stomatologia: implanty, ortodoncja, protetyka, leczenie kanałowe pod mikroskopem',
          'medycyna estetyczna i chirurgia plastyczna: frazy zabiegowe bez obietnic efektu',
          'lekarze specjaliści: podstrona lekarza i widoczność na imię i nazwisko',
          'diagnostyka, laboratoria, fizjoterapia: zapytania o cenę, przygotowanie i dostępność',
        ],
      },
      {
        heading: 'Jak wyceniamy pozycjonowanie',
        paragraphs: [
          'Nie sprzedajemy pakietów z góry. Koszt pozycjonowania kliniki zależy od trzech rzeczy: liczby usług, które mają się wyświetlać w Google, liczby miast i oddziałów oraz od tego, ile pracy wymaga obecna strona. Przychodnia w mieście powiatowym z pięcioma usługami i centrum medyczne z trzema oddziałami w Warszawie to dwa różne projekty, a wspólny cennik zawyżyłby cenę pierwszemu albo zaniżył zakres drugiemu.',
          'Wycena powstaje po bezpłatnej 30-minutowej konsultacji i krótkim przeglądzie strony oraz wizytówki. Dostajesz zakres prac rozpisany na miesiące, listę fraz, od których zaczynamy, i stałą kwotę za uzgodniony zakres.',
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
        question: 'Ile kosztuje pozycjonowanie kliniki?',
        answer:
          'Koszt zależy od liczby usług, które mają się wyświetlać w Google, liczby miast i oddziałów oraz stanu obecnej strony. Wycenę przygotowujemy po bezpłatnej 30-minutowej konsultacji: zakres prac rozpisany na miesiące i stała kwota za uzgodniony zakres, bez dopłat za wyniki.',
      },
      {
        question: 'Czym różni się pozycjonowanie lekarza od pozycjonowania kliniki?',
        answer:
          'Klinika walczy o frazy usługowe z miastem, na przykład „ortopeda Kraków". Lekarz dodatkowo o własne imię i nazwisko, bo polecony pacjent szuka konkretnej osoby. Lekarz potrzebuje więc podstrony z kwalifikacjami, zakresem przyjęć i adresami gabinetów, danych strukturalnych Physician i spójnego wpisu w katalogach lekarzy.',
      },
      {
        question: 'Dlaczego pozycjonowanie placówki medycznej warto zlecić agencji z branży?',
        answer:
          'Bo tekst, który dobrze sprzedaje w innej branży, w medycynie może być wykroczeniem z art. 147a Kodeksu wykroczeń. Agencja pracująca wyłącznie z placówkami medycznymi zna ograniczenia reklamy świadczeń zdrowotnych, zasady publikowania danych pacjentów i wzorce zapytań w poszczególnych specjalizacjach, więc nie traci miesięcy na naukę na koszt klienta.',
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
        label: 'Jak samodzielnie wypromować klinikę w Google',
        description: 'Kolejność działań opisana tak, żeby dało się ją zrobić samodzielnie.',
      },
    ],
  },
  {
    slug: 'strony-internetowe-dla-placowek-medycznych',
    navLabel: 'Strony internetowe',
    h1: 'Strony internetowe dla placówek medycznych',
    seoTitle: 'Strony internetowe dla placówek medycznych, przychodni i klinik | mediaso',
    seoDescription:
      'Projektujemy strony dla przychodni, klinik i gabinetów lekarskich: podstrony usług pod Google, rezerwacja wizyt online, panel CMS, formularze zgodne z RODO.',
    schemaName: 'Strony internetowe dla placówek medycznych',
    schemaServiceType: 'Tworzenie stron internetowych',
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
        heading: 'Rezerwacja wizyt i płatności online',
        paragraphs: [
          'Jeżeli placówka korzysta z gotowego systemu rezerwacji, osadzamy go na stronie: konfiguracja widżetu, typy wizyt, powiadomienia i testy na telefonie. Abonament samego systemu placówka opłaca bezpośrednio u dostawcy.',
          'Gdy gotowe narzędzie nie wystarcza, budujemy dedykowany system rezerwacji: publiczny kalendarz dostępności, grafik lekarzy i gabinetów, panel administratora, potwierdzenia e-mail i przedpłaty za wizyty komercyjne przez Przelewy24, PayU albo Stripe. Przy wielu lokalizacjach najpierw powstaje specyfikacja i harmonogram, dopiero potem wycena.',
        ],
      },
      {
        heading: 'Jak wygląda realizacja i ile trwa',
        paragraphs: [
          'Praca idzie w czterech etapach: rozmowa o ścieżce pacjenta i usługach, które mają przynosić wizyty, projekt układu strony, treści z akceptacją merytoryczną po stronie placówki i wdrożenie z pomiarem szybkości na telefonie. Prosta strona gabinetu powstaje w 1-2 tygodnie, serwis przychodni z podstronami usług w 2-4 tygodnie, a strona z blogiem i systemem zarządzania treścią w 3-6 tygodni, licząc od kompletu materiałów.',
          'Wycenę przygotowujemy po krótkiej rozmowie, bo koszt zależy od liczby podstron, sposobu umawiania wizyt i tego, kto pisze treści. Dostajesz zakres z liczbą podstron i rund poprawek zapisaną w umowie oraz stałą kwotę za ten zakres. Po wdrożeniu stronę utrzymujemy w ramach hostingu i opieki technicznej: aktualizacje, kopie zapasowe, monitoring i drobne poprawki. Przez 30 dni od publikacji bezpłatnie usuwamy błędy niezgodne z uzgodnionym zakresem.',
        ],
        bullets: [
          'stała kwota za zakres zapisany w umowie, bez dopłat za „drobne zmiany" w trakcie',
          'domena, hosting i kod strony zostają u placówki',
          'pomiar Core Web Vitals po wdrożeniu, nie deklaracja w ofercie',
        ],
        link: {
          path: '/wiedza/ile-kosztuje-strona-dla-przychodni',
          label: 'Ile kosztuje strona internetowa dla przychodni',
          description: 'Z czego składa się wycena i jak porównać dwie oferty.',
        },
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje strona internetowa dla przychodni?',
        answer:
          'Koszt zależy od liczby podstron, tego, czy projekt jest indywidualny, sposobu umawiania wizyt i tego, kto przygotowuje treści. Wycenę przygotowujemy po bezpłatnej rozmowie i podajemy ją jako stałą kwotę za zakres zapisany w umowie. Do kosztów stałych dochodzą domena, hosting i opcjonalna opieka techniczna.',
      },
      {
        question: 'Ile trwa wykonanie strony dla placówki medycznej?',
        answer:
          'Prosta strona gabinetu 1-2 tygodnie, serwis przychodni z podstronami usług 2-4 tygodnie, strona z blogiem i CMS 3-6 tygodni - licząc od otrzymania kompletu materiałów. Termin przesuwa się najczęściej z powodu materiałów po stronie placówki: zdjęć zespołu, zatwierdzonego cennika i opisów usług wymagających akceptacji merytorycznej.',
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
    h1: 'Prowadzenie social mediów dla klinik, gabinetów i lekarzy',
    seoTitle: 'Social media dla lekarzy, klinik i gabinetów - prowadzenie profili | mediaso',
    seoDescription:
      'Prowadzimy Facebooka, Instagrama i TikToka lekarzy, stomatologów, fizjoterapeutów i klinik: plan treści, grafiki, rolki, obsługa wiadomości i kampanie Meta Ads.',
    schemaName: 'Prowadzenie social media placówek medycznych',
    schemaServiceType: 'Zarządzanie mediami społecznościowymi',
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
        link: {
          path: '/wiedza/social-media-dla-lekarzy',
          label: 'Social media dla lekarzy: co publikować i czego nie wolno',
          description: 'Tematy postów w poszczególnych specjalizacjach i granice Kodeksu Etyki Lekarskiej.',
        },
      },
      {
        heading: 'Social media dla stomatologów i gabinetów stomatologicznych',
        paragraphs: [
          'Stomatologia ma w social mediach przewagę, której nie ma większość specjalizacji: efekt pracy widać, a pacjenci boją się wizyty bardziej niż w innych gabinetach. Najlepiej działają więc treści, które zdejmują strach: jak wygląda pierwsza wizyta, co czuje pacjent przy znieczuleniu, ile trwa leczenie kanałowe pod mikroskopem, jak przebiega wizyta adaptacyjna u dziecka.',
          'Granica przebiega przy zdjęciach przed i po. Pokazane jako dowód skuteczności są traktowane jak reklama świadczeń, a do tego wymagają pisemnej zgody pacjenta. Zamiast metamorfoz publikujemy sprzęt, etapy leczenia na modelach, zespół przy pracy i odpowiedzi lekarza na pytania pacjentów.',
        ],
        bullets: [
          'pierwsza wizyta i znieczulenie: treści dla pacjentów z lękiem przed dentystą',
          'implanty, ortodoncja i leczenie kanałowe wyjaśnione na modelach i grafikach',
          'stomatologia dziecięca: wizyta adaptacyjna, lakowanie, profilaktyka',
          'zespół, asystentki i higienistki jako twarze gabinetu',
        ],
      },
      {
        heading: 'Fizjoterapeuci, psycholodzy i gabinety specjalistyczne',
        paragraphs: [
          'Gabinet fizjoterapii, psychologa, dietetyka czy logopedy prowadzi zwykle jedna albo dwie osoby, więc profil gabinetu jest w praktyce profilem specjalisty. Pacjent wybiera człowieka, z którym będzie pracował przez kilka tygodni, i chce go zobaczyć, zanim zadzwoni. Najlepiej pracuje krótkie wideo: ćwiczenie pokazane przez fizjoterapeutę, odpowiedź na pytanie z gabinetu, przebieg pierwszej wizyty.',
          'Przy małym gabinecie liczy się też czas właściciela. Ustalamy jedną sesję nagraniową w miesiącu, z której powstaje materiał na cały miesiąc publikacji, a resztę - montaż, opisy, harmonogram i odpowiedzi na komentarze - bierzemy na siebie.',
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
          'Pierwszy miesiąc obejmuje audyt i optymalizację profili albo ich założenie, razem z wizytówką Google. Dalej zakres ustalamy pod placówkę: od samych postów graficznych i karuzel edukacyjnych, przez rolki na Instagram i Facebook, po filmy na TikToku i comiesięczną sesję nagraniowo-zdjęciową na miejscu. Wycenę przygotowujemy po bezpłatnej konsultacji, jako stałą miesięczną kwotę za uzgodnioną liczbę publikacji.',
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
        question: 'Ile kosztuje prowadzenie social mediów dla lekarza lub kliniki?',
        answer:
          'Koszt zależy od liczby kanałów, liczby publikacji w miesiącu i tego, czy w zakresie są rolki i sesje nagraniowe na miejscu. Wycenę podajemy po bezpłatnej konsultacji jako stałą miesięczną kwotę. Kampanie Meta Ads i budżet wydany na same reklamy to osobne pozycje.',
      },
      {
        question: 'Co lekarz może publikować w social mediach?',
        answer:
          'Informacje o zakresie przyjęć, kwalifikacjach, miejscach pracy i przebiegu leczenia, materiały edukacyjne oraz relacje z konferencji. Kodeks Etyki Lekarskiej od 2025 roku pozwala informować o działalności zawodowej, ale nadal zakazuje przedstawiania się jako najlepszy lub jedyny, deprecjonowania innych lekarzy i promowania produktów niezwiązanych z medycyną.',
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
        path: '/wiedza/social-media-dla-lekarzy',
        label: 'Social media dla lekarzy: co publikować i czego nie wolno',
        description: 'Poradnik dla lekarzy i gabinetów prowadzących profil samodzielnie.',
      },
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
    seoTitle: 'Prowadzenie i pozycjonowanie wizytówki Google dla placówek medycznych | mediaso',
    seoDescription:
      'Prowadzimy i pozycjonujemy wizytówki Google klinik, przychodni i gabinetów: kategorie, usługi, zdjęcia, opinie pacjentów, posty i raport widoczności w mapach.',
    schemaName: 'Optymalizacja Profilu Firmy w Google',
    schemaServiceType: 'Local SEO',
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
        question: 'Ile kosztuje prowadzenie wizytówki Google dla przychodni?',
        answer:
          'Zależy od liczby lokalizacji i zakresu: samo wdrożenie profilu to jednorazowa praca, stałe prowadzenie z postami, zdjęciami, odpowiedziami na opinie i raportem to miesięczny abonament. Wycenę podajemy po bezpłatnym przeglądzie wizytówki, jako stałą kwotę za uzgodniony zakres.',
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
