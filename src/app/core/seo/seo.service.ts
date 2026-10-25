import { DOCUMENT, Injectable, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../services/translation.service';
import { SITE, SeoPageKey, absoluteUrl } from './site.config';
import { findArticle, findService } from '../../content/content.registry';
import type { FaqItem } from '../../content/content.types';

const OG_LOCALE: Record<string, string> = { pl: 'pl_PL', en: 'en_GB' };
const LD_SCRIPT_ID = 'ld-json-page';

/** Tytuł i opis strony - z tłumaczeń albo z danych treści. */
interface PageMeta {
  title: string;
  description: string;
}

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
    const key = this.currentPageKey();
    const slug = this.currentSlug();
    const page = this.pageMeta(key, slug);
    const path = this.currentPath();
    const canonical = absoluteUrl(path);
    const articleImage = key === 'articleDetail' ? findArticle(slug)?.image : undefined;
    const image = absoluteUrl(articleImage?.src ?? SITE.ogImagePath);

    // Strony usługowe i artykuły istnieją wyłącznie po polsku - deklarujemy to
    // niezależnie od przełącznika języka, żeby nie kłamać w atrybucie lang.
    const contentLang = key === 'serviceDetail' || key === 'articleDetail' ? 'pl' : lang;

    this.doc.documentElement.lang = contentLang;
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
    this.setProperty('og:image:width', String(articleImage?.width ?? SITE.ogImageWidth));
    this.setProperty('og:image:height', String(articleImage?.height ?? SITE.ogImageHeight));
    this.setProperty('og:image:alt', articleImage?.alt ?? page.title);
    this.setProperty('og:locale', OG_LOCALE[contentLang] ?? 'pl_PL');

    this.setName('twitter:card', 'summary_large_image');
    this.setName('twitter:title', page.title);
    this.setName('twitter:description', page.description);
    this.setName('twitter:image', image);

    this.setCanonical(canonical);
    this.setStructuredData(key, slug, page, canonical, path, contentLang);
  }

  private pageMeta(key: SeoPageKey, slug?: string): PageMeta {
    if (key === 'serviceDetail') {
      const service = findService(slug);
      if (service) {
        return { title: service.seoTitle, description: service.seoDescription };
      }
    }

    if (key === 'articleDetail') {
      const article = findArticle(slug);
      if (article) {
        return { title: article.seoTitle, description: article.seoDescription };
      }
    }

    const seo = this.ts.tr().seo;
    const entry = seo[key as keyof typeof seo];
    return entry ?? seo.home;
  }

  private routeData(): Record<string, unknown> {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data;
  }

  private currentPageKey(): SeoPageKey {
    return (this.routeData()['seo'] as SeoPageKey) ?? 'home';
  }

  private currentSlug(): string | undefined {
    return this.routeData()['slug'] as string | undefined;
  }

  private currentNoindex(): boolean {
    return this.routeData()['noindex'] === true;
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
    slug: string | undefined,
    page: PageMeta,
    canonical: string,
    path: string,
    lang: string
  ): void {
    const inLanguage = lang === 'pl' ? 'pl-PL' : 'en-GB';
    const graph: Record<string, unknown>[] = [
      {
        '@type': key === 'contact' ? 'ContactPage' : 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${SITE.origin}/#website` },
        inLanguage,
        publisher: { '@id': `${SITE.origin}/#organization` },
      },
    ];

    const crumbs = this.breadcrumbTrail(key, slug, page.title, canonical, path);
    if (crumbs.length > 1) {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      });
    }

    if (key === 'serviceDetail') {
      const service = findService(slug);
      if (service) {
        graph.push({
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: service.schemaName,
          serviceType: service.schemaServiceType,
          description: service.seoDescription,
          url: canonical,
          provider: { '@id': `${SITE.origin}/#organization` },
          areaServed: { '@type': 'Country', name: 'Polska' },
        });
        this.pushFaq(graph, canonical, service.faq);
      }
    }

    if (key === 'articleDetail') {
      const article = findArticle(slug);
      if (article) {
        graph.push({
          '@type': 'Article',
          '@id': `${canonical}#article`,
          headline: article.h1,
          description: article.seoDescription,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          inLanguage: 'pl-PL',
          mainEntityOfPage: { '@id': `${canonical}#webpage` },
          author: { '@id': `${SITE.origin}/#organization` },
          publisher: { '@id': `${SITE.origin}/#organization` },
          image: article.image
            ? {
                '@type': 'ImageObject',
                url: absoluteUrl(article.image.src),
                width: article.image.width,
                height: article.image.height,
                caption: article.image.alt,
              }
            : absoluteUrl(SITE.ogImagePath),
        });
        this.pushFaq(graph, canonical, article.faq);
      }
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

  private pushFaq(
    graph: Record<string, unknown>[],
    canonical: string,
    faq: readonly FaqItem[]
  ): void {
    if (!faq.length) return;
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  /** Okruszki: strona główna, ewentualny hub i strona bieżąca. */
  private breadcrumbTrail(
    key: SeoPageKey,
    slug: string | undefined,
    title: string,
    canonical: string,
    path: string
  ): { name: string; item: string }[] {
    const trail: { name: string; item: string }[] = [{ name: SITE.name, item: `${SITE.origin}/` }];
    if (path === '/') return trail;

    if (key === 'serviceDetail') {
      trail.push({ name: 'Usługi', item: absoluteUrl('/uslugi') });
      const service = findService(slug);
      trail.push({ name: service?.navLabel ?? title, item: canonical });
      return trail;
    }

    if (key === 'articleDetail') {
      trail.push({ name: 'Wiedza', item: absoluteUrl('/wiedza') });
      const article = findArticle(slug);
      trail.push({ name: article?.title ?? title, item: canonical });
      return trail;
    }

    trail.push({ name: title.split('|')[0].trim(), item: canonical });
    return trail;
  }
}
