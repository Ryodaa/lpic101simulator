import { Component, OnInit } from '@angular/core';
import { Question } from '../#interfaces/question'; 
import { CountingService } from '../#services/counting.service';
import { QuestionsService } from '../#services/questions.service'; 

@Component({
  selector: 'ltps-learn-mode',
  templateUrl: './learn-mode.component.html',
  styleUrls: ['./learn-mode.component.css']
})
export class LearnModeComponent implements OnInit {

  questions!: Question[];                             // Alle Fragen aus dem question-service
  modeBool: Boolean = true;                           // Bestimmt welche Ansicht aktuell gezeigt wird. Einzel oder alle Fragen.
  childId!: number;                                   // Die id aus der question-list
  markedArr: {id: number, answers: string[]}[] = [];  // Array in dem die Richtigen Fragen mit '*' am Ende markiert wurden.

  constructor(
    private qs: QuestionsService,
    private cs: CountingService
    ) { }

  ngOnInit(): void {
    this.questions = this.qs.getAll();
    this.filterAnswers();
    this.cs.hardFlag = false;
  }

// Wechselt zwischen Einzelansicht und der Liste aller Fragen.
// false = Listenansicht, true = Einzelansicht
  switchMode(): void {
    if(this.modeBool === true) {
      this.modeBool = false;

    } else {
      this.modeBool = true;
    }
  }

  // Wenn multi Fragen angezeigt werden setzt diese Funktion ein * an die richtigen Antworten, 
  // damit im HTML erkannt werden kann welche die richtigen und falschen Antworten sind.
  filterAnswers(): void {  
    for (let i = 0; i < this.questions.length; i++) {
      if(this.questions[i].type === 'multi') {
        let inbetweenArr: string[] = [];
        this.questions[i].answers.forEach(element => {
          if(this.questions[i].solution.includes(element)) {
            inbetweenArr.push(element + '*');
          } else {
            inbetweenArr.push(element);
          }
        });
        this.markedArr.push({id: i, answers: inbetweenArr});
      }
    }
  }

// Hier kommt die id aus questions-list an
// Dies ist eine Frühe implementation, wenn ich Zeit hätte würde ich alles nurnoch über einen Service machen.
// Ich will aber den funktionierenden Code jetzt nicht komplett auseinander reißen.
// Dies trifft auf fast alle Variablen zu die ich mit @Input und @Output hin und her gereicht habe.
  idRecieved(id: number): void {
    this.childId = id;
  }

}
