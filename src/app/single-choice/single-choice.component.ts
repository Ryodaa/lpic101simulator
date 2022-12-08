import { Component, ElementRef, Input, Output, EventEmitter, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Answers } from '../answers';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})

export class SingleChoiceComponent implements OnInit {

  @Input() question!: Question; // Die aktuelle Frage.

  @Input() answers!: Answers[]; // Die aktuelle Antwort vom User-Input oder Empty-Object.

  @Input() laufVar!: number;

  @Output() checkedObj = new EventEmitter<any>();

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  ngOnInit() {


    setTimeout(() => {

      console.log(this.answers[this.laufVar]);
      
      if(this.answers[this.laufVar] !== undefined) {
        this.answerChildren.forEach(answChild => {
          if(this.answers[this.laufVar].answerArr.includes(answChild.nativeElement.nextElementSibling.innerHTML)) {
            answChild.nativeElement.checked = true;
          }
        })
      }

    });


  }



  // Aus irgend einem Grund kommt der Init nur beim vorwärts gehen.

  // ngAfterViewInit(): void {
  //   console.log(this.answer);
  //   if(this.answer) {
  //     if(this.answer.answerArr.length > 0) {
  //       this.answerChildren.forEach(answChild => {
  //         if(this.answer.answerArr.includes(answChild.nativeElement.nextElementSibling.innerHTML)) { 
  //           answChild.nativeElement.checked = true;
  //         }
  //       })
  //     }
  //   }
  // }

  // Erstellt ein Objekt mit der id der Frage und der gewählten Antwort und emitted diese.
  getChecked(id: number): void {
    this.answerChildren.forEach(answChild => {
      if(answChild.nativeElement.checked === true) {
        let answer: string = answChild.nativeElement.nextElementSibling.innerHTML;
        let answerArr: string[] = [];
        answerArr.push(answer);
        this.checkedObj.emit({id, answerArr});
      }
    })
  }

}
