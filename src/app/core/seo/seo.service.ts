import { DOCUMENT, Injectable, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../services/translation.service';
import { SITE, SeoPageKey, absoluteUrl } from './site.config';

const OG_LOCALE: Record<string, string> = { pl: 'pl_PL', en: 'en_GB' };
const LD_SCRIPT_ID = 'ld-json-page';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly ts = inject(TranslationService);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.apply());

    // Przełączenie języka zmienia tytuł, opis i og:locale bez nawigacji.
    effect(() => {
      this.ts.currentLang();
      this.apply();
    });
  }

  private apply(): void {
    const lang = this.ts.currentLang();
    const seo = this.ts.tr().seo;
    const key = this.currentPageKey();
    const page = seo[key];
    const path = this.currentPath();
    const canonical = absoluteUrl(path);
    const image = absoluteUrl(SITE.ogImagePath);

    this.doc.documentElement.lang = lang;
    this.titleService.setTitle(page.title);

    this.setName('description', page.description);
    // Trasy oznaczone noindex maja zostac poza wynikami wyszukiwania,
    // ale linki z nich nadal maja byc sledzone.
    this.setName(
      'robots',
      this.currentNoindex()
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    this.setName('theme-color', SITE.themeColor);

    this.setProperty('og:type', key === 'home' ? 'website' : 'article');
    this.setProperty('og:site_name', SITE.name);
    this.setProperty('og:title', page.title);
    this.setProperty('og:description', page.description);
    this.setProperty('og:url', canonical);
    this.setProperty('og:image', image);
    this.setProperty('og:image:width', SITE.ogImageWidth);
    this.setProperty('og:image:height', SITE.ogImageHeight);
    this.setProperty('og:locale', OG_LOCALE[lang] ?? 'pl_PL');

    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', page.title);
    this.setName('twitter:description', page.description);
    this.setName('twitter:image', image);

    this.setCanonical(canonical);
    this.setStructuredData(key, page.title, page.description, canonical, path);
  }

  private currentPageKey(): SeoPageKey {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return (route.data['seo'] as SeoPageKey) ?? 'home';
  }

  private currentNoindex(): boolean {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data['noindex'] === true;
  }

  private currentPath(): string {
    const path = this.router.url.split('#')[0].split('?')[0];
    return path === '/' ? '/' : path.replace(/\/+$/, '');
  }

  private setName(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setCanonical(href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setStructuredData(
    key: SeoPageKey,
    title: string,
    description: string,
    canonical: string,
    path: string
  ): void {
    const graph: Record<string, unknown>[] = [
      {
        '@type': key === 'contact' ? 'ContactPage' : 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { '@id': `${SITE.origin}/#website` },
        inLanguage: this.ts.currentLang() === 'pl' ? 'pl-PL' : 'en-GB',
        publisher: { '@id': `${SITE.origin}/#organization` },
      },
    ];

    if (path !== '/') {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE.name, item: `${SITE.origin}/` },
          { '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: canonical },
        ],
      });
    }

    const payload = { '@context': 'https://schema.org', '@graph': graph };

    let script = this.doc.getElementById(LD_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = LD_SCRIPT_ID;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(payload);
  }
}
