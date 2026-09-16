/**
 * Zgłasza adresy z sitemapy do IndexNow (Bing, Seznam, Yandex; Google nie korzysta).
 *
 * Klucz leży w public/<klucz>.txt i musi być dostępny pod https://mediaso.pl/<klucz>.txt -
 * bez tego zgłoszenie zostanie odrzucone. Uruchamiać po wdrożeniu, nie przed:
 *   npm run indexnow
 */
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const HOST = 'mediaso.pl';

const keyFile = readdirSync(resolve(root, 'public')).find(name => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) {
  console.error('Brak pliku klucza IndexNow w public/. Utwórz public/<32 znaki hex>.txt.');
  process.exit(1);
}
const key = keyFile.replace('.txt', '');

const sitemap = readFileSync(resolve(root, 'public/sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList,
  }),
});

console.log(`IndexNow: ${response.status} ${response.statusText}, adresów: ${urlList.length}`);
if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
