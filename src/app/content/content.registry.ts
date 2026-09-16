import { ARTICLES } from './articles.data';
import { SERVICE_PAGES } from './services.data';
import type { Article, ServicePage } from './content.types';

/** Prefiksy adresów. Zmiana wymaga też poprawki w app.routes.ts i w sitemapie. */
export const SERVICES_BASE = '/uslugi';
export const KNOWLEDGE_BASE = '/wiedza';

export const servicePath = (slug: string): string => `${SERVICES_BASE}/${slug}`;
export const articlePath = (slug: string): string => `${KNOWLEDGE_BASE}/${slug}`;

export const findService = (slug: string | undefined): ServicePage | undefined =>
  SERVICE_PAGES.find(page => page.slug === slug);

export const findArticle = (slug: string | undefined): Article | undefined =>
  ARTICLES.find(article => article.slug === slug);

/**
 * Wszystkie indeksowane adresy witryny w jednym miejscu.
 * Czyta to generator sitemapy (scripts/generate-sitemap.mjs), żeby mapa witryny
 * nie rozjeżdżała się z routerem przy dodawaniu kolejnych stron.
 */
export const INDEXABLE_PATHS: readonly string[] = [
  '/',
  '/uslugi',
  '/o-nas',
  '/kontakt',
  '/diagnostyka',
  KNOWLEDGE_BASE,
  ...SERVICE_PAGES.map(page => servicePath(page.slug)),
  ...ARTICLES.map(article => articlePath(article.slug)),
];

export { ARTICLES, SERVICE_PAGES };
