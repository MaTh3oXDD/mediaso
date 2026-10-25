import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { TranslationService } from '../../core/services/translation.service';
import { ARTICLES, articlePath } from '../../content/content.registry';
import { PORTFOLIO_PROJECTS, SOCIAL_PROJECTS } from '../../content/portfolio.data';
import { SITE } from '../../core/seo/site.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private ts = inject(TranslationService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  protected tr = this.ts.tr;

  // Trzy najświeższe teksty z bazy wiedzy - strona główna ma linkować w głąb serwisu.
  protected previewArticles = ARTICLES.slice(0, 3);
  protected projects = PORTFOLIO_PROJECTS;
  protected socialProfiles = SOCIAL_PROJECTS;
  protected telHref = `tel:${SITE.phone}`;
  protected articlePath = articlePath;

  @ViewChild('heroSection') private heroSectionRef?: ElementRef<HTMLElement>;
  @ViewChild('heroBg') private heroBgRef?: ElementRef<HTMLElement>;

  // Na serwerze (prerender) tresc ma byc od razu widoczna dla botow i trybu bez JS.
  protected heroReady = signal(!this.isBrowser);

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private rafId?: number;
  private readonly onMouseMove = (e: MouseEvent) => {
    const hero = this.heroSectionRef?.nativeElement;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    this.targetX = ((e.clientX - cx) / (rect.width / 2)) * 20;
    this.targetY = ((e.clientY - cy) / (rect.height / 2)) * 20;
  };

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    requestAnimationFrame(() => this.heroReady.set(true));

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    window.addEventListener('mousemove', this.onMouseMove);
    const tick = () => {
      this.currentX += (this.targetX - this.currentX) * 0.06;
      this.currentY += (this.targetY - this.currentY) * 0.06;
      const bg = this.heroBgRef?.nativeElement;
      if (bg) {
        gsap.set(bg, { x: this.currentX, y: this.currentY });
      }
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;

    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
