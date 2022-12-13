import { Component, ElementRef, Input, ViewChildren, QueryList, OnInit, OnChanges } from '@angular/core';
import { Answers } from '../answers';
import { AnswersService } from '../answers.service';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})

export class SingleChoiceComponent implements OnInit, OnChanges {

  // Variablen Deklarationen
  
  answersArr!: Answers[];                     // Alle user Antworten.

  @Input() 
    question!: Question;                      // Die aktuelle Frage.

  @Input() 
    laufVar!: number;                         // Der aktuelle Index zur Frage.

  @ViewChildren('answer') 
    answerChildren!: QueryList<ElementRef>;   // DOM zugriff auf alle checkboxen

  constructor(private as: AnswersService) { }

  ngOnInit(): void {
    this.answersArr = this.as.getAll();
  }

  ngOnChanges(): void {

    /* setTimeout verzögert die ausführung des Codes um einen cycle und erlaubt damit, 
    dass auf den View zugegriffen werden kann ohne das ich ngAfterViewInit nutzen muss.*/
    setTimeout(() => {
      this.answerChildren.forEach(element => {
        if(this.answersArr[this.laufVar].answerArr.includes(element.nativeElement.nextElementSibling.innerText)) {
          element.nativeElement.checked = true;
      } else {
          element.nativeElement.checked = false;
      }
    });
  });   

}

  pushToArr(): void {
    this.answerChildren.forEach(element => {

      let answer: string = element.nativeElement.nextElementSibling.innerText;  // Die aktuelle Antwort zur checkbox.
      let answerArr = this.answersArr[this.laufVar].answerArr;                  // Das aktuelle Antwort-array.

      if(element.nativeElement.checked === true && answerArr.length < 1) {      // Wenn checkbox ist checked und Antwort-array länge ist weniger als 1.    
        answerArr.push(answer);                                                 // Dann pushe die Antwort zum Antwort-array.
      } else if(element.nativeElement.checked === false) {                      // Tu nichts um nicht im nächsten Schritt die Antwort wieder zu entfernen.
        console.log('do nothing')                                               // Da es im forEach keinen break; gibt brauche ich das.
      } else {                                                                  
        answerArr.pop();                                                        // Wenn schon eine Antwort vorhanden ist entferne diese.
        answerArr.push(answer);                                                 // Und pushe dann die neue Antwort zum Antwort-array.
      }
    });
  }

}
