import { Component, ElementRef, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Answers } from '../answers';
import { AnswersService } from '../answers.service';
import { Question } from '../question';

@Component({
  selector: 'ltps-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() question!: Question; // Die aktuelle Frage.

  @Input() laufVar!: number;    // Der aktuelle Index zur Frage.

  answersArr!: Answers[];       // Alle user Antworten.

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  constructor(private as: AnswersService) {}

  ngOnInit() {
    this.answersArr = this.as.getAll();
  }

  pushToArr() {
    for (let i = 0; i < this.answerChildren.length; i++) {
      
      // Diese Variablen dienen der Übersichtlichkeit des Codes.
      // Ohne diese ist der Code eine Qual zu verstehen.
      let answArr = this.answersArr[this.laufVar].answerArr;                            // Das aktuelle Antwort-array.
      let chkBox = this.answerChildren.get(i);                                          // Die aktuelle checkbox.
      let answer = chkBox?.nativeElement.nextElementSibling.innerHTML                   // Die Antwort zu der checkbox.
      let index: number = answArr.indexOf(answer);                                      // Der index der aktuellen Antwort innerhalb des Antwort-array.

      // Die eigentliche Funktion.
      if(chkBox?.nativeElement.checked === true && !answArr.includes(answer)) {         // Wenn aktuelle checkbox gecheckt wurde und noch nicht im Answer-array vorhanden.
        answArr.push(answer);                                                           // Pushe die Antwort ins Antworten-array
      } else if(chkBox?.nativeElement.checked === false && answArr.includes(answer)) {  // Wenn aktuelle checkbox nicht gecheckt wurde aber schon im Answer-array vorhanden ist.
        answArr.splice(index, index);                                                   // Lösche diese Antwort wieder aus dem Antwort-array herraus.
        break;                                                                          // Danach break damit es nicht zu fehlern durch die nun geänderten index Reihenfolge kommt.
      }
      
    }
  }

}