import { DOCUMENT, Component, HostListener, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslationService } from '../../core/services/translation.service';
import { SITE } from '../../core/seo/site.config';

/** Powyzej tej szerokosci menu mobilne nie istnieje - patrz mixin `desktop`. */
const DESKTOP_BREAKPOINT = 1024;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private ts = inject(TranslationService);
  private doc = inject(DOCUMENT);
  private router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected tr = this.ts.tr;
  protected currentLang = this.ts.currentLang;
  protected telHref = `tel:${SITE.phone}`;
  protected menuOpen = signal(false);
  protected scrolled = signal(false);

  constructor() {
    // Cofniecie strzalka przegladarki omija (click)="closeMenu()" na odnosnikach,
    // wiec bez tego blokada przewijania zostawalaby wlaczona na stale.
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  // Obrot telefonu albo powiekszenie okna chowa menu mobilne stylami,
  // ale sam stan i blokada przewijania nie znikaja same.
  @HostListener('window:resize')
  onResize(): void {
    if (this.menuOpen() && window.innerWidth >= DESKTOP_BREAKPOINT) {
      this.closeMenu();
    }
  }

  // Escape zamyka menu - inaczej na klawiaturze nie ma z niego wyjscia.
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update(v => !v);
    this.lockScroll(this.menuOpen());
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.lockScroll(false);
  }

  /**
   * Tlo pod otwartym menu nie moze sie przewijac razem z nim.
   * Klasa na body chowa tez plywajacy przycisk kontaktu, ktory inaczej
   * lezy na menu.
   */
  private lockScroll(locked: boolean): void {
    if (!this.isBrowser) return;

    this.doc.body.style.overflow = locked ? 'hidden' : '';
    this.doc.body.classList.toggle('menu-open', locked);
  }

  protected toggleLang(): void {
    this.ts.toggleLang();
  }
}
