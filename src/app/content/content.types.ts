/**
 * Model treści dla stron usługowych i artykułów bazy wiedzy.
 *
 * Treść jest danymi, nie szablonem: jeden komponent renderuje każdą stronę,
 * a routing, sitemapa i JSON-LD czytają z tych samych tablic. Dzięki temu
 * dodanie strony to jeden wpis w pliku, bez ryzyka rozjechania się mapy witryny
 * z konfiguracją routera.
 *
 * Strony usługowe i artykuły są wyłącznie po polsku. Przełącznik PL/EN obsługuje
 * interfejs i strony podstawowe - warstwa merytoryczna celuje w polski SERP.
 */

/**
 * Zdjęcie w treści. Pliki leżą w `public/blog/`, wymiary podajemy jawnie,
 * żeby przeglądarka zarezerwowała miejsce przed wczytaniem (CLS).
 * Źródło i licencję zapisujemy przy zdjęciu, nawet gdy licencja nie wymaga podpisu.
 */
export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  creditUrl: string;
}

/** Blok treści: nagłówek H2, akapity i opcjonalna lista. */
export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Podpis pod listą - używany, gdy lista wymaga domknięcia myśli. */
  note?: string;
  /** Zdjęcie pod treścią sekcji. */
  image?: ContentImage;
}

/** Pytanie i odpowiedź. Odpowiedź pełnym zdaniem - trafia też do FAQPage w JSON-LD. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Odnośnik wewnętrzny z kontekstem, renderowany w sekcji „powiązane". */
export interface RelatedLink {
  path: string;
  label: string;
  description: string;
}

/** Pozycja cennika. Kwoty jako gotowy tekst - widełki i jednostki są różne. */
export interface PriceRow {
  name: string;
  /** Cena końcowa - sprzedawca zwolniony z VAT, więc bez podziału na netto i brutto. */
  price: string;
  /** Cena kolejnych okresów, gdy pierwszy kosztuje inaczej (np. abonament z wdrożeniem). */
  priceNext?: string;
  scope?: string;
  /** Zakres jako lista - dla pakietów z wieloma elementami. */
  features?: string[];
}

/** Grupa pozycji cennika pod wspólnym nagłówkiem, np. „Pakiety stron". */
export interface PriceGroup {
  title: string;
  rows: PriceRow[];
}

export interface ServicePage {
  slug: string;
  /** Etykieta w hubie i w okruszkach. */
  navLabel: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  /**
   * Akapit otwierający, 140-170 słów, samodzielny sensownie.
   * Modele językowe cytują całe akapity - ten ma odpowiadać na pytanie
   * bez kontekstu reszty strony.
   */
  lead: string;
  /** Nazwa usługi w schema.org Service. */
  schemaName: string;
  schemaServiceType: string;
  /** Widełki cenowe, jeśli są jawne. Puste, gdy wycena zawsze indywidualna. */
  priceFrom?: string;
  /** Cennik na dole podstrony. Kwoty z cennika usług, wersja sierpień 2026. */
  pricing?: PriceGroup[];
  sections: ContentSection[];
  faq: FaqItem[];
  related: RelatedLink[];
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  /** ISO 8601. Data pierwszej publikacji. */
  datePublished: string;
  dateModified: string;
  /** Zajawka na hubie i w opisie meta - też 140-170 słów w treści strony. */
  lead: string;
  readingMinutes: number;
  /** Zdjęcie główne: pod nagłówkiem, w og:image i w JSON-LD Article. */
  image?: ContentImage;
  sections: ContentSection[];
  faq: FaqItem[];
  related: RelatedLink[];
}
