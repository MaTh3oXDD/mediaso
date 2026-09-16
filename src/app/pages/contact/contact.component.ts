import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { SITE } from '../../core/seo/site.config';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private ts = inject(TranslationService);

  protected tr = this.ts.tr;
  // tel: nie znosi spacji (RFC 3966) - link dostaje numer bez formatowania.
  protected telHref = `tel:${SITE.phone}`;
}
