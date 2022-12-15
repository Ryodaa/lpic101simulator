import { Component, ElementRef, Input, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Answers } from '../#interfaces/answers'; 
import { AnswersService } from '../#services/answers.service'; 
import { CountingService } from '../#services/counting.service'; 
import { Question } from '../#interfaces/question'; 

@Component({
  selector: 'ltps-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  // Variablen Deklarationen
  
  answersArr!: Answers[];                   // Alle user Antworten.
  limitFlag!: Boolean;

  @Input() 
    question!: Question;                    // Die aktuelle Frage.

  @ViewChildren('answer') 
    answerChildren!: QueryList<ElementRef>; // DOM zugriff auf alle checkboxen
  
  constructor(
    private as: AnswersService, 
    public cs: CountingService
    ) { }

  ngOnInit(): void {

    this.answersArr = this.as.getAll();

    /* setTimeout verzögert die ausführung des Codes um einen cycle und erlaubt damit, 
    dass auf den View zugegriffen werden kann ohne das ich ngAfterViewInit nutzen muss.*/
    setTimeout(() => { 
      this.answerChildren.forEach(element => {
        if(this.answersArr[this.cs.runVar].answerArr.includes(element.nativeElement.nextElementSibling.innerText)) {
          element.nativeElement.checked = true;
        } else {
          element.nativeElement.checked = false;
        }
      });

    });   

  }

  pushToArr(): void {

    let answArr = this.answersArr[this.cs.runVar].answerArr;                            // Das aktuelle Antwort-array.
    
    for (let i = 0; i < this.answerChildren.length; i++) {
      
      // Diese Variablen dienen der Übersichtlichkeit des Codes.
      // Ohne diese ist der Code eine Qual zu verstehen.
      let chkBox = this.answerChildren.get(i);                                          // Die aktuelle checkbox.
      let answer = chkBox?.nativeElement.nextElementSibling.innerText                   // Die Antwort zu der checkbox.
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