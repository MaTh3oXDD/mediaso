### Task 5: Footer Component

**Files:**
- Create: `src/app/layout/footer/footer.component.ts`
- Create: `src/app/layout/footer/footer.component.html`
- Create: `src/app/layout/footer/footer.component.scss`

**Interfaces:**
- Consumes: `TranslationService.tr`
- Produces: `FooterComponent`

- [ ] **Step 1: Create `src/app/layout/footer/footer.component.ts`**

```ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;
}
```

- [ ] **Step 2: Create `src/app/layout/footer/footer.component.html`**

```html
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a routerLink="/" class="logo">
        media<span class="accent">so</span>
      </a>
      <p class="tagline">{{ tr().footer.tagline }}</p>
    </div>

    <div class="footer-col">
      <h4>{{ tr().footer.nav.title }}</h4>
      <ul>
        <li><a routerLink="/">{{ tr().nav.home }}</a></li>
        <li><a routerLink="/uslugi">{{ tr().nav.services }}</a></li>
        <li><a routerLink="/o-nas">{{ tr().nav.about }}</a></li>
        <li><a routerLink="/portfolio">{{ tr().nav.portfolio }}</a></li>
        <li><a routerLink="/kontakt">{{ tr().nav.contact }}</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>{{ tr().footer.services.title }}</h4>
      <ul>
        <li><a routerLink="/uslugi">{{ tr().footer.services.web }}</a></li>
        <li><a routerLink="/uslugi">{{ tr().footer.services.social }}</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>{{ tr().contact.info.title }}</h4>
      <ul>
        <li><a [href]="'mailto:' + tr().contact.info.email">{{ tr().contact.info.email }}</a></li>
        <li><a [href]="'tel:' + tr().contact.info.phone">{{ tr().contact.info.phone }}</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container">
      <p>{{ tr().footer.copyright }}</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 3: Create `src/app/layout/footer/footer.component.scss`**

```scss
@use 'styles/mixins' as *;

.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  padding-top: 4rem;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @include tablet {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }
}

.footer-brand {
  .logo {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -0.02em;

    .accent {
      background: var(--gradient-text);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .tagline {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    color: var(--text-muted);
    max-width: 220px;
    line-height: 1.6;
  }
}

.footer-col {
  h4 {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;

    a {
      font-size: 0.9rem;
      color: var(--text-secondary);
      text-decoration: none;
      transition: color var(--transition);

      &:hover {
        color: var(--accent-secondary);
      }
    }
  }
}

.footer-bottom {
  margin-top: 3rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-subtle);

  p {
    font-size: 0.85rem;
    color: var(--text-muted);
  }
}
```

- [ ] **Step 4: Commit**

```bash
git add src/app/layout/footer/
git commit -m "feat: add Footer component"
```

---

