/**
 * Realizacje pokazywane w portfolio i na stronie głównej.
 * Opis trzyma się tego, co widać na stronie klienta - bez wyników, których nie mamy na piśmie.
 */
export interface PortfolioProject {
  name: string;
  url: string;
  /** Domena bez protokołu, do wyświetlenia na karcie. */
  domain: string;
  type: string;
  /** Zrzut ekranu strony klienta, ścieżka względem public/. */
  image: string;
  summary: string;
  /** Co jest na stronie - krótkie punkty. */
  features: string[];
}

/** Profil w social mediach, który prowadzimy dla klienta. */
export interface SocialProject {
  name: string;
  platform: 'Facebook' | 'Instagram';
  url: string;
  /** Nazwa profilu do wyświetlenia na karcie. */
  handle: string;
  /** Zrzut ekranu profilu, ścieżka względem public/. */
  image: string;
  /** Data startu współpracy, do wyświetlenia. */
  since: string;
  summary: string;
}

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    name: 'AmiCare Centrum Medyczne',
    url: 'https://amicare.pl',
    domain: 'amicare.pl',
    type: 'Strona internetowa',
    image: 'portfolio/amicare.webp',
    summary:
      'Zrobiliśmy stronę centrum medycznego z Łodzi i Jeleniej Góry: gastroskopia i kolonoskopia, konsultacje specjalistyczne, badania diagnostyczne i badania kliniczne.',
    features: [
      'rezerwacja wizyt',
      'cennik badań i konsultacji',
      'zespół specjalistów',
      'oddziały z adresami i godzinami otwarcia',
      'lista badań klinicznych z ankietami kwalifikującymi',
    ],
  },
];

export const SOCIAL_PROJECTS: readonly SocialProject[] = [
  {
    name: 'AmiCare Centrum Medyczne',
    platform: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100063902769454',
    handle: 'AmiCare Centrum Medyczne',
    image: 'portfolio/amicare-facebook.webp',
    since: '01.09.2026',
    summary: 'Od 1 września 2026 prowadzimy fanpage AmiCare na Facebooku.',
  },
  {
    name: 'AmiCare Centrum Medyczne',
    platform: 'Instagram',
    url: 'https://www.instagram.com/amicare.centrum.medyczne/',
    handle: '@amicare.centrum.medyczne',
    image: 'portfolio/amicare-instagram.webp',
    since: '01.09.2026',
    summary: 'Od 1 września 2026 prowadzimy profil AmiCare na Instagramie.',
  },
];
