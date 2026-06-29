import { Injectable, computed, signal } from '@angular/core';
import { pl } from '../translations/pl';
import { en } from '../translations/en';
import type { Lang, Translations } from '../translations/translations.type';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly _lang = signal<Lang>('pl');
  private readonly _map = { pl, en } as unknown as Record<Lang, Translations>;

  readonly currentLang = computed(() => this._lang());
  readonly tr = computed(() => this._map[this._lang()]);

  setLang(lang: Lang): void {
    this._lang.set(lang);
  }

  toggleLang(): void {
    this._lang.update(l => (l === 'pl' ? 'en' : 'pl'));
  }
}
