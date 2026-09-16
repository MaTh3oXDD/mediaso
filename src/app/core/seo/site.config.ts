/**
 * Stałe dane witryny używane w meta tagach, canonicalach, sitemapie i JSON-LD.
 * Zmiana domeny wymaga też podmiany URL-i w public/sitemap.xml i public/robots.txt.
 */
export const SITE = {
  origin: 'https://mediaso.pl',
  name: 'mediaso',
  email: 'kontakt@mediaso.pl',
  phone: '+48504103154',
  phoneDisplay: '+48 504 103 154',
  logoPath: '/MediasoLogo.svg',
  // Google nie akceptuje SVG w Organization.logo - potrzebny raster.
  logoRasterPath: '/logo-mediaso.png',
  ogImagePath: '/og-image.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  themeColor: '#0b1220',
  areaServed: 'PL',
  sameAs: [] as string[],
} as const;

export type SeoPageKey =
  | 'home'
  | 'services'
  | 'about'
  | 'portfolio'
  | 'contact'
  | 'assessment'
  | 'privacy'
  | 'knowledge'
  | 'landing'
  // Tytuł i opis tych dwóch bierzemy z danych treści, nie z tłumaczeń.
  | 'serviceDetail'
  | 'articleDetail';

export const absoluteUrl = (path: string): string =>
  `${SITE.origin}${path.startsWith('/') ? path : `/${path}`}`;
