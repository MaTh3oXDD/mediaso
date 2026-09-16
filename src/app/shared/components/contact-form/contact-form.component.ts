import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../core/services/translation.service';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

/** Endpoint PHP leżący obok zbudowanej aplikacji (public/api/contact.php). */
const CONTACT_ENDPOINT = '/api/contact.php';

/**
 * Formularz kontaktowy używany na /kontakt i na landing page'u kampanii.
 * Przycisk jest zawsze aktywny - walidacja rusza przy wysyłce i pokazuje,
 * którego pola brakuje, zamiast zostawiać wyszarzony przycisk bez wyjaśnienia.
 */
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  private ts = inject(TranslationService);
  private http = inject(HttpClient);

  /** Skąd przyszło zgłoszenie - trafia do treści maila. */
  source = input('kontakt');

  protected tr = this.ts.tr;
  protected status = signal<SubmitStatus>('idle');
  protected errorMessage = signal('');
  protected submitted = signal(false);

  protected form = this.emptyForm();

  protected onSubmit(contactForm: NgForm): void {
    if (this.status() === 'sending') return;

    this.submitted.set(true);
    if (contactForm.invalid) {
      this.errorMessage.set('');
      return;
    }

    this.status.set('sending');
    this.errorMessage.set('');

    this.http
      .post<{ ok: boolean; error?: string }>(CONTACT_ENDPOINT, {
        ...this.form,
        source: this.source(),
      })
      .subscribe({
        next: response => {
          if (response?.ok) {
            this.status.set('sent');
            this.form = this.emptyForm();
            this.submitted.set(false);
          } else {
            this.failWith(response?.error);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.failWith(err.error?.error, err.status);
        },
      });
  }

  private failWith(code?: string, httpStatus?: number): void {
    const messages = this.tr().contact.form;
    if (code === 'validation' || httpStatus === 422) {
      this.errorMessage.set(messages.errorValidation);
    } else if (code === 'rate_limited' || httpStatus === 429) {
      this.errorMessage.set(messages.errorRateLimited);
    } else {
      this.errorMessage.set(messages.errorGeneric);
    }
    this.status.set('error');
  }

  private emptyForm() {
    return { name: '', email: '', company: '', service: '', message: '', consent: false };
  }
}
