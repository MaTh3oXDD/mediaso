# Task 2 Report: Translation Service

**Status:** DONE

## Commits Created

- `287300c` feat: add TranslationService with PL/EN signal-based switching

## Test Summary

5 specs, 0 failures (all passing)

## Files Created

- `src/app/core/translations/pl.ts` — Polish translations object with `as const`
- `src/app/core/translations/en.ts` — English translations object with `as const`
- `src/app/core/translations/translations.type.ts` — `Translations = typeof pl`, `Lang = 'pl' | 'en'`
- `src/app/core/services/translation.service.ts` — signal-based service
- `src/app/core/services/translation.service.spec.ts` — 5 tests covering default lang, PL/EN switching, toggle, reactivity

## Concerns

One minor deviation from the brief: `_map` needed a double cast (`as unknown as Record<Lang, Translations>`) instead of the single `as Record<Lang, Translations>` shown in the brief. This is because TypeScript (correctly) rejects the single cast when both objects use `as const` — the literal string types of `en` are incompatible with the `typeof pl` Translations type. The double cast is the standard TypeScript pattern for this situation and does not affect runtime behavior. All 5 tests pass and the service is fully type-safe for consumers.
