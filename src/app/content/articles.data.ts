import type { Article } from './content.types';

/**
 * Baza wiedzy. Kolejność w tablicy jest kolejnością na `/wiedza`.
 * Daty w formacie ISO - trafiają do JSON-LD (Article) i do sitemapy.
 */
export const ARTICLES: readonly Article[] = [
  {
    slug: 'reklama-swiadczen-zdrowotnych-co-wolno',
    title: 'Reklama świadczeń zdrowotnych: co wolno',
    h1: 'Reklama świadczeń zdrowotnych: gdzie kończy się informacja, a zaczyna wykroczenie',
    seoTitle: 'Reklama usług medycznych: co wolno, a za co grozi kara (art. 14) | mediaso',
    seoDescription:
      'Lista dozwolonych i zakazanych treści dla placówek i lekarzy: ceny, promocje, zdjęcia przed i po, social media. Art. 14, art. 147a k.w. i Kodeks Etyki Lekarskiej 2025.',
    datePublished: '2026-09-22',
    dateModified: '2026-10-25',
    readingMinutes: 9,
    motif: 'pulse',
    image: {
      // Pixabay: https://pixabay.com/photos/stethoscope-hospital-doctor-health-840125/
      src: '/blog/reklama-swiadczen-stetoskop.jpg',
      alt: 'Stetoskop zawieszony na ścianie gabinetu, zdjęcie czarno-białe',
      width: 1280,
      height: 853,
      credit: 'Pixabay, Content License',
      creditUrl: 'https://pixabay.com/photos/stethoscope-hospital-doctor-health-840125/',
    },
    lead:
      'Placówka medyczna może informować o tym, co robi, ale nie może zachęcać do skorzystania. Ta jedna różnica stoi za art. 14 ustawy o działalności leczniczej i za art. 147a Kodeksu wykroczeń, który za podanie do publicznej wiadomości informacji o świadczeniach w formie reklamy przewiduje grzywnę, ograniczenie wolności albo areszt. Przepis brzmi szeroko i stąd bierze się większość wątpliwości: ten sam post na Facebooku raz jest legalną informacją o uruchomieniu pracowni USG, a raz reklamą, bo dopisano do niego „promocja do końca miesiąca". Od 1 stycznia 2025 roku doszła druga warstwa: nowy Kodeks Etyki Lekarskiej, który usunął zdanie o zakazie reklamowania się i zastąpił je zasadami informowania. Trzecia warstwa to ustawa o wyrobach medycznych, gdzie kary sięgają milionów złotych i nakłada je Prezes UOKiK. Poniżej trzy warstwy w jednej liście: co wolno napisać, czego nie i jak sprawdzić materiał przed publikacją.',
    sections: [
      {
        heading: 'Jedno zdanie ustawy, na którym opiera się cała reszta',
        paragraphs: [
          'Art. 14 ust. 1 ustawy o działalności leczniczej pozwala podmiotowi wykonującemu działalność leczniczą podawać do wiadomości publicznej informacje o zakresie i rodzajach udzielanych świadczeń zdrowotnych, pod warunkiem że treść i forma tych informacji nie mają cech reklamy. Ustawa nie mówi, czym są cechy reklamy. Tę granicę wyznaczyły orzecznictwo i stanowiska Naczelnej Izby Lekarskiej.',
          'Informacja to przekaz rzeczowy i neutralny: jakie świadczenia placówka wykonuje, kto je wykonuje, gdzie i w jakich godzinach. Reklama to ten sam przekaz plus zachęta do skorzystania, nastawiona na wzrost liczby pacjentów i przychodu. O ocenie decyduje warstwa językowa. Zdanie o uruchomieniu pracowni endoskopii jest legalne jako komunikat oznajmujący i staje się wykroczeniem po dopisaniu hasła o promocyjnej cenie pierwszych dwudziestu badań.',
        ],
        bullets: [
          'informacja opisuje stan faktyczny: zakres świadczeń, miejsce, godziny, kwalifikacje personelu',
          'reklama dokłada zachętę: rabat, ograniczenie czasowe, wartościowanie, obietnicę efektu',
          'kanał nie zmienia oceny: ulotka, strona, Google Ads i Instagram podlegają tej samej zasadzie',
          'zakaz wiąże podmiot leczniczy i praktykę zawodową, nie sklep z suplementami czy gabinet kosmetyczny',
        ],
        note: 'Art. 147a § 2 Kodeksu wykroczeń: kto podaje do wiadomości publicznej informacje o zakresie i rodzajach udzielanych świadczeń zdrowotnych mające formę i treść reklamy, podlega karze aresztu, ograniczenia wolności albo grzywny.',
      },
      {
        heading: 'Co wolno napisać bez ryzyka',
        paragraphs: [
          'Lista bezpiecznych treści jest dłuższa, niż wynika to z obiegowej opinii, że „w medycynie nic nie wolno". Wolno opisać całą operacyjną stronę placówki: kto przyjmuje, z czym, kiedy i jak się zapisać. Wolno podać wykształcenie, specjalizacje, staż i przynależność do towarzystw naukowych, o ile dane są prawdziwe i sprawdzalne. Wolno nazwać sprzęt i metodę, którą placówka pracuje, pod warunkiem że opis pozostaje techniczny, a nie perswazyjny.',
          'Pacjent szukający ortopedy potrzebuje dokładnie tych informacji, więc rzetelny opis usług jest jednocześnie zgodny z prawem i lepszy sprzedażowo niż hasło reklamowe. Strona, która odpowiada na pytania o skierowanie, czas trwania wizyty, przygotowanie do badania i sposób odbioru wyników, przynosi więcej rejestracji niż nagłówek o najnowocześniejszym sprzęcie w województwie.',
        ],
        bullets: [
          'nazwa, adres, dojazd, parking, dostępność dla osób z niepełnosprawnościami',
          'zakres świadczeń nazwany językiem pacjenta, bez wartościowania',
          'imiona, nazwiska, tytuły i specjalizacje osób udzielających świadczeń',
          'godziny pracy rejestracji i poszczególnych poradni',
          'telefon, adres rejestracji online, zasady odwoływania wizyt',
          'nazwa i parametry sprzętu opisane rzeczowo',
          'wysokość opłat wynikająca z regulaminu organizacyjnego',
        ],
        image: {
          // Pixabay: https://pixabay.com/photos/door-entry-hospital-passage-red-349807/
          src: '/blog/reklama-swiadczen-wejscie.jpg',
          alt: 'Drzwi do korytarza placówki medycznej z klamką antypaniczną',
          width: 1280,
          height: 853,
          credit: 'Pixabay, Content License',
          creditUrl: 'https://pixabay.com/photos/door-entry-hospital-passage-red-349807/',
        },
      },
      {
        heading: 'Ceny i promocje: najczęstszy błąd placówek',
        paragraphs: [
          'Podanie cen bywa obowiązkiem. Regulamin organizacyjny podmiotu leczniczego określa wysokość opłat za świadczenia udzielane odpłatnie, a informację o nich placówka podaje do wiadomości pacjentów. Cennik na stronie i w rejestracji jest więc wykonaniem obowiązku informacyjnego, nie reklamą.',
          'Reklamą staje się dopiero operowanie ceną: rabat, kod zniżkowy, pakiet w cenie niższej niż suma pozycji, porównanie do ceny wcześniejszej, termin ważności oferty. Ta sama logika obejmuje serwisy zakupów grupowych, bo zabieg wystawiony jako okazja dnia jest zachętą w czystej postaci. Jeśli placówka zmienia cennik, publikuje nowy cennik, a nie komunikat o obniżce.',
        ],
        bullets: [
          'cennik jako tabela pozycji i kwot: dopuszczalny i potrzebny',
          'kwota przekreślona, „-30%", „pakiet świąteczny", „do końca miesiąca": zachęta',
          'zabiegi na platformach zakupów grupowych: reklama niezależnie od sformułowania',
          'bezpłatna konsultacja przed zabiegiem komercyjnym: traktowana jak zachęta',
        ],
      },
      {
        heading: 'Kodeks Etyki Lekarskiej po 1 stycznia 2025 roku',
        paragraphs: [
          'Poprzedni Kodeks Etyki Lekarskiej zawierał zdanie, że wszelkie reklamowanie się jest zabronione. Taki zapis okazał się nie do pogodzenia z prawem unijnym i zniknął. Obowiązujący od 1 stycznia 2025 roku art. 71 nowego kodeksu nie posługuje się już słowem „reklama": mówi o informowaniu o działalności zawodowej, które ma pozostać zgodne z zasadami etyki lekarskiej. Informacją jest przy tym każda forma przekazu upowszechniającego wizerunek lekarza lub jego usługi.',
          'Zmiana poszerza pole manewru, ale nie znosi granic. Lekarzowi nadal nie wolno deprecjonować innych lekarzy, przedstawiać się jako jedyny czy najlepszy, ani wykorzystywać autorytetu zawodu do promowania rzeczy z nim niezwiązanych, od suplementów po kosmetyki. Odpowiedzialność biegnie przed rzecznikiem odpowiedzialności zawodowej i sądem lekarskim, niezależnie od odpowiedzialności podmiotu leczniczego za treści wydane pod jego szyldem.',
        ],
        note: 'Zmiana w kodeksie etyki nie uchyliła art. 14 ustawy o działalności leczniczej. Lekarz jako osoba ma dziś szersze pole niż przychodnia jako podmiot i to podmiot odpowiada za treści na stronie i w kampaniach.',
      },
      {
        heading: 'Wyroby medyczne to osobne przepisy i zupełnie inne kary',
        paragraphs: [
          'Ustawa o wyrobach medycznych z 2022 roku wprowadziła od 1 stycznia 2023 roku własny reżim reklamowy, który działa równolegle do ustawy o działalności leczniczej. Reklama wyrobu kierowana do publicznej wiadomości nie może wykorzystywać wizerunku osób wykonujących zawody medyczne ani osób podających się za takie osoby, ani przedstawiać prezentującego w sposób sugerujący wykonywanie takiego zawodu. Fartuch, stetoskop i wnętrze gabinetu w kadrze wystarczą, żeby przepis zadziałał.',
          'Dotyczy to materiałów, które placówki publikują rutynowo: aparatu do lasera frakcyjnego, implantów, soczewek, aparatów słuchowych, skanerów wewnątrzustnych. Sankcje nakłada Prezes UOKiK i Prezes Urzędu Rejestracji: do 2 milionów złotych za reklamę niezgodną z przepisami i do 5 milionów za reklamę wprowadzającą w błąd. Współpraca z producentem sprzętu wymaga więc sprawdzenia, kto formalnie jest nadawcą materiału.',
        ],
      },
      {
        heading: 'Jak to wygląda w kanałach, których placówki używają codziennie',
        paragraphs: [
          'Na stronie internetowej ryzyko siedzi najczęściej w nagłówkach i sekcji „dlaczego my". Opisy usług zwykle są poprawne, bo powstają na bazie dokumentacji. Wywraca je zdanie o najlepszym zespole w mieście albo licznik zadowolonych pacjentów. Usunięcie superlatywów z trzech ekranów strony rozwiązuje zwykle większość problemu.',
          'W Google Ads sama obecność placówki nie jest zakazana i stanowiska prawników są tu podzielone, natomiast teksty reklam podlegają art. 14 tak samo jak ulotka. Bezpieczna kampania kieruje na zapytania o konkretną usługę i mówi, co placówka robi, gdzie i kiedy przyjmuje. Do tego dochodzą polityki Google i Meta dotyczące zdrowia, które bywają ostrzejsze niż polskie prawo i odrzucą kreację.',
          'W mediach społecznościowych granicę przekracza się najszybciej, bo format popycha do zachęty. Relacja z konferencji, wyjaśnienie procedury, przedstawienie nowego specjalisty i komunikat organizacyjny mieszczą się w informacji. Konkurs z zabiegiem w nagrodę, współpraca z influencerem opisującym zabieg jak produkt i zdjęcia przed i po używane jako dowód skuteczności to obszar, w którym izby lekarskie prowadzą postępowania.',
        ],
        image: {
          // Pixabay: https://pixabay.com/photos/doctor-telemedicine-laptop-6161898/
          src: '/blog/reklama-swiadczen-teleporada.jpg',
          alt: 'Laptop na drewnianym biurku z lekarzem trzymającym stetoskop na ekranie',
          width: 1280,
          height: 705,
          credit: 'Pixabay, Content License',
          creditUrl: 'https://pixabay.com/photos/doctor-telemedicine-laptop-6161898/',
        },
        link: {
          path: '/wiedza/czym-jest-marketing-medyczny',
          label: 'Czym jest marketing medyczny',
          description: 'Pełna lista kanałów i tego, co w każdym z nich wolno pokazać.',
        },
      },
      {
        heading: 'Czerwone flagi, po których poznasz reklamę we własnym tekście',
        paragraphs: [
          'Przy ocenie materiału pomaga proste ćwiczenie: wykreśl z tekstu każde zdanie, którego nie da się zweryfikować dokumentem, zdjęciem albo wpisem w rejestrze. To, co zostanie, jest informacją. To, co wykreśliłeś, było najczęściej zachętą.',
        ],
        bullets: [
          'superlatywy i porównania: najlepszy, najnowocześniejszy, najtańszy, lider w regionie',
          'obietnica albo gwarancja efektu leczenia',
          'rabaty, kody, pakiety, konkursy i nagrody w postaci świadczeń',
          'zdjęcia przed i po prezentowane jako dowód skuteczności',
          'opinie pacjentów pozyskane w zamian za rabat lub upominek',
          'influencer relacjonujący zabieg w konwencji recenzji produktu',
          'wizerunek osoby w fartuchu w materiale promującym wyrób medyczny',
        ],
        note: 'Opinie zbierane za korzyść łamią jednocześnie wytyczne Google i przepisy o nieuczciwych praktykach rynkowych. Sposób na zbieranie ich legalnie opisaliśmy osobno.',
      },
      {
        heading: 'Proces akceptacji treści zamiast sprawdzania każdego posta osobno',
        paragraphs: [
          'Placówki wpadają w kłopoty nie dlatego, że nie znają przepisu, tylko dlatego, że posta publikuje o 22:00 osoba, która nigdy o tym przepisie nie słyszała. Działa proces akceptacji treści. Jedna osoba w placówce akceptuje treści przed publikacją i zadaje trzy pytania: czy zdanie opisuje fakt, czy fakt da się udowodnić, czy tekst zawiera zachętę, rabat lub wartościowanie.',
          'Do tego wystarczy archiwum: zrzut każdej publikacji z datą, w jednym folderze. Jeśli izba albo konkurencja zgłosi sprawę po roku, materiał dowodowy jest pod ręką. W umowie z agencją marketingową warto zapisać wprost, kto odpowiada za zgodność treści z art. 14 i kto akceptuje kreacje przed emisją.',
        ],
        bullets: [
          'jedna osoba akceptująca treści, wskazana z imienia, nie „zespół"',
          'trzy pytania kontrolne przed publikacją',
          'archiwum zrzutów wszystkich publikacji i kreacji reklamowych',
          'zapis w umowie z agencją o odpowiedzialności za zgodność treści',
          'przegląd strony raz na kwartał pod kątem superlatywów',
        ],
        image: {
          // Pixabay: https://pixabay.com/photos/stairs-corridor-hospital-orange-2105208/
          src: '/blog/reklama-swiadczen-schody.jpg',
          alt: 'Klatka schodowa w budynku szpitala z pomarańczowymi stopniami',
          width: 853,
          height: 1280,
          credit: 'Pixabay, Content License',
          creditUrl: 'https://pixabay.com/photos/stairs-corridor-hospital-orange-2105208/',
        },
      },
      {
        heading: 'Kto to egzekwuje i od czego zwykle się zaczyna',
        paragraphs: [
          'Sprawy rzadko wychodzą od urzędu. Najczęściej zgłasza je konkurencyjna placówka z tej samej dzielnicy, czasem pacjent, czasem izba po tym, jak materiał zrobił zasięgi. Dalej postępowanie idzie dwiema drogami: zawodową, przed rzecznikiem odpowiedzialności zawodowej i sądem lekarskim, oraz wykroczeniową, na podstawie art. 147a Kodeksu wykroczeń. Przy wyrobach medycznych dochodzi droga administracyjna z karami pieniężnymi.',
          'Ryzyko rośnie razem z zasięgiem. Materiał, który dobrze się niesie, prędzej trafi przed oczy kogoś, kto go zgłosi. Dlatego treści przeznaczone do promocji płatnej warto sprawdzać uważniej niż wpis widoczny dla stu osób.',
        ],
        note: 'Ten tekst opisuje stan przepisów na wrzesień 2026 roku i nie jest poradą prawną. Przy wątpliwej kreacji taniej wychodzi godzina konsultacji z prawnikiem medycznym niż postępowanie przed sądem lekarskim.',
      },
    ],
    faq: [
      {
        question: 'Czy placówka medyczna może prowadzić kampanie Google Ads?',
        answer:
          'Sama obecność w płatnych wynikach nie jest zakazana, natomiast treść reklamy podlega art. 14 ustawy o działalności leczniczej tak samo jak ulotka czy baner. Bezpieczna kampania informuje o zakresie świadczeń, lokalizacji i godzinach przyjęć, bez rabatów, superlatywów i obietnic efektu. Stanowiska prawników co do samej dopuszczalności kampanii są podzielone, więc kreacje warto skonsultować.',
      },
      {
        question: 'Czy wolno podawać ceny zabiegów na stronie?',
        answer:
          'Tak. Wysokość opłat za świadczenia udzielane odpłatnie wynika z regulaminu organizacyjnego podmiotu leczniczego i podaje się ją do wiadomości pacjentów. Reklamą staje się dopiero operowanie ceną: rabaty, kwoty przekreślone, pakiety promocyjne i oferty ograniczone terminem.',
      },
      {
        question: 'Czy zdjęcia przed i po są dozwolone?',
        answer:
          'Prezentowane jako dowód skuteczności i zachęta do zabiegu są traktowane jako reklama, a dodatkowo pokazują dane o zdrowiu konkretnej osoby, co wymaga odrębnej zgody. W materiałach edukacyjnych i naukowych, kierowanych do profesjonalistów, ocena bywa inna. W komunikacji do pacjentów to jedno z najczęściej kwestionowanych narzędzi.',
      },
      {
        question: 'Czy nowy Kodeks Etyki Lekarskiej zniósł zakaz reklamy?',
        answer:
          'Nie zniósł granic, tylko zmienił język. Od 1 stycznia 2025 roku kodeks nie posługuje się słowem „reklama" i pozwala lekarzowi informować o działalności zawodowej zgodnie z zasadami etyki. Nadal zabronione jest deprecjonowanie innych lekarzy, przedstawianie się jako najlepszy czy jedyny oraz wykorzystywanie autorytetu zawodu do promocji usług i produktów niezwiązanych z medycyną. Przepisy ustawy o działalności leczniczej obowiązują niezależnie od kodeksu.',
      },
      {
        question: 'Jaka kara grozi za reklamę świadczeń zdrowotnych?',
        answer:
          'Za podanie do wiadomości publicznej informacji o świadczeniach w formie reklamy Kodeks wykroczeń przewiduje karę aresztu, ograniczenia wolności albo grzywny, a lekarzowi grozi dodatkowo odpowiedzialność zawodowa. Przy reklamie wyrobów medycznych kary są administracyjne i sięgają 2 milionów złotych, a przy reklamie wprowadzającej w błąd 5 milionów złotych.',
      },
    ],
    sources: [
      {
        label: 'Ustawa z dnia 15 kwietnia 2011 r. o działalności leczniczej',
        url: 'https://eli.gov.pl/eli/DU/2011/654/ogl',
        publisher: 'Dziennik Ustaw',
      },
      {
        label: 'Informowanie o działalności leczniczej a jej reklama',
        url: 'https://nil.org.pl/dla-lekarzy/praktyka-lekarska/4240-informowanie-o-dzialalnosci-leczniczej-a-jej-reklama',
        publisher: 'Naczelna Izba Lekarska',
      },
      {
        label: 'Kodeks Etyki Lekarskiej',
        url: 'https://nil.org.pl/dla-lekarzy/prawo/kodeks-etyki-lekarskiej',
        publisher: 'Naczelna Izba Lekarska',
      },
      {
        label: 'Reklama wyrobów medycznych. Nowe przepisy od 1 stycznia 2023 r.',
        url: 'https://nil.org.pl/aktualnosci/7005-reklama-wyrobow-medycznych-nowe-przepisy-od-1-stycznia-2023-r',
        publisher: 'Naczelna Izba Lekarska',
      },
    ],
    related: [
      {
        path: '/wiedza/rodo-w-marketingu-placowki-medycznej',
        label: 'RODO w marketingu placówki medycznej',
        description: 'Druga warstwa ograniczeń: dane pacjentów w zdjęciach, opiniach i remarketingu.',
      },
      {
        path: '/wiedza/jak-zbierac-opinie-pacjentow',
        label: 'Jak zbierać opinie pacjentów zgodnie z prawem',
        description: 'Prośba o opinię bez korzyści majątkowej i bez łamania wytycznych Google.',
      },
      {
        path: '/uslugi/social-media-dla-klinik',
        label: 'Social media dla klinik',
        description: 'Prowadzimy profile placówek z akceptacją treści po stronie zgodności z art. 14.',
      },
    ],
  },
  {
    slug: 'wizytowka-google-dla-przychodni',
    title: 'Wizytówka Google dla przychodni',
    h1: 'Wizytówka Google dla przychodni: jak ją ustawić, żeby pacjenci trafiali do Ciebie',
    seoTitle: 'Wizytówka Google dla przychodni: 7 kroków i błędy, które blokują mapy | mediaso',
    seoDescription:
      'Jak ustawić Profil Firmy w Google dla przychodni i gabinetu: kategoria główna, usługi, godziny, zdjęcia, posty. 7 kroków na jedno popołudnie, bez żadnych opłat.',
    datePublished: '2026-09-11',
    dateModified: '2026-10-25',
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
        link: {
          path: '/wiedza/reklama-swiadczen-zdrowotnych-co-wolno',
          label: 'Reklama świadczeń zdrowotnych: co wolno',
          description: 'Posty w profilu podlegają tym samym przepisom co ulotka.',
        },
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
    sources: [
      {
        label: 'Wytyczne dotyczące reprezentowania firmy w Google',
        url: 'https://support.google.com/business/answer/3038177',
        publisher: 'Pomoc Google',
      },
      {
        label: 'Jak poprawić pozycję w wynikach lokalnych',
        url: 'https://support.google.com/business/answer/7091',
        publisher: 'Pomoc Google',
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
        label: 'Jak samodzielnie wypromować klinikę w Google',
        description: 'Wizytówka jako jeden z sześciu etapów widoczności w Google.',
      },
    ],
  },
  {
    slug: 'social-media-dla-lekarzy',
    title: 'Social media dla lekarzy',
    h1: 'Social media dla lekarzy: co publikować, czego nie wolno i jak prowadzić profil',
    seoTitle: 'Social media dla lekarzy i gabinetów: co publikować, czego nie wolno | mediaso',
    seoDescription:
      'Jak lekarz, stomatolog czy fizjoterapeuta może prowadzić Instagram, Facebook i TikTok zgodnie z Kodeksem Etyki Lekarskiej: tematy postów, rytm publikacji, zgody i wiadomości.',
    datePublished: '2026-10-25',
    dateModified: '2026-10-25',
    readingMinutes: 8,
    lead:
      'Profil lekarza w mediach społecznościowych ma jedno zadanie: pacjent, który usłyszał nazwisko od znajomego albo znalazł je w wyszukiwarce, ma zobaczyć konkretną osobę, jej zakres przyjęć i sposób pracy, zanim zadzwoni do rejestracji. Od 1 stycznia 2025 roku Kodeks Etyki Lekarskiej nie mówi już o zakazie reklamowania się, tylko o informowaniu o działalności zawodowej, więc pole do publikacji jest szersze niż kilka lat temu. Granice zostały: lekarz nie może przedstawiać się jako najlepszy ani jedyny, deprecjonować innych lekarzy, obiecywać efektu leczenia ani pokazywać pacjentów bez pisemnej zgody. Poniżej opisujemy, jak wybrać między profilem lekarza a profilem gabinetu, które tematy przynoszą pacjentów w poszczególnych specjalizacjach, ile publikować i jak obsługiwać wiadomości, żeby nie ujawnić danych o zdrowiu.',
    sections: [
      {
        heading: 'Profil lekarza czy profil gabinetu',
        paragraphs: [
          'Lekarz, który przyjmuje w jednym miejscu i jest twarzą gabinetu, zwykle nie potrzebuje dwóch profili. Jeden profil gabinetu prowadzony z perspektywy lekarza ma większy zasięg niż dwa profile publikujące to samo. Osobny profil lekarza ma sens, gdy specjalista przyjmuje w kilku placówkach, gdy buduje rozpoznawalność w swojej dziedzinie albo gdy pacjenci szukają go po nazwisku.',
          'Przy profilu lekarza ustal na starcie, co należy do niego, a co do placówki. Treści o zakresie przyjęć, doświadczeniu i wystąpieniach są jego. Komunikaty o godzinach, cenach i wolnych terminach należą do placówki. Ten podział chroni oba profile przy zmianie miejsca pracy.',
        ],
        bullets: [
          'jeden gabinet, jeden lekarz: jeden profil gabinetu z lekarzem w roli głównej',
          'lekarz w kilku placówkach: osobny profil lekarza i linki do miejsc przyjęć',
          'przychodnia wieloosobowa: profil placówki i krótkie prezentacje specjalistów',
        ],
      },
      {
        heading: 'Co lekarz może publikować po zmianie Kodeksu Etyki Lekarskiej',
        paragraphs: [
          'Art. 71 obowiązującego Kodeksu Etyki Lekarskiej pozwala lekarzowi informować o działalności zawodowej, o ile forma i treść pozostają zgodne z zasadami etyki. W praktyce to szeroki katalog treści, a większość z nich lepiej buduje zaufanie pacjenta niż hasło reklamowe.',
        ],
        bullets: [
          'zakres przyjęć: z czym przyjść, z czym nie, czy potrzebne jest skierowanie',
          'wykształcenie, specjalizacje, szkolenia i wystąpienia na konferencjach',
          'przebieg wizyty, badania lub zabiegu opisany rzeczowo',
          'odpowiedzi na pytania, które pacjenci zadają w gabinecie',
          'sprzęt i metoda pracy opisane technicznie, bez superlatywów',
          'komunikaty organizacyjne: miejsca przyjęć, urlopy, nowe terminy',
        ],
        link: {
          path: '/wiedza/reklama-swiadczen-zdrowotnych-co-wolno',
          label: 'Reklama świadczeń zdrowotnych: co wolno',
          description: 'Pełna lista dozwolonych i zakazanych sformułowań z podstawą prawną.',
        },
      },
      {
        heading: 'Czego nie publikować',
        paragraphs: [
          'Większość problemów bierze się z formatów, które dobrze działają w innych branżach. Konkurs z zabiegiem w nagrodę, rabat dla obserwujących czy metamorfoza przed i po pokazana jako dowód skuteczności to w medycynie zachęta do korzystania ze świadczeń. Za taki materiał lekarz odpowiada przed rzecznikiem odpowiedzialności zawodowej, a placówka na podstawie art. 147a Kodeksu wykroczeń.',
        ],
        bullets: [
          'superlatywy: najlepszy, jedyny, najnowocześniejszy w mieście',
          'obietnica lub gwarancja efektu leczenia',
          'rabaty, kody zniżkowe, konkursy z zabiegiem w nagrodę',
          'zdjęcia pacjentów i ich historie bez pisemnej zgody',
          'polecanie suplementów, kosmetyków i produktów niezwiązanych z leczeniem',
          'komentowanie pracy innych lekarzy w sposób, który ich deprecjonuje',
        ],
      },
      {
        heading: 'Tematy, które przynoszą pacjentów w poszczególnych specjalizacjach',
        paragraphs: [
          'Dobry temat to pytanie, które pacjent zadaje przed wizytą. Rejestracja i sam lekarz słyszą je codziennie, więc lista tematów na kwartał powstaje w godzinę rozmowy. Ogólne grafiki o zdrowym stylu życia wypełniają kalendarz, ale nie dają powodu, żeby zadzwonić akurat do tego gabinetu.',
          'Stomatolog zyskuje najwięcej na treściach zdejmujących lęk: jak wygląda znieczulenie, ile trwa leczenie kanałowe, co dzieje się na pierwszej wizycie dziecka. Fizjoterapeuta na krótkim wideo z ćwiczeniem i wyjaśnieniem, kiedy ból wymaga wizyty. Ginekolog na rzeczowym opisie badań profilaktycznych i tego, jak się do nich przygotować. Dermatolog na tym, kiedy znamię wymaga kontroli i jak przebiega dermatoskopia.',
        ],
        bullets: [
          'stomatolog: znieczulenie, leczenie kanałowe, wizyta adaptacyjna dziecka, implanty krok po kroku',
          'fizjoterapeuta: ćwiczenia na wideo, pierwsza wizyta, kiedy iść do lekarza',
          'ginekolog: badania profilaktyczne, przygotowanie do wizyty, prowadzenie ciąży',
          'dermatolog: kontrola znamion, dermatoskopia, przygotowanie do zabiegu',
          'psycholog i psychiatra: jak wygląda pierwsza konsultacja, czym różnią się specjaliści',
        ],
      },
      {
        heading: 'Ile publikować i ile to zajmuje czasu',
        paragraphs: [
          'Dwie do czterech publikacji tygodniowo utrzymują profil w rotacji. Poniżej jednej tygodniowo profil wygląda na porzucony, a pacjent szukający śladu, że gabinet działa, go nie znajduje. Krótkie wideo z lekarzem zwykle dociera do większej liczby osób niż grafika, bo pokazuje człowieka, z którym pacjent będzie rozmawiał.',
          'Najmniej czasu lekarza zabiera rytm miesięczny: jedna sesja nagraniowa na godzinę lub dwie, z której powstaje materiał na cały miesiąc, plan treści zatwierdzany z wyprzedzeniem i publikacja rozłożona w kalendarzu. Montaż, opisy, grafiki i harmonogram może przejąć asystentka albo agencja.',
        ],
      },
      {
        heading: 'Wiadomości i komentarze od pacjentów',
        paragraphs: [
          'Pacjenci piszą na Instagramie i Messengerze o objawy, wyniki i terminy. Odpowiedź z poradą medyczną w wiadomości jest ryzykowna: lekarz nie widział pacjenta, a historia rozmowy zostaje na serwerach platformy. Bezpieczny standard to przekierowanie do rejestracji lub na wizytę, z informacją, jak się umówić.',
          'W komentarzach obowiązuje ta sama zasada co przy opiniach w Google. Nie potwierdzasz publicznie, że ktoś jest pacjentem, i nie odnosisz się do przebiegu leczenia, nawet gdy autor sam o nim pisze. Samo potwierdzenie wizyty jest ujawnieniem danych o zdrowiu.',
        ],
        link: {
          path: '/wiedza/rodo-w-marketingu-placowki-medycznej',
          label: 'RODO w marketingu placówki medycznej',
          description: 'Zgody na wizerunek, opinie i obsługa wiadomości od pacjentów.',
        },
      },
      {
        heading: 'Kiedy zlecić prowadzenie profilu',
        paragraphs: [
          'Samodzielne prowadzenie profilu działa, dopóki lekarz ma na nie stały czas w tygodniu. Kiedy publikacje zaczynają się urywać na kilka tygodni, lepiej oddać montaż, grafiki, harmonogram i moderację komuś, kto zna ograniczenia branży, a sobie zostawić nagrania i akceptację treści. Akceptacja zawsze zostaje po stronie lekarza, bo to on odpowiada zawodowo za treść publikowaną w jego imieniu.',
        ],
        link: {
          path: '/uslugi/social-media-dla-klinik',
          label: 'Prowadzenie social mediów dla lekarzy i klinik',
          description: 'Plan treści, nagrania w gabinecie, montaż i obsługa wiadomości.',
        },
      },
    ],
    faq: [
      {
        question: 'Czy lekarz może prowadzić konto na Instagramie lub TikToku?',
        answer:
          'Tak. Kodeks Etyki Lekarskiej obowiązujący od 1 stycznia 2025 roku pozwala lekarzowi informować o działalności zawodowej w każdej formie przekazu, w tym w mediach społecznościowych. Treść musi pozostać rzetelna: bez superlatywów, obietnic efektu leczenia, deprecjonowania innych lekarzy i promowania produktów niezwiązanych z medycyną.',
      },
      {
        question: 'Czy lekarz może pokazywać pacjentów w social mediach?',
        answer:
          'Tylko za pisemną zgodą pacjenta, która wskazuje kanały publikacji i daje możliwość wycofania. Sam wizerunek osoby w gabinecie ujawnia informację o korzystaniu ze świadczeń zdrowotnych, czyli dane szczególnej kategorii. Bez zgody publikuje się zespół, wnętrza, sprzęt i modele anatomiczne.',
      },
      {
        question: 'Ile postów tygodniowo powinien publikować lekarz?',
        answer:
          'Dwie do czterech publikacji tygodniowo wystarczą, żeby profil wyglądał na aktywny i był widoczny dla obserwujących. Regularność ma większe znaczenie niż liczba: dwa posty co tydzień przez rok dają więcej niż dziesięć w jednym miesiącu i przerwa na kwartał.',
      },
      {
        question: 'Czy lekarz może odpowiadać na pytania pacjentów w wiadomościach?',
        answer:
          'Na pytania organizacyjne tak: o terminy, miejsca przyjęć i przygotowanie do wizyty. Pytania o objawy i wyniki lepiej przekierować na wizytę lub teleporadę, bo porada udzielona w wiadomości odbywa się bez badania i bez dokumentacji medycznej.',
      },
    ],
    sources: [
      {
        label: 'Kodeks Etyki Lekarskiej',
        url: 'https://nil.org.pl/dla-lekarzy/prawo/kodeks-etyki-lekarskiej',
        publisher: 'Naczelna Izba Lekarska',
      },
      {
        label: 'Informowanie o działalności leczniczej a jej reklama',
        url: 'https://nil.org.pl/dla-lekarzy/praktyka-lekarska/4240-informowanie-o-dzialalnosci-leczniczej-a-jej-reklama',
        publisher: 'Naczelna Izba Lekarska',
      },
    ],
    related: [
      {
        path: '/uslugi/social-media-dla-klinik',
        label: 'Social media dla klinik, gabinetów i lekarzy',
        description: 'Prowadzimy profile lekarzy i placówek z akceptacją treści po stronie lekarza.',
      },
      {
        path: '/wiedza/reklama-swiadczen-zdrowotnych-co-wolno',
        label: 'Reklama świadczeń zdrowotnych: co wolno',
        description: 'Granica między informacją a reklamą w przepisach.',
      },
      {
        path: '/wiedza/jak-zbierac-opinie-pacjentow',
        label: 'Jak zbierać opinie pacjentów zgodnie z prawem',
        description: 'Opinie w Google i komentarze w social mediach rządzą się tymi samymi zasadami.',
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
    dateModified: '2026-09-22',
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
        link: {
          path: '/wiedza/reklama-swiadczen-zdrowotnych-co-wolno',
          label: 'Reklama świadczeń zdrowotnych: co wolno',
          description: 'Art. 14, Kodeks Etyki Lekarskiej i wyroby medyczne w jednym miejscu.',
        },
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
          'Pierwsze kroki - uporządkowanie wizytówki Google i proces zbierania opinii - kosztują pracę, nie budżet mediowy. Stała obsługa social mediów i strona internetowa to koszty zależne od zakresu: liczby kanałów, publikacji i podstron. Budżet reklamowy zależy od tego, ile wolnych terminów placówka ma do zapełnienia.',
      },
      {
        question: 'Czy marketing medyczny to to samo co SEO?',
        answer:
          'Nie. SEO jest jego częścią i odpowiada za widoczność w wynikach wyszukiwania. Marketing medyczny obejmuje też wizytówkę Google, social media, komunikację z pacjentami i obsługę zgłoszeń w rejestracji.',
      },
    ],
    sources: [
      {
        label: 'Ustawa z dnia 15 kwietnia 2011 r. o działalności leczniczej',
        url: 'https://eli.gov.pl/eli/DU/2011/654/ogl',
        publisher: 'Dziennik Ustaw',
      },
      {
        label: 'Informowanie o działalności leczniczej a jej reklama',
        url: 'https://nil.org.pl/dla-lekarzy/praktyka-lekarska/4240-informowanie-o-dzialalnosci-leczniczej-a-jej-reklama',
        publisher: 'Naczelna Izba Lekarska',
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
        path: '/wiedza/reklama-swiadczen-zdrowotnych-co-wolno',
        label: 'Reklama świadczeń zdrowotnych: co wolno',
        description: 'Granica między informacją a reklamą w przepisach, z listą zakazanych sformułowań.',
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
    title: 'Jak samodzielnie wypromować klinikę w Google',
    h1: 'Jak samodzielnie wypromować klinikę w Google: 6 kroków',
    seoTitle: 'Jak samodzielnie wypromować klinikę w Google - 6 kroków | mediaso',
    seoDescription:
      'Poradnik dla właściciela placówki: lista fraz z Search Console, indeksowanie, podstrony usług, wizytówka Google, treści i pomiar. Do zrobienia bez agencji.',
    datePublished: '2026-08-29',
    dateModified: '2026-10-25',
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
        link: {
          path: '/wiedza/wizytowka-google-dla-przychodni',
          label: 'Wizytówka Google dla przychodni',
          description: 'Kategoria, usługi, zdjęcia i posty krok po kroku.',
        },
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
        link: {
          path: '/uslugi/pozycjonowanie-klinik',
          label: 'Pozycjonowanie kliniki: zakres naszej usługi',
          description: 'Audyt, architektura podstron, treść i raport z pozycji co miesiąc.',
        },
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
    sources: [
      {
        label: 'Google Search Essentials',
        url: 'https://developers.google.com/search/docs/essentials',
        publisher: 'Google Search Central',
      },
      {
        label: 'Jak poprawić pozycję w wynikach lokalnych',
        url: 'https://support.google.com/business/answer/7091',
        publisher: 'Pomoc Google',
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
    dateModified: '2026-09-22',
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
        link: {
          path: '/wiedza/jak-zbierac-opinie-pacjentow',
          label: 'Jak zbierać opinie pacjentów zgodnie z prawem',
          description: 'Moment prośby, jej treść i odpowiadanie na opinie negatywne.',
        },
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
    sources: [
      {
        label: 'Rozporządzenie 2016/679 (RODO), tekst w języku polskim',
        url: 'https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679',
        publisher: 'EUR-Lex',
      },
      {
        label: 'Urząd Ochrony Danych Osobowych',
        url: 'https://uodo.gov.pl/',
        publisher: 'UODO',
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
      'Rynkowe widełki cenowe stron dla przychodni i gabinetów, z czego składa się wycena, koszty utrzymania i miejsca, w których wykonawcy ukrywają koszty.',
    datePublished: '2026-08-29',
    dateModified: '2026-10-25',
    readingMinutes: 7,
    lead:
      'Strona internetowa dla przychodni kosztuje w Polsce od około 3 000 złotych netto za prosty serwis gabinetu do kilkudziesięciu tysięcy za rozbudowany portal placówki wieloodziałowej z własnym systemem rezerwacji. Rozpiętość bierze się z trzech rzeczy: liczby podstron, które ktoś musi zaprojektować i napisać, sposobu umawiania wizyt oraz tego, czy treści powstają od zera, czy placówka dostarcza gotowe. Do ceny wykonania dochodzą koszty stałe: domena, hosting i opieka techniczna. Poniżej rozkładamy rynkowe wyceny na części, żeby dało się porównać oferty, które na pierwszy rzut oka różnią się o połowę.',
    sections: [
      {
        heading: 'Trzy poziomy i rynkowe widełki',
        paragraphs: [
          'Poniższe kwoty to przedziały, które widać w ofertach polskich wykonawców w 2026 roku, nie cennik jednej firmy. Prosta strona gabinetu na gotowym szablonie, do trzech podstron, kosztuje zwykle od 2 500 do 5 000 złotych netto: strona główna, opis usług, cennik, kontakt z mapą i formularz. Wystarcza praktyce jednoosobowej. Termin realizacji to najczęściej 1-2 tygodnie.',
          'Strona z indywidualnym projektem i kilkoma podstronami usług to przedział od 5 000 do 10 000 złotych. Tu pojawia się praca, której nie widać w wycenie: struktura podstron pod wyszukiwarkę, teksty do każdej usługi i akceptacja merytoryczna. Serwis z blogiem i systemem zarządzania treścią mieści się zwykle między 8 000 a 15 000 złotych.',
          'Powyżej tego poziomu wchodzą rezerwacje. Osadzenie gotowego systemu typu Booksy czy Calendly to zwykle kilka tysięcy złotych. Własny system rezerwacji z kalendarzem dostępności, panelem administratora i płatnościami zaczyna się w okolicach kilkunastu tysięcy, a przy wielu lokalizacjach i integracjach z oprogramowaniem gabinetowym cena powstaje dopiero po specyfikacji.',
        ],
        bullets: [
          'strona gabinetu na szablonie, do 3 podstron: ok. 2 500-5 000 zł netto, 1-2 tygodnie',
          'strona z indywidualnym projektem: ok. 5 000-10 000 zł netto, 2-4 tygodnie',
          'serwis z blogiem i CMS: ok. 8 000-15 000 zł netto, 3-6 tygodni',
          'osadzenie gotowego systemu rezerwacji: kilka tysięcy złotych',
          'własny system rezerwacji: od kilkunastu tysięcy złotych',
        ],
      },
      {
        heading: 'Co realnie napędza cenę',
        paragraphs: [
          'Liczba unikalnych układów strony, a nie liczba podstron. Dwadzieścia podstron usług na jednym szablonie to jeden projekt i dwadzieścia wypełnień. Pięć podstron, z których każda wygląda inaczej, to pięć projektów.',
          'Sposób umawiania wizyt jest drugim czynnikiem. Formularz zgłoszenia to kilka godzin pracy. Integracja z systemem gabinetowym przez API to dni albo tygodnie, zależnie od jakości dokumentacji dostawcy - a bywa, że integracja jest niemożliwa i trzeba to sprawdzić przed podpisaniem umowy.',
          'Trzeci czynnik to treść. Napisanie opisów usług medycznych wymaga rozmowy z lekarzem i poprawek po akceptacji. Wykonawca, który wycenia stronę bez pytania o to, kto pisze teksty, prawdopodobnie zakłada, że dostarczy je placówka.',
        ],
        link: {
          path: '/wiedza/czym-jest-marketing-medyczny',
          label: 'Czym jest marketing medyczny',
          description: 'Gdzie strona mieści się w całym budżecie placówki.',
        },
      },
      {
        heading: 'Koszty, które pojawiają się po wdrożeniu',
        paragraphs: [
          'Domena to kilkadziesiąt złotych rocznie i zwykle opłaca ją placówka bezpośrednio. Hosting z certyfikatem SSL, kopiami zapasowymi i monitoringiem dostępności kosztuje od kilkudziesięciu do około dwustu złotych miesięcznie, zależnie od tego, czy serwis potrzebuje bazy danych.',
          'Opieka techniczna to aktualizacje, kontrola działania i drobne poprawki. Rynkowo kosztuje od około 200 złotych miesięcznie za podstawowy pakiet z godziną lub dwiema pracy do ponad tysiąca złotych przy kilku godzinach, priorytetowej obsłudze i raporcie. Przy stronie na systemie CMS aktualizacje są warunkiem bezpieczeństwa: nieaktualizowana instalacja zostaje zwykle przejęta w ciągu kilku miesięcy.',
          'Nowe funkcje i większe zmiany wykonawcy rozliczają najczęściej godzinowo, z estymacją przed rozpoczęciem prac. Pytaj o estymację na piśmie, zanim zlecisz zmianę.',
        ],
        bullets: [
          'domena: kilkadziesiąt złotych rocznie',
          'hosting z SSL, kopiami i monitoringiem: od kilkudziesięciu do ok. 200 zł miesięcznie',
          'opieka techniczna: od ok. 200 zł do ponad 1 000 zł miesięcznie, zależnie od liczby godzin',
          'nowe funkcje i zmiany poza zakresem: rozliczenie godzinowe po estymacji',
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
          'Serwis gabinetu z opisem usług, cennikiem i formularzem kontaktowym kosztuje na rynku zwykle od 2 500 do 5 000 złotych netto przy kilku podstronach na gotowym szablonie, a od 5 000 do 10 000 złotych przy indywidualnym projekcie. Poniżej tych kwot dostaje się najczęściej szablon z podmienionym logo, bez pracy nad strukturą i treścią.',
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
    sources: [
      {
        label: 'Web Vitals: wskaźniki szybkości i stabilności strony',
        url: 'https://web.dev/articles/vitals',
        publisher: 'web.dev, Google',
      },
      {
        label: 'Google Search Essentials',
        url: 'https://developers.google.com/search/docs/essentials',
        publisher: 'Google Search Central',
      },
    ],
    related: [
      {
        path: '/uslugi/strony-internetowe-dla-placowek-medycznych',
        label: 'Strony internetowe dla placówek medycznych',
        description: 'Zakres i harmonogram naszej realizacji, wycena po krótkiej rozmowie.',
      },
      {
        path: '/wiedza/pozycjonowanie-kliniki-krok-po-kroku',
        label: 'Jak samodzielnie wypromować klinikę w Google',
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
    seoTitle: 'Jak zbierać opinie pacjentów w Google: wzór prośby i zasady | mediaso',
    seoDescription:
      'Gotowy wzór prośby o opinię, najlepszy moment wysyłki i odpowiedzi na negatywne opinie bez łamania RODO. Czego Google zabrania placówkom medycznym.',
    datePublished: '2026-08-29',
    dateModified: '2026-10-25',
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
        link: {
          path: '/wiedza/wizytowka-google-dla-przychodni',
          label: 'Wizytówka Google dla przychodni',
          description: 'Profil, w którym te opinie lądują i który decyduje o pozycji w mapach.',
        },
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
    sources: [
      {
        label: 'Treści zabronione i objęte ograniczeniami w Mapach Google',
        url: 'https://support.google.com/contributionpolicy/answer/7400114',
        publisher: 'Pomoc Google',
      },
      {
        label: 'Opinie w Profilu Firmy w Google',
        url: 'https://support.google.com/business/answer/2622994',
        publisher: 'Pomoc Google',
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
      {
        path: '/wiedza/reklama-swiadczen-zdrowotnych-co-wolno',
        label: 'Reklama świadczeń zdrowotnych: co wolno',
        description: 'Opinie to jeden z materiałów, które podlegają zakazowi reklamy świadczeń.',
      },
    ],
  },
];
