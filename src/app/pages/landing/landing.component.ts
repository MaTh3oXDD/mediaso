import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/seo/site.config';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

/**
 * Landing page pod kampanię Google Ads. Jedna ścieżka: przeczytaj, zadzwoń albo wypełnij formularz.
 * Bez nawigacji, bloga i diagnostyki - App chowa pasek i stopkę po `data.landing`.
 * Tylko po polsku, jak strony usług: kampania celuje w polskie wyniki.
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ContactFormComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  protected telHref = `tel:${SITE.phone}`;
  protected phone = SITE.phoneDisplay;
  protected year = new Date().getFullYear();

  protected benefits = [
    {
      title: 'Tylko branża medyczna',
      text: 'Pracujemy wyłącznie z klinikami, przychodniami i gabinetami. Treści piszemy zgodnie z zasadami reklamy usług medycznych i RODO, a publikujemy je po akceptacji osoby merytorycznej z placówki.',
    },
    {
      title: 'Strona, Google i social media w jednych rękach',
      text: 'Pacjent sprawdza wizytówkę w mapach, stronę i profil na Instagramie, zanim zadzwoni. Prowadzimy wszystkie trzy tak, żeby mówiły to samo i prowadziły do jednego telefonu.',
    },
    {
      title: 'Stała kwota za uzgodniony zakres',
      text: 'Wycenę dostajesz po bezpłatnej konsultacji, z zakresem i limitami zapisanymi w umowie. Domena, hosting i kod strony zostają u Ciebie, także po zakończeniu współpracy.',
    },
  ];
}
