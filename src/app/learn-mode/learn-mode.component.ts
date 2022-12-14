import { Component, Input, OnInit } from '@angular/core';
import { InfoService } from '../#services/info.service';
import { Question } from '../#interfaces/question'; 
import { QuestionsService } from '../#services/questions.service'; 

@Component({
  selector: 'ltps-learn-mode',
  templateUrl: './learn-mode.component.html',
  styleUrls: ['./learn-mode.component.css']
})
export class LearnModeComponent implements OnInit {

  questions!: Question[]; // Alle Fragen aus dem question-service
  modeBool: Boolean = true; // Bestimmt welche Ansicht aktuell gezeigt wird. Einzel oder alle Fragen.
  childId!: number; // Die id aus der question-list
  markedArr: {id: number, answers: string[]}[] = []; // Array in dem die Richtigen Fragen mit '*' am Ende markiert wurden.

  constructor(private is: InfoService, private qs: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.qs.getAll();
    this.filterAnswers();
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
  idRecieved(id: number): void {
    this.childId = id;
  }

}
