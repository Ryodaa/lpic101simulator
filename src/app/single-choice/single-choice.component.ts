import { Component, ElementRef, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Answers } from '../answers';
import { AnswersService } from '../answers.service';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})

export class SingleChoiceComponent implements OnInit {

  @Input() question!: Question; // Die aktuelle Frage.

  @Input() laufVar!: number;    // Der aktuelle Index zur Frage.

  answersArr!: Answers[];       // Alle user Antworten.

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  constructor(private as: AnswersService) {}

  ngOnInit() {
    this.answersArr = this.as.getAll();
  }

  pushToArr() {
    this.answerChildren.forEach(element => {

      let answer: string = element.nativeElement.nextElementSibling.innerHTML;  // Die aktuelle Antwort zur checkbox.
      let answerArr = this.answersArr[this.laufVar].answerArr;                  // Das aktuelle Antwort-array.

      if(element.nativeElement.checked === true && answerArr.length < 1) {      // Wenn checkbox ist checked und Antwort-array länge ist weniger als 1.                                    // Und wenn 
          answerArr.push(answer);                                               // Dann pushe die Antwort zum Antwort-array.
        } else {
          answerArr.pop();                                                      // Wenn schon eine Antwort vorhanden ist entferne diese.
          answerArr.push(answer);                                               // Und pushe dann die neue Antwort zum Antwort-array. 
        }
      }
    );
  }

}
