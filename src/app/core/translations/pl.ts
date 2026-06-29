export const pl = {
  nav: {
    home: 'Strona główna',
    services: 'Usługi',
    about: 'O nas',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
  },
  home: {
    hero: {
      title: 'Twoja przychodnia zasługuje na więcej',
      subtitle: 'Tworzymy strony internetowe i prowadzimy social media dla placówek medycznych. Pomożemy Twojej placówce pozyskać nowych pacjentów.',
      cta1: 'Zobacz usługi',
      cta2: 'Skontaktuj się',
    },
    why: {
      title: 'Dlaczego mediaso?',
      items: [
        { icon: '🏥', title: 'Specjalizacja w healthcare', desc: 'Znamy specyfikę branży medycznej i wiemy, czego szukają pacjenci online.' },
        { icon: '📊', title: 'Kompleksowe podejście', desc: 'Strona + social media = spójny, profesjonalny wizerunek Twojej placówki.' },
        { icon: '📈', title: 'Mierzalne efekty', desc: 'Raportujemy wyniki. Zawsze wiesz, co robią Twoje pieniądze.' },
      ],
    },
    servicesPreview: {
      title: 'Nasze usługi',
      web: {
        title: 'Strony Internetowe',
        desc: 'Nowoczesne, szybkie strony dla przychodni. Responsywne, SEO-friendly, z systemem zarządzania treścią.',
        link: 'Dowiedz się więcej',
      },
      social: {
        title: 'Social Media',
        desc: 'Prowadzimy i odbudowujemy profile Twojej placówki na Facebooku, Instagramie i Google.',
        link: 'Dowiedz się więcej',
      },
    },
    stats: {
      clients: { value: '40+', label: 'Klientów' },
      projects: { value: '80+', label: 'Projektów' },
      years: { value: '5+', label: 'Lat doświadczenia' },
    },
    cta: {
      title: 'Gotowy na zmianę?',
      subtitle: 'Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej placówce.',
      button: 'Zacznijmy współpracę',
    },
  },
  services: {
    hero: {
      title: 'Nasze Usługi',
      subtitle: 'Kompleksowe rozwiązania cyfrowe dla placówek medycznych',
    },
    web: {
      title: 'Strony Internetowe',
      subtitle: 'Profesjonalna strona to wizytówka Twojej przychodni w internecie.',
      features: [
        'Indywidualny projekt graficzny',
        'Responsywność na każdym urządzeniu',
        'Optymalizacja SEO',
        'System zarządzania treścią (CMS)',
        'Szybki czas ładowania',
        'Integracja z Google Maps i kalendarzem',
        'Certyfikat SSL',
        'Obsługa techniczna i aktualizacje',
      ],
    },
    social: {
      title: 'Social Media',
      subtitle: 'Zbuduj obecność w mediach społecznościowych i pozyskaj nowych pacjentów.',
      features: [
        'Audyt obecnych profili',
        'Opracowanie strategii contentu',
        'Tworzenie treści i grafik',
        'Prowadzenie profili Facebook i Instagram',
        'Zarządzanie Google My Business',
        'Raportowanie miesięczne',
        'Obsługa komentarzy i wiadomości',
        'Kampanie reklamowe Meta Ads',
      ],
    },
    process: {
      title: 'Jak pracujemy',
      steps: [
        { num: '01', title: 'Analiza', desc: 'Poznajemy Twoją placówkę, konkurencję i grupę docelową.' },
        { num: '02', title: 'Strategia', desc: 'Opracowujemy plan działań dopasowany do Twoich celów.' },
        { num: '03', title: 'Realizacja', desc: 'Wdrażamy uzgodnione rozwiązania w terminie i budżecie.' },
        { num: '04', title: 'Optymalizacja', desc: 'Monitorujemy efekty i stale poprawiamy wyniki.' },
      ],
    },
    cta: { title: 'Zacznijmy razem', button: 'Skontaktuj się' },
  },
  about: {
    hero: {
      title: 'O nas',
      subtitle: 'Znamy branżę medyczną od środka',
    },
    mission: {
      title: 'Nasza misja',
      text: 'mediaso to agencja cyfrowa stworzona z myślą o placówkach medycznych. Wiemy, że lekarze i zarządzający przychodniami mają ważniejsze rzeczy na głowie niż marketing. Dlatego bierzemy to na siebie — kompleksowo, rzetelnie i z mierzalnymi efektami.',
    },
    values: {
      title: 'Nasze wartości',
      items: [
        { icon: '🎯', title: 'Specjalizacja', desc: 'Skupiamy się wyłącznie na branży medycznej. To nasza przewaga.' },
        { icon: '🤝', title: 'Partnerstwo', desc: 'Traktujemy klientów jak partnerów, nie jak numery na fakturze.' },
        { icon: '📋', title: 'Rzetelność', desc: 'Dotrzymujemy terminów i obietnic. Zawsze.' },
        { icon: '📈', title: 'Efekty', desc: 'Liczy się wynik, nie estetyka raportów.' },
      ],
    },
    team: {
      title: 'Nasz zespół',
      members: [
        { name: 'Anna Kowalska', role: 'CEO & Web Strategist' },
        { name: 'Piotr Nowak', role: 'Social Media Manager' },
        { name: 'Marta Wiśniewska', role: 'Graphic Designer' },
        { name: 'Tomasz Zając', role: 'SEO Specialist' },
      ],
    },
  },
  portfolio: {
    hero: {
      title: 'Portfolio',
      subtitle: 'Nasze realizacje w branży medycznej',
    },
    filters: { all: 'Wszystkie', web: 'Strony WWW', social: 'Social Media' },
    projects: [
      { title: 'Przychodnia Zdrowie Wrocław', tags: ['web', 'social'] as ('web'|'social')[], result: '+180% ruch organiczny', desc: 'Nowa strona + prowadzenie social media przez 12 miesięcy.' },
      { title: 'Centrum Medyczne Vita Kraków', tags: ['web'] as ('web'|'social')[], result: '+220% konwersji', desc: 'Strona z systemem zapisów online i CMS.' },
      { title: 'Gabinet Stomatologiczny SmileUp', tags: ['social'] as ('web'|'social')[], result: '+350% zasięg', desc: 'Odbudowa profili i kampanie reklamowe na Meta.' },
      { title: 'Poradnia Kardiologiczna Gdańsk', tags: ['web', 'social'] as ('web'|'social')[], result: '2x więcej pacjentów', desc: 'Pełna obecność cyfrowa od zera.' },
      { title: 'Klinika Ortopedyczna Warszawa', tags: ['web'] as ('web'|'social')[], result: 'Top 3 Google', desc: 'Strona zoptymalizowana pod frazy lokalne.' },
      { title: 'Centrum Rehabilitacji Łódź', tags: ['social'] as ('web'|'social')[], result: '+500 obserwujących/mies.', desc: 'Strategia contentu i prowadzenie Instagrama.' },
    ],
  },
  contact: {
    hero: {
      title: 'Kontakt',
      subtitle: 'Porozmawiajmy o Twojej placówce',
    },
    form: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      company: 'Nazwa placówki / firmy',
      message: 'Wiadomość',
      send: 'Wyślij wiadomość',
      success: 'Wiadomość wysłana! Odezwiemy się w ciągu 24 godzin.',
    },
    info: {
      title: 'Dane kontaktowe',
      email: 'kontakt@mediaso.pl',
      phone: '+48 500 000 000',
      location: 'Polska — pracujemy zdalnie z całym krajem',
    },
  },
  footer: {
    tagline: 'Marketing cyfrowy dla placówek medycznych.',
    nav: { title: 'Nawigacja' },
    services: { title: 'Usługi', web: 'Strony Internetowe', social: 'Social Media' },
    copyright: '© 2026 mediaso. Wszystkie prawa zastrzeżone.',
  },
} as const;
