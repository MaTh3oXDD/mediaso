import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header" [class.centered]="centered()">
      @if (label()) {
        <span class="label">{{ label() }}</span>
      }
      <h2 [innerHTML]="title()"></h2>
      @if (subtitle()) {
        <p class="subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  label = input<string>('');
  centered = input<boolean>(false);
}
