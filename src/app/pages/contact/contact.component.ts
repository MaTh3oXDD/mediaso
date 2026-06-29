import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
  protected submitted = signal(false);

  protected form = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  protected onSubmit(): void {
    this.submitted.set(true);
  }
}
