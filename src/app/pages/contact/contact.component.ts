import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

/** Endpoint PHP leżący obok zbudowanej aplikacji (public/api/contact.php). */
const CONTACT_ENDPOINT = '/api/contact.php';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private ts = inject(TranslationService);
  private http = inject(HttpClient);

  protected tr = this.ts.tr;
  protected status = signal<SubmitStatus>('idle');
  protected errorMessage = signal('');

  protected form = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  protected onSubmit(): void {
    if (this.status() === 'sending') return;

    this.status.set('sending');
    this.errorMessage.set('');

    this.http
      .post<{ ok: boolean; error?: string }>(CONTACT_ENDPOINT, {
        name: this.form.name,
        email: this.form.email,
        company: this.form.company,
        message: this.form.message,
      })
      .subscribe({
        next: response => {
          if (response?.ok) {
            this.status.set('sent');
            this.resetForm();
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

  private resetForm(): void {
    this.form = { name: '', email: '', company: '', message: '' };
  }
}
