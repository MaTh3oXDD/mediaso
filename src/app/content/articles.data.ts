import type { Article } from './content.types';

/**
 * Baza wiedzy. Kolejność w tablicy jest kolejnością na `/wiedza`.
 * Daty w formacie ISO - trafiają do JSON-LD (Article) i do sitemapy.
 */
export const ARTICLES: readonly Article[] = [
  {
    slug: 'wizytowka-google-dla-przychodni',
    title: 'Wizytówka Google dla przychodni',
    h1: 'Wizytówka Google dla przychodni: jak ją ustawić, żeby pacjenci trafiali do Ciebie',
    seoTitle: 'Wizytówka Google dla przychodni - jak ją ustawić krok po kroku | mediaso',
    seoDescription:
      'Profil Firmy w Google dla przychodni i gabinetu: weryfikacja, kategoria główna, usługi, godziny, zdjęcia, posty i pytania pacjentów. Instrukcja krok po kroku.',
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    readingMinutes: 8,
    image: {
      src: '/blog/wizytowka-google-telefon.jpg',
      alt: 'Osoba z kawą w dłoni przegląda wyniki wyszukiwania na smartfonie',
      width: 1600,
      height: 1067,
      credit: 'Wikimedia Commons, CC0',
      creditUrl:
        'https://commons.wikimedia.org/wiki/File:Hands-coffee-smartphone-technology_(23698591814).jpg',
    },
    lead:
      'Wizytówka Google, czyli Profil Firmy w Google, to wpis przychodni widoczny w mapach i w bloku wyników lokalnych nad zwykłymi wynikami wyszukiwania. Pacjent, który wpisuje „ortopeda Poznań" albo „przychodnia Wilda", widzi najpierw trzy placówki z mapy, ich oceny, godziny i przycisk „Zadzwoń". Większość z nich dzwoni do jednej z tej trójki, nie przewijając dalej. O tym, która placówka trafi do trójki, decydują trzy rzeczy: trafność wpisu względem zapytania, odległość od pacjenta i rozpoznawalność placówki, na którą składają się opinie i spójne dane w sieci. Na odległość nie masz wpływu. Na trafność masz wpływ niemal całkowity i to ona jest tematem tego poradnika: od weryfikacji profilu, przez wybór kategorii i listę usług, po zdjęcia, posty i pytania pacjentów. Całość da się wykonać samodzielnie w jedno popołudnie.',
    sections: [
      {
        heading: 'Krok 1: przejmij i zweryfikuj profil',
        paragraphs: [
          'Zanim założysz nowy profil, wyszukaj swoją placówkę w Mapach Google. Przychodnie działające od kilku lat często mają już wpis utworzony automatycznie albo przez byłego pracownika. Drugi profil pod tym samym adresem to duplikat, który dzieli opinie i obniża widoczność obu wpisów.',
          'Jeśli wpis istnieje, kliknij „Zarządzaj tym profilem" i przejdź weryfikację. Google proponuje zwykle nagranie wideo pokazujące szyld, wejście i dokument z adresem, czasem telefon lub list z kodem. Dostęp właściciela zakładaj na konto Google placówki, nie na prywatną skrzynkę osoby, która akurat się tym zajmuje. Pozostałym osobom nadawaj rolę menedżera.',
        ],
        bullets: [
          'sprawdź, czy placówka nie ma już wpisu lub duplikatu',
          'weryfikacja na koncie firmowym, nie prywatnym',
          'rola właściciela dla placówki, rola menedżera dla agencji i pracowników',
          'nazwa dokładnie taka jak na szyldzie, bez dopisków w rodzaju „najlepszy dentysta"',
        ],
        note: 'Dopisywanie fraz do nazwy firmy łamie wytyczne Google. Konkurencja może to zgłosić, a skutkiem bywa zawieszenie profilu.',
      },
      {
        heading: 'Krok 2: kategoria główna decyduje, na co się wyświetlasz',
        paragraphs: [
          'Kategoria główna to najważniejsze pole w całym profilu. Google na jej podstawie ocenia, na jakie zapytania placówka jest trafną odpowiedzią. Wybór „Przychodnia" jest poprawny, ale ogólny: taki wpis przegra na zapytanie „dermatolog" z gabinetem, który ma kategorię „Dermatolog".',
          'Kategorię główną ustaw na usługę, która przynosi placówce najwięcej przychodu albo na której najbardziej ci zależy. Kategorie dodatkowe, do dziewięciu, opisują pozostałe specjalizacje. Nie dodawaj kategorii, których nie wykonujesz. Obniżają trafność zamiast ją podnosić, a pacjent, który zadzwoni po usługę, której nie ma, jest straconym połączeniem dla rejestracji.',
        ],
        bullets: [
          'kategoria główna: najważniejsza usługa, nie ogólna „Przychodnia"',
          'kategorie dodatkowe tylko dla usług realnie wykonywanych',
          'raz na kwartał sprawdź kategorie trzech konkurentów z mapy',
        ],
      },
      {
        heading: 'Krok 3: usługi, opis i atrybuty',
        paragraphs: [
          'Sekcja usług pozwala dodać każdą usługę osobno, z krótkim opisem i ceną. Pacjent widzi ją w profilu, a Google czyta ją przy dopasowaniu zapytań. Wpisz usługi językiem pacjenta: „usuwanie znamion", nie „dermatochirurgia zmian barwnikowych". Jeśli masz cennik na stronie, ceny w profilu muszą się z nim zgadzać.',
          'Opis placówki ma 750 znaków. Pierwsze zdania widać bez rozwijania, więc zacznij od konkretów: jakie specjalizacje, dla kogo, w jakiej dzielnicy, czy jest NFZ, czy są wizyty prywatne. Na końcu dopisz atrybuty: dostęp dla wózków, parking, rejestracja online. Pacjent filtruje po nich wyniki częściej, niż się wydaje.',
        ],
      },
      {
        heading: 'Krok 4: godziny, telefon i link do rejestracji',
        paragraphs: [
          'Godziny otwarcia wpisuj tak, jak faktycznie działa rejestracja, nie gabinet zabiegowy. Pacjent, który dzwoni w godzinach z profilu i nikt nie odbiera, rzadko próbuje drugi raz. Przed każdym świętem ustaw godziny specjalne. Google o nie przypomina, a profil bez nich pokazuje w Wigilię zwykły czwartek.',
          'Numer telefonu musi być ten sam co na stronie i w innych katalogach, na przykład w ZnanyLekarz. Rozbieżne numery w sieci osłabiają rozpoznawalność placówki. W polu linku do wizyt podaj adres rejestracji online albo podstronę kontaktu. Link do strony głównej każe pacjentowi szukać przycisku jeszcze raz.',
        ],
        bullets: [
          'godziny pracy rejestracji, nie gabinetów',
          'godziny specjalne przed każdym świętem i urlopem',
          'jeden numer telefonu wszędzie: profil, strona, katalogi',
          'link do umawiania wizyt prowadzi prosto do formularza lub systemu rejestracji',
        ],
        image: {
          src: '/blog/wizytowka-google-poczekalnia.jpg',
          alt: 'Rejestracja i poczekalnia przychodni z krzesłami dla pacjentów',
          width: 1600,
          height: 1068,
          credit: 'USDA, domena publiczna',
          creditUrl:
            'https://commons.wikimedia.org/wiki/File:RD_CFDL-Lytle_Community_Health_Center_-_Community_Facility_Direct_Loan_(20171205-RD-LSC-0238).jpg',
        },
      },
      {
        heading: 'Krok 5: zdjęcia, które odpowiadają na pytania pacjenta',
        paragraphs: [
          'Pacjent przed pierwszą wizytą chce wiedzieć trzy rzeczy: jak wygląda wejście, jak wygląda poczekalnia i kto go przyjmie. Na te pytania odpowiadają zdjęcia. Wejście od ulicy, najlepiej z szyldem i numerem budynku, oszczędza krążenia wokół kamienicy. Poczekalnia i gabinet pokazują standard. Zdjęcia zespołu budują zaufanie szybciej niż opis.',
          'Rób zdjęcia w dzień, bez pacjentów w kadrze. Twarz osoby w poczekalni przychodni to informacja o jej zdrowiu, a na jej publikację potrzebna jest pisemna zgoda. Wgrywaj nowe zdjęcia co kilka miesięcy. Profil z pięcioma zdjęciami sprzed czterech lat wygląda na porzucony, nawet jeśli placówka pracuje pełną parą.',
        ],
        bullets: [
          'wejście od ulicy z widocznym szyldem i numerem',
          'poczekalnia, rejestracja i przynajmniej jeden gabinet',
          'zespół: lekarze i rejestracja, za zgodą osób na zdjęciach',
          'logo i zdjęcie w tle ustawione ręcznie, nie wybrane przez Google',
          'bez pacjentów w kadrze',
        ],
        image: {
          src: '/blog/wizytowka-google-wejscie.jpg',
          alt: 'Wejście do budynku kliniki od strony ulicy z widocznym zadaszeniem',
          width: 1600,
          height: 1067,
          credit: 'Wikimedia Commons, CC0',
          creditUrl:
            'https://commons.wikimedia.org/wiki/File:Clinic_entrance,_Brown_Building,_McGill_University,_Oct_29_2022.jpg',
        },
      },
      {
        heading: 'Krok 6: posty oraz pytania i odpowiedzi',
        paragraphs: [
          'Posty w profilu to krótkie komunikaty ze zdjęciem: nowy specjalista, zmiana godzin, szczepienia sezonowe, dostępne terminy. Pojedynczy post nie przesunie placówki w wynikach, ale regularne publikowanie pokazuje pacjentowi i Google, że profil ktoś prowadzi. Wystarczy jeden post na dwa tygodnie. Treść podlega tym samym ograniczeniom co reklama świadczeń zdrowotnych: informujesz, nie zachęcasz i nie obiecujesz efektu.',
          'Sekcję pytań i odpowiedzi może wypełnić każdy użytkownik Google, także w imieniu placówki. Zajrzyj tam i odpowiedz na pytania, które już wiszą. Potem dodaj z konta placówki pięć pytań, które rejestracja słyszy codziennie: czy jest NFZ, czy potrzebne jest skierowanie, gdzie zaparkować, ile trwa pierwsza wizyta, czy przyjmujecie dzieci. Każda odpowiedź to jeden telefon mniej do rejestracji.',
        ],
      },
      {
        heading: 'Krok 7: sprawdzaj statystyki raz w miesiącu',
        paragraphs: [
          'Panel Profilu Firmy pokazuje liczbę połączeń, kliknięć w trasę i wejść na stronę oraz zapytania, na które profil się wyświetlił. Zapisuj te liczby co miesiąc w prostej tabeli. Po trzech miesiącach zobaczysz, czy zmiany kategorii, usług i zdjęć przełożyły się na telefony.',
          'Jeśli połączeń jest dużo, a nowych pacjentów nie przybywa, problem leży zwykle poza profilem: w nieodebranych telefonach albo w braku wolnych terminów. Wizytówka ściąga pacjenta do słuchawki, dalej przejmuje rejestracja.',
        ],
      },
    ],
    faq: [
      {
        question: 'Czy wizytówka Google dla przychodni jest płatna?',
        answer:
          'Nie. Profil Firmy w Google jest bezpłatny, a jego założenie, weryfikacja i prowadzenie nie wymagają żadnych opłat. Płatne są jedynie reklamy Google Ads, które mogą wyświetlać się obok wyników lokalnych, ale nie są potrzebne, żeby profil działał.',
      },
      {
        question: 'Jaką kategorię wybrać dla przychodni wielospecjalistycznej?',
        answer:
          'Jako kategorię główną wybierz specjalizację, na której placówce najbardziej zależy lub która przynosi najwięcej przychodu. Pozostałe specjalizacje dodaj jako kategorie dodatkowe, maksymalnie dziewięć. Ogólna kategoria „Przychodnia" sprawdza się jako dodatkowa, rzadko jako główna.',
      },
      {
        question: 'Czy każdy lekarz w przychodni może mieć własną wizytówkę?',
        answer:
          'Wytyczne Google dopuszczają osobne profile lekarzy przyjmujących w placówce, jeśli przyjmują pacjentów pod tym adresem. W małej przychodni zwykle lepiej skupić opinie i zdjęcia na jednym profilu placówki. Osobne profile lekarzy mają sens przy znanych specjalistach, których pacjenci szukają po nazwisku.',
      },
      {
        question: 'Jak długo trwa weryfikacja profilu w Google?',
        answer:
          'Weryfikacja wideo lub telefoniczna trwa zwykle od kilku godzin do kilku dni roboczych. List z kodem dociera w ciągu około dwóch tygodni. Zmiany w już zweryfikowanym profilu, na przykład kategorii czy godzin, pojawiają się w wynikach zazwyczaj w ciągu kilku dni.',
      },
      {
        question: 'Po jakim czasie wizytówka zacznie przynosić telefony?',
        answer:
          'Poprawki kategorii, usług i godzin zaczynają działać zwykle po dwóch do sześciu tygodni. Efekt zależy od odległości pacjentów, liczby i świeżości opinii oraz od tego, jak dopracowane są profile konkurencyjnych placówek w okolicy.',
      },
    ],
    related: [
      {
        path: '/uslugi/wizytowka-google-dla-placowki',
        label: 'Wizytówka Google dla placówki',
        description: 'Poprowadzimy profil za Ciebie, z raportem widoczności w mapach co miesiąc.',
      },
      {
        path: '/wiedza/jak-zbierac-opinie-pacjentow',
        label: 'Jak zbierać opinie pacjentów zgodnie z prawem',
        description: 'Opinie to drugi po trafności czynnik, który decyduje o pozycji w mapach.',
      },
      {
        path: '/wiedza/pozycjonowanie-kliniki-krok-po-kroku',
        label: 'Pozycjonowanie kliniki krok po kroku',
        description: 'Wizytówka jako jeden z sześciu etapów widoczności w Google.',
      },
    ],
  },
  {
    slug: 'czym-jest-marketing-medyczny',
    title: 'Czym jest marketing medyczny',
    h1: 'Czym jest marketing medyczny i czym różni się od zwykłego marketingu',
    seoTitle: 'Czym jest marketing medyczny - definicja i zasady | mediaso',
    seoDescription:
      'Marketing medyczny to informowanie o usługach placówki w granicach przepisów o reklamie świadczeń zdrowotnych. Wyjaśniamy zakres, ograniczenia i kanały.',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
    readingMinutes: 7,
    lead:
      'Marketing medyczny to całość działań, którymi placówka zdrowotna informuje pacjentów o swoich usługach, dostępności i kompetencjach zespołu, prowadzonych w granicach przepisów ograniczających reklamę świadczeń zdrowotnych. Od marketingu w innych branżach różni go przede wszystkim to, czego nie wolno: nie można obiecywać efektu leczenia, zachęcać do korzystania ze świadczeń w sposób nachalny, wykorzystywać wizerunku pacjenta bez pisemnej zgody ani budować przekazu na porównaniach z konkretnymi placówkami. Zostaje bardzo dużo miejsca na komunikację opartą na faktach: zakres usług, ceny, terminy, kwalifikacje specjalistów, przebieg wizyty, przygotowanie do badań. Praktyka pokazuje, że to właśnie ta rzeczowa warstwa przynosi placówkom najwięcej kontaktów, bo odpowiada na pytania, które pacjent zadaje przed telefonem.',
    sections: [
      {
        heading: 'Co mieści się w marketingu medycznym',
        paragraphs: [
          'Zakres jest szerszy, niż sugeruje słowo „reklama". Obejmuje stronę internetową placówki i jej widoczność w wyszukiwarce, Profil Firmy w Google z opiniami pacjentów, profile w mediach społecznościowych, materiały drukowane w poczekalni, komunikację SMS i e-mail z pacjentami oraz sposób, w jaki rejestracja odbiera telefon.',
          'Ostatni punkt bywa pomijany, a to on rozstrzyga wynik. Kampania, która generuje telefony w godzinach, gdy nikt ich nie odbiera, jest wydatkiem bez efektu. Dlatego marketing placówki zaczyna się od sprawdzenia, co się dzieje z pacjentem, który już próbuje się skontaktować.',
        ],
        bullets: [
          'strona internetowa z podstronami usług i cennikiem',
          'widoczność w wyszukiwarce na zapytania lokalne i usługowe',
          'Profil Firmy w Google: kategorie, godziny, zdjęcia, opinie',
          'media społecznościowe i obsługa wiadomości od pacjentów',
          'komunikacja z pacjentami: potwierdzenia, przypomnienia, zaproszenia na kontrole',
          'obsługa telefonu w rejestracji jako ostatni etap ścieżki',
        ],
      },
      {
        heading: 'Granice prawne w skrócie',
        paragraphs: [
          'Reklama działalności leczniczej jest w Polsce ograniczona. Podmiot leczniczy może podawać do wiadomości publicznej informacje o zakresie i rodzajach udzielanych świadczeń, ale forma i treść tych informacji nie może mieć cech zachęty do korzystania ze świadczeń. Lekarzy dodatkowo wiąże kodeks etyki lekarskiej, a apteki i wyroby medyczne mają własne, ostrzejsze reżimy.',
          'W praktyce dzieli to komunikaty na dwie grupy. Bezpieczne: opis usługi, cena, czas trwania, przygotowanie, kwalifikacje lekarza, dostępne terminy, wyposażenie. Ryzykowne: obietnice wyniku, przekaz oparty na strachu, promocje w stylu handlowym, porównania z konkurencją po nazwie, przed i po bez zgody i kontekstu.',
        ],
        note: 'To skrót, nie opinia prawna. Przy usługach z pogranicza - medycyna estetyczna, stomatologia komercyjna - warto skonsultować materiały z prawnikiem branżowym.',
      },
      {
        heading: 'Skąd realnie przychodzą pacjenci',
        paragraphs: [
          'W większości placówek, którym pomagamy, najsilniejszym kanałem jest wyszukiwarka razem z mapami. Pacjent szuka konkretnej usługi w konkretnej okolicy, sprawdza opinie i dzwoni do jednej z trzech pierwszych placówek na liście. Drugim kanałem jest polecenie - i tu też kończy się w Google, bo pacjent weryfikuje polecaną placówkę, zanim zadzwoni.',
          'Media społecznościowe rzadko generują pierwszy kontakt, ale pracują na decyzję: pacjent sprawdza profil i szuka śladu, że placówka działa. Reklama płatna działa wtedy, gdy jest po co dzwonić - są wolne terminy i ktoś odbiera telefon.',
        ],
      },
      {
        heading: 'Od czego zacząć w małej placówce',
        paragraphs: [
          'Kolejność, która daje najwięcej przy najmniejszym budżecie, jest za każdym razem podobna. Najpierw wizytówka Google: właściwa kategoria, komplet godzin, zdjęcia, opisy usług. Potem opinie - systemowa prośba po wizycie, kierowana do wszystkich pacjentów. Potem strona z podstronami usług i cennikiem.',
          'Reklama płatna jest ostatnia, nie pierwsza. Uruchomiona przed uporządkowaniem tych trzech rzeczy podnosi koszt pozyskania pacjenta i maskuje problem, zamiast go rozwiązać.',
        ],
        bullets: [
          'wizytówka Google z poprawną kategorią główną',
          'proces zbierania opinii po wizycie',
          'podstrona dla każdej usługi, którą placówka sprzedaje',
          'pomiar nieodebranych połączeń w rejestracji',
          'dopiero potem kampanie płatne',
        ],
      },
      {
        heading: 'Jak mierzyć, czy to działa',
        paragraphs: [
          'Zasięgi i polubienia nie są wynikiem. Liczby, które mają znaczenie dla właściciela placówki, to liczba połączeń i formularzy, odsetek połączeń odebranych, liczba umówionych wizyt oraz udział pacjentów pierwszorazowych.',
          'Minimalny zestaw narzędzi jest darmowy: Google Search Console pokazuje zapytania i wejścia z wyszukiwarki, statystyki Profilu Firmy pokazują telefony i kliknięcia w trasę, a raport z centrali telefonicznej pokazuje, ile z tych telefonów zostało odebranych. Trzy źródła wystarczą, żeby przestać zgadywać.',
        ],
      },
    ],
    faq: [
      {
        question: 'Czy placówka medyczna może się reklamować w Polsce?',
        answer:
          'Może informować o zakresie i rodzajach udzielanych świadczeń, cenach, dostępności i kwalifikacjach zespołu. Ograniczenia dotyczą formy: przekaz nie może mieć cech zachęty do korzystania ze świadczeń ani obiecywać efektu leczenia. Rzetelna informacja o usłudze jest dozwolona i to na niej opiera się skuteczna komunikacja placówek.',
      },
      {
        question: 'Ile kosztuje marketing medyczny w małej przychodni?',
        answer:
          'Pierwsze kroki - uporządkowanie wizytówki Google i proces zbierania opinii - kosztują pracę, nie budżet mediowy. Stała obsługa social mediów zaczyna się w okolicach 2 000-2 500 złotych netto miesięcznie, strona internetowa od kilku tysięcy złotych jednorazowo, a budżet reklamowy zależy od tego, ile wolnych terminów placówka ma do zapełnienia.',
      },
      {
        question: 'Czy marketing medyczny to to samo co SEO?',
        answer:
          'Nie. SEO jest jego częścią i odpowiada za widoczność w wynikach wyszukiwania. Marketing medyczny obejmuje też wizytówkę Google, social media, komunikację z pacjentami i obsługę zgłoszeń w rejestracji.',
      },
    ],
    related: [
      {
        path: '/uslugi/pozycjonowanie-klinik',
        label: 'Pozycjonowanie klinik',
        description: 'Najmocniejszy kanał pozyskiwania pacjentów rozbity na etapy.',
      },
      {
        path: '/wiedza/rodo-w-marketingu-placowki-medycznej',
        label: 'RODO w marketingu placówki medycznej',
        description: 'Zgody, wizerunek i dane pacjentów w materiałach marketingowych.',
      },
      {
        path: '/diagnostyka',
        label: 'Diagnostyka wzrostu placówki',
        description: 'Sprawdź w 20 pytaniach, który etap ścieżki pacjenta się urywa.',
      },
    ],
  },
  {
    slug: 'pozycjonowanie-kliniki-krok-po-kroku',
    title: 'Pozycjonowanie kliniki krok po kroku',
    h1: 'Pozycjonowanie kliniki krok po kroku',
    seoTitle: 'Pozycjonowanie kliniki krok po kroku - poradnik | mediaso',
    seoDescription:
      'Kolejność działań SEO dla kliniki: audyt, frazy lokalne, podstrony usług, wizytówka Google, treści i pomiar. Konkretne kroki do wykonania samodzielnie.',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
    readingMinutes: 9,
    lead:
      'Pozycjonowanie kliniki daje się rozłożyć na sześć kroków wykonywanych po kolei, a nie równolegle. Najpierw ustalasz, na jakie zapytania pacjenci realnie szukają twoich usług w twoim mieście. Potem sprawdzasz, czy strona w ogóle jest indeksowana i jak długo się ładuje na telefonie. Trzeci krok to rozbicie oferty na osobne podstrony - jedna usługa, jeden adres. Czwarty to wizytówka Google, która w medycynie odpowiada za większość ruchu lokalnego. Piąty to treść odpowiadająca na pytania zadawane przed wizytą. Szósty to pomiar: pozycje, wejścia i telefony. Ta kolejność ma znaczenie, bo każdy krok korzysta z poprzedniego. Publikowanie treści na stronie, której Google nie indeksuje, jest pracą wyrzuconą w błoto.',
    sections: [
      {
        heading: 'Krok 1: lista fraz z podziałem na intencje',
        paragraphs: [
          'Zacznij od Google Search Console. W raporcie skuteczności zobaczysz, na jakie zapytania strona już się wyświetla i na których pozycjach. Frazy z pozycji 8-20 to najtańszy wzrost, jaki masz do wzięcia - Google już uznaje stronę za sensowną odpowiedź, brakuje niewiele.',
          'Do tego dopisz zapytania, których pacjenci używają, a których na liście nie ma. Najprościej zebrać je od rejestracji: to zestaw pytań padających codziennie przez telefon. Podziel całość na trzy grupy: zapytania usługowe z miastem, zapytania o cenę i zapytania informacyjne o przebiegu zabiegu.',
        ],
      },
      {
        heading: 'Krok 2: sprawdź, czy Google widzi twoją stronę',
        paragraphs: [
          'Wpisz w wyszukiwarkę „site:" i adres swojej domeny. Jeżeli wynik pokazuje mniej stron, niż ich naprawdę masz, część serwisu nie jest zaindeksowana. W Search Console znajdziesz powód w raporcie indeksowania.',
          'Drugi test: otwórz stronę na telefonie w zasięgu 4G i policz, ile sekund mija do pojawienia się treści. Powyżej trzech sekund tracisz pacjentów jeszcze przed wejściem. Trzeci test: wyłącz JavaScript w przeglądarce. Jeżeli strona jest pusta, wyszukiwarka ma z nią kłopot podobny do twojego.',
        ],
        bullets: [
          'sprawdź liczbę zaindeksowanych podstron zapytaniem „site:"',
          'przejrzyj raport indeksowania w Google Search Console',
          'zmierz czas ładowania na telefonie, nie na komputerze w biurze',
          'sprawdź, czy każda podstrona ma własny tytuł i opis',
        ],
      },
      {
        heading: 'Krok 3: jedna usługa, jeden adres',
        paragraphs: [
          'To jest zmiana o największym wpływie i jednocześnie ta, którą placówki odkładają najdłużej. Strona „Nasze usługi" z listą dwudziestu punktów nie zarankuje na żadną z nich. Google przypisuje wynik do adresu, więc każda usługa potrzebuje własnego.',
          'Zacznij od trzech usług o największej wartości. Każda dostaje: opis przebiegu wizyty, czas trwania, cenę lub przedział cenowy, przygotowanie pacjenta, przeciwwskazania, informację o tym, kto ją wykonuje, i sekcję z pytaniami. To zwykle 600-1000 słów napisanych konkretnie, bez wstępów o trosce o zdrowie.',
        ],
      },
      {
        heading: 'Krok 4: wizytówka Google',
        paragraphs: [
          'W medycynie mapy odpowiadają za większość kontaktów lokalnych. Ustaw kategorię główną na tę usługę, na której najbardziej ci zależy - kategoria „przychodnia" nie wyświetli cię na zapytanie o konkretnego specjalistę. Uzupełnij kategorie dodatkowe, listę usług, godziny łącznie ze świętami, zdjęcia wejścia od ulicy i wnętrz.',
          'Potem opinie. Poproś o nie wszystkich pacjentów z danej grupy, nie tylko zadowolonych, i nie oferuj niczego w zamian. Odpowiadaj na każdą, także negatywną, nie potwierdzając publicznie, że autor był pacjentem - to informacja o jego zdrowiu.',
        ],
      },
      {
        heading: 'Krok 5: treść, która odpowiada na pytania',
        paragraphs: [
          'Artykuły w bazie wiedzy pracują na zapytania zadawane przed decyzją: ile trwa leczenie, jak się przygotować, co obejmuje cena, kiedy zgłosić się pilnie. Napisz je językiem pacjenta, nie językiem opisu procedury z podręcznika.',
          'Każdy tekst medyczny powinien przejść przez lekarza z placówki. To nie tylko kwestia bezpieczeństwa - autorstwo i nadzór merytoryczny są sygnałem jakości dla wyszukiwarki, która przy tematach zdrowotnych ocenia wiarygodność źródła ostrzej niż gdzie indziej.',
        ],
        bullets: [
          'artykuł na każde powtarzalne pytanie z rejestracji',
          'podpis autora i osoby, która sprawdziła treść merytorycznie',
          'link z artykułu do podstrony usługi, której dotyczy',
          'aktualizacja daty przy realnej zmianie treści, nie co miesiąc',
        ],
      },
      {
        heading: 'Krok 6: pomiar',
        paragraphs: [
          'Raz w miesiącu zapisuj cztery liczby: pozycje na uzgodnionej liście fraz, wejścia z wyszukiwarki, telefony i kliknięcia w trasę z wizytówki oraz liczbę nowych pacjentów. Bez tego nie odróżnisz efektu sezonu od efektu pracy.',
          'Pierwszych ruchów spodziewaj się po 6-10 tygodniach na frazach lokalnych. Frazy ogólne w dużym mieście wymagają kwartałów. Jeżeli po pół roku systematycznej pracy nic się nie rusza, problem leży zwykle w tym, że konkurencja ma dziesiątki podstron, a ty trzy.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje pozycjonowanie kliniki?',
        answer:
          'Stała obsługa SEO dla placówki lokalnej to zwykle wydatek rzędu kilku tysięcy złotych netto miesięcznie, zależnie od liczby usług i konkurencji w mieście. Część pracy - wizytówka Google, opinie, uzupełnienie treści - da się wykonać własnymi siłami i to od niej warto zacząć.',
      },
      {
        question: 'Czy da się pozycjonować klinikę samodzielnie?',
        answer:
          'Kroki 1, 2 i 4 z tego poradnika wykonuje się bez wiedzy technicznej i one dają najwięcej na start. Rozbicie oferty na podstrony i praca nad treścią wymagają więcej czasu niż umiejętności. Zewnętrzne wsparcie zwykle przyspiesza, ale nie jest warunkiem pierwszych efektów.',
      },
      {
        question: 'Jak długo czeka się na efekty SEO w branży medycznej?',
        answer:
          'Frazy lokalne o niskiej konkurencji ruszają zwykle po 6-10 tygodniach od wdrożenia zmian. Zapytania ogólne w dużych miastach zajmują od dwóch do czterech kwartałów. Tempo zależy głównie od tego, ile podstron ma konkurencja i od jak dawna publikuje.',
      },
    ],
    related: [
      {
        path: '/uslugi/pozycjonowanie-klinik',
        label: 'Pozycjonowanie klinik',
        description: 'Ten sam proces prowadzony przez nas, z raportowaniem co miesiąc.',
      },
      {
        path: '/uslugi/wizytowka-google-dla-placowki',
        label: 'Wizytówka Google dla placówki',
        description: 'Krok czwarty rozpisany na szczegóły.',
      },
      {
        path: '/wiedza/ile-kosztuje-strona-dla-przychodni',
        label: 'Ile kosztuje strona internetowa dla przychodni',
        description: 'Z czego składa się wycena i co realnie wpływa na cenę.',
      },
    ],
  },
  {
    slug: 'rodo-w-marketingu-placowki-medycznej',
    title: 'RODO w marketingu placówki medycznej',
    h1: 'RODO w marketingu placówki medycznej',
    seoTitle: 'RODO w marketingu placówki medycznej | mediaso',
    seoDescription:
      'Zgody na wizerunek, opinie pacjentów, SMS-y marketingowe, umowy powierzenia z agencją i piksele reklamowe. Co placówka musi mieć na piśmie.',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
    readingMinutes: 8,
    lead:
      'W placówce medycznej niemal każdy materiał marketingowy dotyka danych szczególnej kategorii, bo sam fakt korzystania ze świadczeń zdrowotnych jest informacją o zdrowiu. Dlatego zdjęcie pacjenta w poczekalni, publiczna odpowiedź na opinię potwierdzająca, że ktoś był u was na wizycie, czy SMS z zaproszeniem na badanie kontrolne wymagają innej ostrożności niż analogiczne działania w restauracji. Reguła praktyczna brzmi: nie publikuj i nie wysyłaj niczego, co pozwala powiązać konkretną osobę z korzystaniem z twoich usług, dopóki nie masz na to zgody na piśmie. Druga reguła dotyczy dostawców: agencja, infolinia i firma wysyłająca SMS-y przetwarzają dane w twoim imieniu, więc potrzebujesz z nimi umowy powierzenia przetwarzania.',
    sections: [
      {
        heading: 'Zgoda na wizerunek: co musi w niej być',
        paragraphs: [
          'Zgoda ustna nie wystarczy, bo w razie sporu nie da się jej wykazać. Dokument powinien wskazywać, kto publikuje, jakie materiały, w jakich kanałach i przez jaki czas, oraz zawierać informację o prawie wycofania zgody w dowolnym momencie.',
          'Osobno traktuj zdjęcia przed i po. Pokazują one nie tylko wizerunek, ale też przebieg leczenia, więc zgoda musi to obejmować wprost. Wycofanie zgody oznacza usunięcie materiału ze wszystkich kanałów, w których go opublikowano - dlatego warto prowadzić rejestr publikacji.',
        ],
        bullets: [
          'forma pisemna albo dokumentowa, z możliwością odtworzenia treści zgody',
          'wskazanie kanałów: strona, Facebook, Instagram, materiały drukowane',
          'okres publikacji i zasady wycofania zgody',
          'osobna zgoda na zdjęcia dokumentujące przebieg leczenia',
          'rejestr, gdzie i kiedy materiał został opublikowany',
        ],
      },
      {
        heading: 'Opinie pacjentów',
        paragraphs: [
          'Prośba o opinię wysłana pacjentowi po wizycie to komunikacja związana z wykonaną usługą, ale sposób jej wysłania ma znaczenie: SMS z linkiem do wystawienia opinii bywa kwalifikowany jako informacja handlowa, więc bezpieczniej jest opierać go na zgodzie zebranej przy rejestracji.',
          'Odpowiadając publicznie na opinię, nigdy nie potwierdzaj, że autor był twoim pacjentem, nie odnoś się do przebiegu leczenia i nie prostuj faktów medycznych w komentarzu. Standardowa odpowiedź to podziękowanie i zaproszenie do kontaktu bezpośredniego. Wyjaśnienia prowadzi się poza publiczną częścią.',
        ],
      },
      {
        heading: 'Umowa powierzenia z agencją i dostawcami',
        paragraphs: [
          'Jeżeli agencja obsługuje wiadomości od pacjentów, prowadzi wysyłkę SMS albo ma dostęp do systemu rejestracji, przetwarza dane w imieniu placówki. Wymaga to umowy powierzenia określającej zakres, cel, kategorie danych, obowiązki bezpieczeństwa i zasady usunięcia danych po zakończeniu współpracy.',
          'To samo dotyczy dostawcy hostingu, systemu do wysyłki SMS i firmy prowadzącej infolinię. W praktyce warto prowadzić prostą listę wszystkich podmiotów mających dostęp do danych - przy kontroli jest to pierwszy dokument, o który pyta inspektor.',
        ],
      },
      {
        heading: 'Formularze i piksele reklamowe',
        paragraphs: [
          'Formularz kontaktowy powinien zbierać wyłącznie dane potrzebne do odpowiedzi i zawierać klauzulę informacyjną: kto jest administratorem, w jakim celu przetwarza dane, jak długo je trzyma i jakie prawa ma osoba, która je zostawia. Pole „opisz swój problem zdrowotny" lepiej z formularza usunąć - zbiera dane o zdrowiu bez potrzeby.',
          'Piksele Meta i Google zbierają dane o zachowaniu użytkownika. Umieszczone na podstronie konkretnej usługi medycznej mogą ujawniać zainteresowanie określonym leczeniem. Wymagają zgody na cookies zebranej przed uruchomieniem i ostrożności przy tym, na których podstronach je włączasz.',
        ],
        bullets: [
          'minimalny zakres pól w formularzu, bez pytań o stan zdrowia',
          'klauzula informacyjna i osobna zgoda na kontakt',
          'baner cookies blokujący skrypty marketingowe do momentu zgody',
          'ostrożność z pikselami na podstronach usług wrażliwych',
        ],
      },
      {
        heading: 'Najczęstsze błędy, które widzimy',
        paragraphs: [
          'Pierwszy: zdjęcia z poczekalni z rozpoznawalnymi pacjentami w tle, publikowane bez zgody. Drugi: odpowiedź na negatywną opinię zawierająca szczegóły wizyty, czyli ujawnienie danych o zdrowiu w reakcji na krytykę. Trzeci: baza numerów telefonów zebrana w rejestracji, używana do wysyłki promocji bez zgody marketingowej.',
          'Czwarty jest cichy i najczęstszy: brak umowy powierzenia z agencją, która od dwóch lat odpowiada na wiadomości pacjentów w imieniu placówki.',
        ],
      },
    ],
    faq: [
      {
        question: 'Czy mogę wysyłać pacjentom SMS-y z promocjami?',
        answer:
          'Tylko na podstawie zgody marketingowej zebranej wcześniej i osobno od zgody na kontakt w sprawie wizyty. Numer podany przy rejestracji służy do umawiania i przypominania o wizytach - użycie go do wysyłki ofert bez odrębnej zgody jest naruszeniem.',
      },
      {
        question: 'Czy mogę opublikować podziękowanie od pacjenta na stronie?',
        answer:
          'Tak, jeśli masz pisemną zgodę na publikację treści i - gdy podpisujesz ją imieniem lub zdjęciem - także na wizerunek i dane. Anonimowa opinia bez elementów pozwalających zidentyfikować osobę jest bezpieczniejsza, ale mniej wiarygodna dla czytelnika.',
      },
      {
        question: 'Czy agencja marketingowa potrzebuje umowy powierzenia?',
        answer:
          'Tak, jeżeli ma dostęp do danych pacjentów: obsługuje wiadomości, prowadzi wysyłkę, pracuje w systemie rejestracji albo administruje serwerem ze zgłoszeniami z formularza. Agencja tworząca wyłącznie grafiki bez dostępu do danych umowy nie wymaga.',
      },
      {
        question: 'Czy zdjęcia przed i po są dozwolone?',
        answer:
          'Są dozwolone przy pisemnej zgodzie pacjenta obejmującej publikację wizerunku i dokumentacji przebiegu leczenia we wskazanych kanałach. Zdjęcia muszą pokazywać rzeczywisty efekt - obróbka zmieniająca wynik wprowadza pacjentów w błąd i naraża placówkę na zarzut nieuczciwej praktyki.',
      },
    ],
    related: [
      {
        path: '/wiedza/jak-zbierac-opinie-pacjentow',
        label: 'Jak zbierać opinie pacjentów zgodnie z prawem',
        description: 'Procedura zbierania opinii bez selekcji i bez nagród.',
      },
      {
        path: '/uslugi/social-media-dla-klinik',
        label: 'Social media dla klinik',
        description: 'Publikacje i obsługa wiadomości w granicach ochrony danych.',
      },
      {
        path: '/polityka-prywatnosci',
        label: 'Polityka prywatności mediaso',
        description: 'Przykład tego, jak opisujemy przetwarzanie danych u siebie.',
      },
    ],
  },
  {
    slug: 'ile-kosztuje-strona-dla-przychodni',
    title: 'Ile kosztuje strona internetowa dla przychodni',
    h1: 'Ile kosztuje strona internetowa dla przychodni',
    seoTitle: 'Ile kosztuje strona internetowa dla przychodni | mediaso',
    seoDescription:
      'Widełki cenowe stron dla placówek medycznych, z czego składa się wycena, koszty utrzymania i miejsca, w których wykonawcy ukrywają koszty.',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
    readingMinutes: 7,
    lead:
      'Strona internetowa dla przychodni kosztuje w Polsce od około 3 000 złotych netto za prosty serwis gabinetu do kilkudziesięciu tysięcy za rozbudowany portal placówki wieloodziałowej z własnym systemem rezerwacji. Rozpiętość bierze się z trzech rzeczy: liczby podstron, które ktoś musi zaprojektować i napisać, sposobu umawiania wizyt oraz tego, czy treści powstają od zera, czy placówka dostarcza gotowe. Do ceny wykonania dochodzą koszty stałe: domena, hosting od 80 złotych miesięcznie i opieka techniczna od 250 złotych miesięcznie. Poniżej rozkładamy wycenę na części, żeby dało się porównać oferty, które na pierwszy rzut oka różnią się o połowę.',
    sections: [
      {
        heading: 'Trzy poziomy i realne widełki',
        paragraphs: [
          'Wizytówka na gotowym szablonie, do trzech podstron, to 2 900-3 900 złotych netto: strona główna, opis usług, cennik, kontakt z mapą i formularz. Wystarcza praktyce jednoosobowej i nie udaje więcej. Termin realizacji 1-2 tygodnie.',
          'Strona z indywidualnym projektem i sześcioma podstronami kosztuje 4 900-6 500 złotych. Tu pojawia się praca, której nie widać w wycenie: struktura podstron pod wyszukiwarkę, teksty do każdej usługi i akceptacja merytoryczna. Wersja z blogiem i systemem zarządzania treścią, do dziesięciu podstron, to 7 000-11 000 złotych.',
          'Powyżej tego poziomu wchodzą rezerwacje. Osadzenie gotowego systemu typu Booksy czy Calendly kosztuje 1 800-3 500 złotych. Własny system rezerwacji z kalendarzem dostępności, panelem administratora i płatnościami zaczyna się od 12 000 złotych, a przy wielu lokalizacjach i integracjach z oprogramowaniem gabinetowym od 20 000 - i tam cena powstaje dopiero po specyfikacji.',
        ],
        bullets: [
          'wizytówka do 3 podstron: 2 900-3 900 zł netto, 1-2 tygodnie',
          'strona indywidualna do 6 podstron: 4 900-6 500 zł netto, 2-4 tygodnie',
          'strona z blogiem i CMS do 10 podstron: 7 000-11 000 zł netto, 3-6 tygodni',
          'osadzenie gotowego systemu rezerwacji: 1 800-3 500 zł netto',
          'własny system rezerwacji: od 12 000 zł netto',
        ],
      },
      {
        heading: 'Co realnie napędza cenę',
        paragraphs: [
          'Liczba unikalnych układów strony, a nie liczba podstron. Dwadzieścia podstron usług na jednym szablonie to jeden projekt i dwadzieścia wypełnień. Pięć podstron, z których każda wygląda inaczej, to pięć projektów.',
          'Sposób umawiania wizyt jest drugim czynnikiem. Formularz zgłoszenia to kilka godzin pracy. Integracja z systemem gabinetowym przez API to dni albo tygodnie, zależnie od jakości dokumentacji dostawcy - a bywa, że integracja jest po prostu niemożliwa i trzeba to sprawdzić przed podpisaniem umowy.',
          'Trzeci czynnik to treść. Napisanie opisów usług medycznych wymaga rozmowy z lekarzem i poprawek po akceptacji. Wykonawca, który wycenia stronę bez pytania o to, kto pisze teksty, prawdopodobnie zakłada, że dostarczy je placówka.',
        ],
      },
      {
        heading: 'Koszty, które pojawiają się po wdrożeniu',
        paragraphs: [
          'Domena to kilkadziesiąt złotych rocznie i zwykle opłaca ją placówka bezpośrednio. Hosting z certyfikatem SSL, kopiami zapasowymi i monitoringiem dostępności kosztuje 80-200 złotych miesięcznie, zależnie od tego, czy serwis potrzebuje bazy danych.',
          'Opieka techniczna to aktualizacje, kontrola działania i drobne poprawki. Wariant podstawowy, 250-450 złotych miesięcznie, obejmuje do dwóch godzin pracy; rozszerzony, 700-1 200 złotych, do pięciu godzin z priorytetową obsługą i raportem. Przy stronie na systemie CMS to nie jest opcja, tylko warunek bezpieczeństwa - nieaktualizowana instalacja zostaje zwykle przejęta w ciągu kilku miesięcy.',
          'Nowe funkcje i większe zmiany rozliczane są godzinowo, zwykle po 160-220 złotych netto za godzinę, z estymacją przed rozpoczęciem prac.',
        ],
        bullets: [
          'domena: kilkadziesiąt złotych rocznie',
          'hosting z SSL, kopiami i monitoringiem: 80-200 zł miesięcznie',
          'opieka techniczna: 250-450 zł (do 2 h) albo 700-1 200 zł (do 5 h) miesięcznie',
          'nowe funkcje i zmiany poza pakietem: 160-220 zł netto za godzinę',
        ],
      },
      {
        heading: 'Gdzie wyceny bywają nieszczere',
        paragraphs: [
          'Najczęstszy zabieg to niska cena wykonania i wysoki abonament z blokadą wyjścia: placówka nie dostaje dostępu do kodu ani do hostingu, więc przeniesienie strony do innego wykonawcy oznacza budowę od zera. Pytanie kontrolne przed podpisaniem umowy brzmi: czy dostaję pełny dostęp do serwera, domeny i kodu.',
          'Drugi zabieg to „SEO w pakiecie", które okazuje się wpisaniem słów kluczowych w tytuły. Trzeci to teksty generowane hurtowo bez konsultacji medycznej - tanie w produkcji, kosztowne, gdy pacjent znajdzie w opisie zabiegu błąd.',
        ],
      },
      {
        heading: 'Jak porównać dwie oferty',
        paragraphs: [
          'Zestaw je na jednej kartce według: liczby unikalnych projektów, tego kto pisze treści, sposobu umawiania wizyt, właściciela domeny i hostingu, zakresu opieki po wdrożeniu i terminu realizacji z karą za opóźnienie.',
          'Różnica w cenie zwykle mieści się w dwóch pozycjach: treści i integracji. Jeśli tańsza oferta ich nie obejmuje, nie jest tańsza - przenosi koszt na placówkę i na termin uruchomienia.',
        ],
      },
    ],
    faq: [
      {
        question: 'Ile kosztuje strona dla gabinetu lekarskiego?',
        answer:
          'Serwis gabinetu z opisem usług, cennikiem i formularzem kontaktowym mieści się w przedziale 2 900-3 900 złotych netto przy trzech podstronach na gotowym szablonie, a 4 900-6 500 złotych przy indywidualnym projekcie i sześciu podstronach. Poniżej tych kwot dostaje się najczęściej szablon z podmienionym logo, bez pracy nad strukturą i treścią.',
      },
      {
        question: 'Czy warto płacić abonament za stronę?',
        answer:
          'Warto, gdy obejmuje aktualizacje, kopie zapasowe, monitoring i realne wsparcie, a placówka zachowuje dostęp do domeny, hostingu i kodu. Nie warto, gdy abonament jest formą blokady i po jego wypowiedzeniu strona przestaje działać albo nie da się jej przenieść.',
      },
      {
        question: 'Ile trwa budowa strony dla przychodni?',
        answer:
          'Od 1-2 tygodni przy prostej wizytówce do 3-6 tygodni przy stronie z blogiem i systemem zarządzania treścią, licząc od kompletu materiałów. Własny system rezerwacji to dodatkowe 5-8 tygodni. Termin wydłuża się najczęściej przez oczekiwanie na materiały placówki: zdjęcia zespołu, zatwierdzony cennik i akceptację opisów usług.',
      },
    ],
    related: [
      {
        path: '/uslugi/strony-internetowe-dla-placowek-medycznych',
        label: 'Strony internetowe dla placówek medycznych',
        description: 'Zakres, harmonogram i widełki cenowe naszej realizacji.',
      },
      {
        path: '/wiedza/pozycjonowanie-kliniki-krok-po-kroku',
        label: 'Pozycjonowanie kliniki krok po kroku',
        description: 'Strona bez widoczności w Google nie zwraca się nigdy.',
      },
      {
        path: '/kontakt',
        label: 'Kontakt',
        description: 'Opisz zakres, odeślemy wycenę z rozbiciem na pozycje.',
      },
    ],
  },
  {
    slug: 'jak-zbierac-opinie-pacjentow',
    title: 'Jak zbierać opinie pacjentów zgodnie z prawem',
    h1: 'Jak zbierać opinie pacjentów zgodnie z prawem',
    seoTitle: 'Jak zbierać opinie pacjentów w Google - procedura | mediaso',
    seoDescription:
      'Procedura zbierania opinii pacjentów: kiedy prosić, jak formułować prośbę, czego nie wolno robić i jak odpowiadać na negatywne opinie bez łamania RODO.',
    datePublished: '2026-08-29',
    dateModified: '2026-08-29',
    readingMinutes: 6,
    lead:
      'Opinie w Google są w ochronie zdrowia jednym z najmocniejszych czynników decyzji: pacjent czyta je przed pierwszym telefonem, a placówka z dwudziestoma świeżymi opiniami wygrywa z placówką z trzema sprzed czterech lat. Zbieranie opinii jest dozwolone i sensowne, ale ma trzy twarde ograniczenia. Nie wolno wybierać, kogo się pyta, na podstawie przewidywanej oceny. Nie wolno oferować niczego w zamian - ani zniżki, ani drobnego upominku. Nie wolno publicznie potwierdzać, że autor opinii był pacjentem, bo to ujawnia informację o jego zdrowiu. Reszta to kwestia procedury: kiedy wysłać prośbę, jak ją sformułować, kto odpowiada na opinie i w jakim czasie. Poniżej gotowy proces do wdrożenia w rejestracji.',
    sections: [
      {
        heading: 'Kiedy prosić o opinię',
        paragraphs: [
          'Najlepszy moment to jeden do dwóch dni po wizycie - pacjent pamięta wizytę, a emocje z poczekalni już opadły. Prośba tego samego dnia częściej trafia w rozdrażnienie po oczekiwaniu, a po tygodniu wizyta jest już mało istotna.',
          'Przy leczeniu rozłożonym w czasie, jak ortodoncja czy implanty, sensowniejszy jest moment zakończenia etapu, nie pierwszej konsultacji. Pacjent ma wtedy co ocenić.',
        ],
      },
      {
        heading: 'Do kogo kierować prośbę',
        paragraphs: [
          'Do wszystkich pacjentów z danej grupy, bez wyjątków. Wybieranie tych, którzy wyglądali na zadowolonych, jest sterowaniem oceną i łamie zasady Google, a wykryte kończy się utratą części opinii albo zawieszeniem profilu.',
          'Praktycznie oznacza to prostą regułę w rejestracji: prośba wychodzi automatycznie do każdego, kto był na wizycie danego typu i wyraził zgodę na kontakt. Bez decyzji człowieka o tym, kogo pominąć.',
        ],
        bullets: [
          'prośba do całej grupy pacjentów, bez selekcji',
          'żadnych zniżek, upominków ani punktów w zamian za opinię',
          'jeden kanał kontaktu, ustalony i zapisany w procedurze',
          'brak ponagleń - jedna prośba wystarczy',
        ],
      },
      {
        heading: 'Jak sformułować prośbę',
        paragraphs: [
          'Krótko, z bezpośrednim linkiem do formularza opinii i bez sugerowania oceny. Zdanie „będzie nam miło, jeśli wystawisz pięć gwiazdek" jest już sterowaniem. Poprawna wersja prosi o opinię, nie o dobrą opinię.',
          'Wzór, który działa: „Dziękujemy za wizytę w [nazwa placówki]. Jeśli ma Pani/Pan chwilę, prosimy o opinię o naszej pracy: [link]. Opinie pomagają nam poprawiać obsługę." Bez emocji, bez nacisku, bez obietnic.',
        ],
      },
      {
        heading: 'Odpowiadanie na opinie, w tym negatywne',
        paragraphs: [
          'Odpowiadaj na wszystkie, w ciągu kilku dni roboczych. Przy opinii pozytywnej wystarczy podziękowanie bez odnoszenia się do przebiegu leczenia. Przy negatywnej obowiązuje zasada, która wygląda niewygodnie: nie potwierdzasz, że autor był pacjentem, i nie prostujesz publicznie faktów medycznych.',
          'Bezpieczny wzór: podziękowanie za sygnał, informacja, że placówka traktuje uwagi poważnie, i zaproszenie do kontaktu bezpośredniego pod wskazany adres lub numer. Wyjaśnienia prowadzisz poza publiczną częścią. Opinie ewidentnie fałszywe albo obraźliwe zgłaszasz do platformy, zamiast wdawać się w spór.',
        ],
        bullets: [
          'odpowiedź na każdą opinię w kilka dni roboczych',
          'brak publicznego potwierdzenia, że autor był pacjentem',
          'żadnych szczegółów leczenia w odpowiedzi',
          'zaproszenie do kontaktu bezpośredniego zamiast dyskusji pod opinią',
          'zgłoszenie do platformy przy naruszeniu jej zasad',
        ],
      },
      {
        heading: 'Co mierzyć',
        paragraphs: [
          'Trzy liczby wystarczą: średnia ocena, liczba nowych opinii w miesiącu i odsetek opinii z odpowiedzią. Tempo przyrostu ma dla widoczności większe znaczenie niż sama średnia - profil z opiniami sprzed trzech lat wygląda na porzucony.',
          'Realny cel dla placówki uruchamiającej proces od zera to kilka nowych opinii miesięcznie. Skok z trzech do pięćdziesięciu w miesiąc jest sygnałem ostrzegawczym dla algorytmu i bywa kończony masowym usunięciem.',
        ],
      },
    ],
    faq: [
      {
        question: 'Czy można prosić pacjentów o opinie w Google?',
        answer:
          'Tak. Google zabrania natomiast oferowania korzyści w zamian za opinię oraz zbierania opinii wyłącznie od wybranych, zadowolonych pacjentów. Prośba skierowana do wszystkich pacjentów z danej grupy, bez nagrody, jest zgodna z zasadami.',
      },
      {
        question: 'Czy placówka może odpowiadać na negatywne opinie?',
        answer:
          'Może i powinna, ale bez potwierdzania, że autor był pacjentem, i bez odnoszenia się do przebiegu leczenia. Publiczne przywołanie szczegółów wizyty jest ujawnieniem danych o zdrowiu, nawet jeśli to autor opinii zaczął o nich pisać.',
      },
      {
        question: 'Czy można usunąć niesprawiedliwą opinię?',
        answer:
          'Placówka może zgłosić ją do platformy jako naruszenie zasad - na przykład gdy zawiera dane osobowe, treści obraźliwe lub dotyczy innej firmy. Google rozpatruje zgłoszenia indywidualnie i nie usuwa opinii tylko dlatego, że jest negatywna.',
      },
      {
        question: 'Ile opinii potrzebuje placówka?',
        answer:
          'Liczy się nie tyle łączna liczba, co regularny dopływ. Kilka nowych opinii miesięcznie utrzymuje profil w rotacji i pokazuje pacjentowi, że placówka działa. Nagły skok z kilku do kilkudziesięciu w krótkim czasie bywa oznaczany jako podejrzany.',
      },
    ],
    related: [
      {
        path: '/uslugi/wizytowka-google-dla-placowki',
        label: 'Wizytówka Google dla placówki',
        description: 'Opinie są jednym z trzech filarów widoczności w mapach.',
      },
      {
        path: '/wiedza/rodo-w-marketingu-placowki-medycznej',
        label: 'RODO w marketingu placówki medycznej',
        description: 'Zgody i granice publikowania informacji o pacjentach.',
      },
    ],
  },
];
