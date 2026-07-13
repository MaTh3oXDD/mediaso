import { Component, inject, signal, computed } from '@angular/core';
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

  advancedQuestions: Question[] = [
    { id: 'GS-001', category: 'Strategia', text: 'Czy istnieje napisana strategia rozwoju placówki?' },
    { id: 'GS-002', category: 'Strategia', text: 'Czy strategia zawiera konkretne cele liczbowe, np. przychód, liczba pacjentów?' },
    { id: 'GS-003', category: 'Strategia', text: 'Czy harmonogram wdrożenia jest znany zespołowi?' },
    { id: 'GS-004', category: 'Strategia', text: 'Czy właściciel regularnie analizuje wyniki co najmniej raz w miesiącu?' },
    { id: 'GS-005', category: 'Strategia', text: 'Czy istnieje plan awaryjny, jeśli cele nie będą osiągnięte?' },
    { id: 'GS-006', category: 'Pozyskiwanie', text: 'Czy placówka ma plan działań mających na celu zwiększenie liczby pacjentów?' },
    { id: 'GS-007', category: 'Pozyskiwanie', text: 'Czy placówka posiada listę potencjalnych pacjentów do kontaktu?' },
    { id: 'GS-008', category: 'Pozyskiwanie', text: 'Czy w ostatnim miesiącu pozyskano nowych pacjentów z wiadomości zwrotnych?' },
    { id: 'GS-009', category: 'Pozyskiwanie', text: 'Czy placówka wie, z jakich kanałów pochodzą nowi pacjenci?' },
    { id: 'GS-010', category: 'Pozyskiwanie', text: 'Czy mierzy się koszt pozyskania pacjenta?' },
    { id: 'GS-011', category: 'Pozyskiwanie', text: 'Czy prowadzone są kampanie pozyskiwania pacjentów?' },
    { id: 'GS-012', category: 'Pozyskiwanie', text: 'Czy mierzy się ROI kampanii?' },
    { id: 'GS-013', category: 'Pozyskiwanie', text: 'Czy placówka wykorzystuje rekomendacje pacjentów jako kanał pozyskiwania?' },
    { id: 'GS-014', category: 'Pozyskiwanie', text: 'Czy wdrożone są programy lojalnościowe?' },
    { id: 'GS-015', category: 'Pozyskiwanie', text: 'Czy przeprowadzane są badania na temat zadowolenia pacjentów?' },
    { id: 'GS-016', category: 'Rejestracja', text: 'Czy rejestracja pacjentów odbywa się w całości online?' },
    { id: 'GS-017', category: 'Rejestracja', text: 'Czy pacjent może umówić wizytę na termin wybierany przez siebie?' },
    { id: 'GS-018', category: 'Rejestracja', text: 'Czy rozmowy rejestracji mają ustalony standard obsługi?' },
    { id: 'GS-019', category: 'Rejestracja', text: 'Czy mierzy się średni czas czekania na telefon w rejestracji?' },
    { id: 'GS-020', category: 'Rejestracja', text: 'Czy poszczególne godziny pracy są w pełni obsadzone pracownikami?' },
    { id: 'GS-021', category: 'Rejestracja', text: 'Czy rejestracja posiada odpowiednie narzędzia do zarządzania harmonogramem?' },
    { id: 'GS-022', category: 'Rejestracja', text: 'Czy istnieje systemu rezerwacji online?' },
    { id: 'GS-023', category: 'Rejestracja', text: 'Czy wysyłane są przypomnienia SMS/e-mail przed wizytą?' },
    { id: 'GS-024', category: 'Rejestracja', text: 'Czy mierzy się konwersję kontaktów na wizyty?' },
    { id: 'GS-025', category: 'Strona', text: 'Czy placówka posiada stronę internetową?' },
    { id: 'GS-026', category: 'Strona', text: 'Czy pacjent może łatwo umówić wizytę przez stronę?' },
    { id: 'GS-027', category: 'Strona', text: 'Czy strona działa na telefonie?' },
    { id: 'GS-028', category: 'Strona', text: 'Czy strona zawiera informacje o lekarzach i specjalnościach?' },
    { id: 'GS-029', category: 'Strona', text: 'Czy strona zawiera opinie pacjentów?' },
    { id: 'GS-030', category: 'Strona', text: 'Czy strona zawiera informacje o cenach?' },
    { id: 'GS-031', category: 'Strona', text: 'Czy strona zawiera formularz kontaktowy?' },
    { id: 'GS-032', category: 'Strona', text: 'Czy strona jest zoptymalizowana pod kątem wyszukiwarek?' },
    { id: 'GS-033', category: 'Strona', text: 'Czy mierzy się ruch na stronie?' },
    { id: 'GS-034', category: 'Marketing', text: 'Czy placówka prowadzi działania marketingowe?' },
    { id: 'GS-035', category: 'Marketing', text: 'Czy Google Ads/Meta mają mierzone konwersje?' },
    { id: 'GS-036', category: 'Marketing', text: 'Czy prowadzona jest działalność w mediach społecznościowych?' },
    { id: 'GS-037', category: 'Marketing', text: 'Czy zawartość w mediach jest konsekwentnie publikowana?' },
    { id: 'GS-038', category: 'Marketing', text: 'Czy zaangażowanie w mediach społecznościowych jest mierzone?' },
    { id: 'GS-039', category: 'Marketing', text: 'Czy mierzy się koszt kampanii?' },
    { id: 'GS-040', category: 'Rentowność', text: 'Czy prowadzi się pomiar przychodów?' },
    { id: 'GS-041', category: 'Rentowność', text: 'Czy zna się rentowność poszczególnych usług?' },
    { id: 'GS-042', category: 'Rentowność', text: 'Czy prowadzi się pomiar kosztów?' },
    { id: 'GS-043', category: 'Rentowność', text: 'Czy istnieje budżet na poszczególne działania?' },
    { id: 'GS-044', category: 'Rentowność', text: 'Czy przeprowadzane są audyty kosztów?' },
    { id: 'GS-045', category: 'Rentowność', text: 'Czy istnieje wskazanie, które zabiegi są najbardziej rentowne?' },
    { id: 'GS-046', category: 'KPI', text: 'Czy mierzy się liczbę pacjentów?' },
    { id: 'GS-047', category: 'KPI', text: 'Czy mierzy się średni przychód na pacjenta?' },
    { id: 'GS-048', category: 'KPI', text: 'Czy mierzy się wykorzystanie pracowników?' },
    { id: 'GS-049', category: 'KPI', text: 'Czy mierzy się szybkość świadczenia usługi?' },
    { id: 'GS-050', category: 'KPI', text: 'Czy istnieje miesięczny raport zarządczy?' },
    { id: 'GS-051', category: 'KPI', text: 'Czy raport zawiera liczbę pacjentów, przychód i koszty?' },
    { id: 'GS-052', category: 'KPI', text: 'Czy mierzy się wykorzystanie gabinetów?' },
    { id: 'GS-053', category: 'KPI', text: 'Czy liczbę pacjentów dzielimy na nowych i powracających?' },
    { id: 'GS-054', category: 'Automatyzacja', text: 'Czy procesy są w większości skomputeryzowane?' },
    { id: 'GS-055', category: 'Automatyzacja', text: 'Czy placówka wykorzystuje CRM do zarządzania pacjentami?' },
    { id: 'GS-056', category: 'Automatyzacja', text: 'Czy harmonogram jest zarządzany w systemie?' },
    { id: 'GS-057', category: 'Automatyzacja', text: 'Czy używa się automatycznych SMS/e-maili?' },
    { id: 'GS-058', category: 'Automatyzacja i AI', text: 'Czy placówka posiada chatbota lub inteligentny formularz kwalifikacji pacjenta?' },
    { id: 'GS-059', category: 'Automatyzacja i AI', text: 'Czy zespół korzysta z AI do tworzenia treści, raportów lub usprawniania pracy?' },
    { id: 'GS-060', category: 'Automatyzacja i AI', text: 'Czy procesy administracyjne są częściowo zautomatyzowane?' },
    { id: 'GS-061', category: 'Automatyzacja i AI', text: 'Czy placówka posiada uporządkowaną bazę kontaktów pacjentów zgodną z RODO?' },
    { id: 'GS-062', category: 'Automatyzacja i AI', text: 'Czy automatyzacje są monitorowane i mierzone?' },
    { id: 'GS-063', category: 'Opinie i reputacja', text: 'Czy placówka aktywnie pozyskuje opinie pacjentów?' },
    { id: 'GS-064', category: 'Opinie i reputacja', text: 'Czy średnia ocena Google jest na poziomie co najmniej 4,6?' },
    { id: 'GS-065', category: 'Opinie i reputacja', text: 'Czy placówka odpowiada na opinie pozytywne i negatywne?' },
    { id: 'GS-066', category: 'Opinie i reputacja', text: 'Czy istnieje procedura reagowania na skargi pacjentów?' },
    { id: 'GS-067', category: 'Opinie i reputacja', text: 'Czy opinie są analizowane jako źródło informacji o jakości obsługi?' },
    { id: 'GS-068', category: 'Opinie i reputacja', text: 'Czy profile lekarzy i placówki są uzupełnione i spójne w internecie?' },
    { id: 'GS-069', category: 'Opinie i reputacja', text: 'Czy placówka posiada materiały pokazujące zespół, lokalizację i standard pracy?' },
    { id: 'GS-070', category: 'Opinie i reputacja', text: 'Czy reputacja placówki jest regularnie monitorowana?' },
    { id: 'GS-071', category: 'Skalowalność biznesu', text: 'Czy placówka posiada spisane procedury kluczowych procesów?' },
    { id: 'GS-072', category: 'Skalowalność biznesu', text: 'Czy wdrożenie nowego pracownika odbywa się według określonego schematu?' },
    { id: 'GS-073', category: 'Skalowalność biznesu', text: 'Czy właściciel może delegować większość zadań operacyjnych?' },
    { id: 'GS-074', category: 'Skalowalność biznesu', text: 'Czy placówka jest przygotowana do zwiększenia liczby pacjentów bez chaosu organizacyjnego?' },
    { id: 'GS-075', category: 'Skalowalność biznesu', text: 'Czy placówka posiada plan rekrutacji i rozwoju zespołu?' },
    { id: 'GS-076', category: 'Skalowalność biznesu', text: 'Czy procesy są powtarzalne między lekarzami/lokalizacjami?' },
    { id: 'GS-077', category: 'Skalowalność biznesu', text: 'Czy istnieje możliwość otwarcia kolejnej lokalizacji w oparciu o obecny model?' },
    { id: 'GS-078', category: 'Skalowalność biznesu', text: 'Czy placówka posiada jasny model zarządzania odpowiedzialnościami?' },
  ];

  modeSelected = signal(false);
  isAdvanced = signal(false);
  currentPage = signal(0);
  questionsPerPage = 15;
  responses = signal<{ [key: string]: number }>({});
  email = signal('');
  showResult = signal(false);
  showEmailModal = signal(false);
  result = signal(0);
  resultStatus = signal('');

  scoreLabels = ['', 'Kiepskie', 'Słabe', 'Średnie', 'Dobre', 'Doskonałe'];
  recommendedPackage = signal<{name: string, desc: string, price: string, period: string} | null>(null);

  selectMode(advanced: boolean) {
    this.isAdvanced.set(advanced);
    this.modeSelected.set(true);
    this.currentPage.set(0);
    this.responses.set({});
    this.email.set('');
    this.showResult.set(false);
  }

  backToModeSelection() {
    this.modeSelected.set(false);
    this.currentPage.set(0);
    this.responses.set({});
    this.email.set('');
    this.showResult.set(false);
  }

  setResponse(questionId: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const current = this.responses();
    this.responses.set({ ...current, [questionId]: +value });
  }

  nextPage() {
    const maxPage = this.getMaxPage();
    if (this.currentPage() < maxPage) {
      this.currentPage.update(p => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevPage() {
    if (this.currentPage() > 0) {
      this.currentPage.update(p => p - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getMaxPage(): number {
    const questions = this.isAdvanced() ? this.advancedQuestions : this.minimalQuestions;
    return Math.ceil(questions.length / this.questionsPerPage) - 1;
  }

  openEmailModal() {
    const questions = this.isAdvanced() ? this.advancedQuestions : this.minimalQuestions;
    const responses = this.responses();

    if (Object.keys(responses).length < questions.length) {
      alert('Proszę odpowiedzieć na wszystkie pytania');
      return;
    }

    this.showEmailModal.set(true);
    this.email.set('');
  }

  submitEmail() {
    if (!this.email().trim()) {
      alert('Proszę podać adres e-mail');
      return;
    }

    const questions = this.isAdvanced() ? this.advancedQuestions : this.minimalQuestions;
    const responses = this.responses();

    const avgScore = Object.values(responses).reduce((a, b) => a + b, 0) / Object.keys(responses).length;
    const percentage = Math.round((avgScore / 5) * 100);

    this.result.set(percentage);
    this.resultStatus.set(this.getStatusLabel(percentage));
    this.recommendedPackage.set(this.getRecommendedPackage(percentage));
    this.showEmailModal.set(false);
    this.showResult.set(true);

    console.log('Email:', this.email(), 'Score:', percentage);
  }

  getRecommendedPackage(percentage: number) {
    if (percentage <= 30) {
      return {
        name: 'Strona WWW',
        desc: 'Profesjonalna strona dla Twojej placówki medycznej.',
        price: '3 500',
        period: 'zł jednorazowo'
      };
    } else if (percentage <= 60) {
      return {
        name: 'Social — Start',
        desc: 'Stała, spójna obecność w mediach społecznościowych.',
        price: '2 200',
        period: 'zł miesięcznie'
      };
    } else {
      return {
        name: 'Social — Scale',
        desc: 'Pełna obsługa z kampaniami i dedykowanym opiekunem.',
        price: '4 500',
        period: 'zł miesięcznie'
      };
    }
  }

  closeEmailModal() {
    this.showEmailModal.set(false);
  }

  getStatusLabel(score: number): string {
    if (score <= 25) return 'Bronze';
    if (score <= 50) return 'Silver';
    if (score <= 70) return 'Gold';
    if (score <= 85) return 'Platinum';
    return 'Diamond';
  }

  getQuestions() {
    const questions = this.isAdvanced() ? this.advancedQuestions : this.minimalQuestions;
    const start = this.currentPage() * this.questionsPerPage;
    const end = start + this.questionsPerPage;
    return questions.slice(start, end);
  }

  getCategoryNames() {
    const questions = this.getQuestions();
    const categories = new Set(questions.map(q => q.category));
    return Array.from(categories).sort();
  }

  getQuestionsInCategory(categoryName: string) {
    return this.getQuestions().filter(q => q.category === categoryName);
  }
}
