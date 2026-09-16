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
  summary: string;
  /** Co jest na stronie - krótkie punkty. */
  features: string[];
}

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    name: 'AmiCare Centrum Medyczne',
    url: 'https://amicare.pl',
    domain: 'amicare.pl',
    type: 'Strona internetowa',
    summary:
      'Strona centrum medycznego z Łodzi i Jeleniej Góry: gastroskopia i kolonoskopia, konsultacje specjalistyczne, badania diagnostyczne i badania kliniczne.',
    features: [
      'rezerwacja wizyt',
      'cennik badań i konsultacji',
      'zespół specjalistów',
      'oddziały z adresami i godzinami otwarcia',
      'lista badań klinicznych z ankietami kwalifikującymi',
    ],
  },
];
