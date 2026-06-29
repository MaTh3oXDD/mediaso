import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('should default to Polish', () => {
    expect(service.currentLang()).toBe('pl');
  });

  it('should return Polish translations by default', () => {
    expect(service.tr().nav.home).toBe('Strona główna');
  });

  it('should switch to English', () => {
    service.setLang('en');
    expect(service.currentLang()).toBe('en');
    expect(service.tr().nav.home).toBe('Home');
  });

  it('should toggle language', () => {
    expect(service.currentLang()).toBe('pl');
    service.toggleLang();
    expect(service.currentLang()).toBe('en');
    service.toggleLang();
    expect(service.currentLang()).toBe('pl');
  });

  it('should return updated translations reactively after lang change', () => {
    expect(service.tr().home.cta.button).toBe('Zacznijmy współpracę');
    service.setLang('en');
    expect(service.tr().home.cta.button).toBe("Let's work together");
  });
});
