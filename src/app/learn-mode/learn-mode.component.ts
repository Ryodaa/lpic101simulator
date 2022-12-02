import { Component, Input, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'ltps-learn-mode',
  templateUrl: './learn-mode.component.html',
  styleUrls: ['./learn-mode.component.css']
})
export class LearnModeComponent implements OnInit {

  questions!: Question[]; // Alle Fragen aus dem question-service
  modeBool: Boolean = true; // Bestimmt welche Ansicht aktuell gezeigt wird. Einzel oder alle Fragen.
  childId!: number; // Die id aus der question-list
  @Input() laufVarCp!: number;

  constructor(private is: InfoService, private qs: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.qs.getAll();
  }

// Wechselt zwischen Einzelansicht und der Liste aller Fragen.
// false = Listenansicht, true = Einzelansicht
  switchMode() {
    if(this.modeBool === true) {
      this.modeBool = false;

    } else {
      this.modeBool = true;
    }
  }

// Hier kommt die id aus questions-list an
  idRecieved(id: number): void {
    this.childId = id;
  }

  laufVarRecieved(laufVar: number): void {
    this.laufVarCp = laufVar;
  }

}
