### Task 3: Section Header Shared Component

**Files:**
- Create: `src/app/shared/components/section-header/section-header.component.ts`
- Create: `src/app/shared/components/section-header/section-header.component.scss`

**Interfaces:**
- Produces: `SectionHeaderComponent` — inputs: `title: string` (required), `subtitle?: string`, `label?: string`, `centered?: boolean`

- [ ] **Step 1: Create `src/app/shared/components/section-header/section-header.component.ts`**

```ts
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
```

- [ ] **Step 2: Create `src/app/shared/components/section-header/section-header.component.scss`**

```scss
@use 'styles/mixins' as *;

.section-header {
  max-width: 640px;
  margin-bottom: 3rem;

  &.centered {
    margin: 0 auto 3rem;
    text-align: center;
  }
}

.label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent-secondary);
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid var(--border);
  border-radius: 999px;
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.7;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/app/shared/
git commit -m "feat: add SectionHeaderComponent"
```

---

