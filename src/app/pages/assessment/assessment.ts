import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';

interface Question {
  id: string;
  category: string;
  text: string;
}

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './assessment.html',
  styleUrl: './assessment.scss',
})
export class Assessment {
  private ts = inject(TranslationService);
  protected tr = this.ts.tr;

  minimalQuestions: Question[] = [
    { id: 'GS-002', category: 'Strategia', text: 'Czy strategia zawiera konkretne cele liczbowe, np. przychód, liczba pacjentów?' },
    { id: 'GS-004', category: 'Strategia', text: 'Czy właściciel regularnie analizuje wyniki co najmniej raz w miesiącu?' },
    { id: 'GS-009', category: 'Pozyskiwanie', text: 'Czy placówka wie, z jakich kanałów pochodzą nowi pacjenci?' },
    { id: 'GS-010', category: 'Pozyskiwanie', text: 'Czy mierzy się koszt pozyskania pacjenta?' },
    { id: 'GS-018', category: 'Rejestracja', text: 'Czy rozmowy rejestracji mają ustalony standard obsługi?' },
    { id: 'GS-024', category: 'Rejestracja', text: 'Czy mierzy się konwersję kontaktów na wizyty?' },
    { id: 'GS-026', category: 'Strona', text: 'Czy pacjent może łatwo umówić wizytę przez stronę?' },
    { id: 'GS-027', category: 'Strona', text: 'Czy strona działa na telefonie?' },
    { id: 'GS-035', category: 'Marketing', text: 'Czy Google Ads/Meta mają mierzone konwersje?' },
    { id: 'GS-041', category: 'Rentowność', text: 'Czy zna się rentowność poszczególnych usług?' },
    { id: 'GS-050', category: 'KPI', text: 'Czy istnieje miesięczny raport zarządczy?' },
    { id: 'GS-051', category: 'KPI', text: 'Czy raport zawiera liczbę pacjentów, przychód i koszty?' },
    { id: 'GS-052', category: 'KPI', text: 'Czy mierzy się wykorzystanie gabinetów?' },
    { id: 'GS-057', category: 'Automatyzacja', text: 'Czy używa się automatycznych SMS/e-maili?' },
    { id: 'GS-065', category: 'Opinie', text: 'Czy aktywnie pozyskuje się opinie pacjentów?' },
    { id: 'GS-066', category: 'Opinie', text: 'Czy średnia ocena Google wynosi co najmniej 4,6?' },
    { id: 'GS-073', category: 'Skalowalność', text: 'Czy istnieją spisane procedury procesów?' },
    { id: 'GS-075', category: 'Skalowalność', text: 'Czy właściciel może delegować zadania?' },
    { id: 'GS-076', category: 'Skalowalność', text: 'Czy placówka jest przygotowana na wzrost pacjentów?' },
    { id: 'GS-080', category: 'Skalowalność', text: 'Czy istnieje model zarządzania odpowiedzialnościami?' },
  ];

  isAdvanced = signal(false);
  responses = signal<{ [key: string]: number }>({});
  email = signal('');
  showResult = signal(false);
  result = signal(0);
  resultStatus = signal('');

  toggleMode(advanced: boolean) {
    this.isAdvanced.set(advanced);
    this.responses.set({});
    this.email.set('');
    this.showResult.set(false);
  }

  setResponse(questionId: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const current = this.responses();
    this.responses.set({ ...current, [questionId]: +value });
  }

  calculateResult() {
    if (!this.email().trim()) {
      alert('Proszę podać adres e-mail');
      return;
    }

    const questions = this.minimalQuestions;
    const responses = this.responses();

    if (Object.keys(responses).length < questions.length) {
      alert('Proszę odpowiedzieć na wszystkie pytania');
      return;
    }

    const avgScore = Object.values(responses).reduce((a, b) => a + b, 0) / Object.keys(responses).length;
    const percentage = Math.round((avgScore / 5) * 100);
    const improvementPercent = 100 - percentage;

    this.result.set(percentage);
    this.resultStatus.set(this.getStatusLabel(percentage));
    this.showResult.set(true);

    console.log('Email:', this.email(), 'Score:', percentage);
  }

  getStatusLabel(score: number): string {
    if (score <= 25) return 'Bronze';
    if (score <= 50) return 'Silver';
    if (score <= 70) return 'Gold';
    if (score <= 85) return 'Platinum';
    return 'Diamond';
  }

  getQuestions() {
    return this.minimalQuestions;
  }

  getCategoryNames() {
    const categories = new Set(this.minimalQuestions.map(q => q.category));
    return Array.from(categories).sort();
  }

  getQuestionsInCategory(categoryName: string) {
    return this.minimalQuestions.filter(q => q.category === categoryName);
  }
}
