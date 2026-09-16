/**
 * Generuje public/sitemap.xml na podstawie tras aplikacji i danych treści.
 *
 * Ręcznie pisana sitemapa rozjeżdża się z routerem przy pierwszej nowej podstronie,
 * a wszystkie adresy dostają jedną, nieaktualną datę `lastmod`. Ten skrypt czyta
 * slugi z plików treści i daty modyfikacji z systemu plików, więc mapa witryny
 * zawsze odpowiada temu, co faktycznie jest zbudowane.
 *
 * Uruchamiany automatycznie przed `ng build` (skrypt `prebuild` w package.json).
 */
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const ORIGIN = 'https://mediaso.pl';

const read = path => readFileSync(resolve(root, path), 'utf8');
const slugsOf = source => [...source.matchAll(/^\s{4}slug: '([a-z0-9-]+)',$/gm)].map(m => m[1]);

const servicesSource = read('src/app/content/services.data.ts');
const articlesSource = read('src/app/content/articles.data.ts');

/** Data ostatniej modyfikacji pliku źródłowego w formacie YYYY-MM-DD. */
const modifiedOf = path => statSync(resolve(root, path)).mtime.toISOString().slice(0, 10);

const today = new Date().toISOString().slice(0, 10);
const servicesModified = modifiedOf('src/app/content/services.data.ts');
const articlesModified = modifiedOf('src/app/content/articles.data.ts');

// dateModified z danych artykułu ma pierwszeństwo przed datą pliku.
const articleDates = Object.fromEntries(
  [...articlesSource.matchAll(/slug: '([a-z0-9-]+)',[\s\S]*?dateModified: '(\d{4}-\d{2}-\d{2})'/g)].map(
    m => [m[1], m[2]]
  )
);

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'monthly', lastmod: today },
  { path: '/uslugi', priority: '0.9', changefreq: 'monthly', lastmod: servicesModified },
  { path: '/wiedza', priority: '0.8', changefreq: 'weekly', lastmod: articlesModified },
  { path: '/o-nas', priority: '0.6', changefreq: 'yearly', lastmod: today },
  { path: '/kontakt', priority: '0.7', changefreq: 'yearly', lastmod: today },
  { path: '/diagnostyka', priority: '0.8', changefreq: 'monthly', lastmod: today },
];

const urls = [
  ...staticPages,
  ...slugsOf(servicesSource).map(slug => ({
    path: `/uslugi/${slug}`,
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: servicesModified,
  })),
  ...slugsOf(articlesSource).map(slug => ({
    path: `/wiedza/${slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: articleDates[slug] ?? articlesModified,
  })),
];

const body = urls
  .map(
    url => `  <url>
    <loc>${ORIGIN}${url.path}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml: ${urls.length} adresów`);
