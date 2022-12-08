import { Component, ElementRef, Input, Output, EventEmitter, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Answers } from '../answers';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})
export class SingleChoiceComponent implements AfterViewInit {

  @Input() question!: Question; // Die aktuelle Frage.

  @Input() answer!: Answers; // Die aktuelle Antwort vom User-Input oder Empty-Object.

  @Output() checkedObj = new EventEmitter<any>();

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  ngOnInit() {
    console.log(this.answer)
  }

  // Aus irgend einem Grund kommt der Init nur beim vorwärts gehen.

  ngAfterViewInit(): void {
    console.log(this.answer);
    if(this.answer) {
      if(this.answer.answerArr.length > 0) {
        this.answerChildren.forEach(answChild => {
          if(this.answer.answerArr.includes(answChild.nativeElement.nextElementSibling.innerHTML)) { 
            answChild.nativeElement.checked = true;
          }
        })
      }
    }
  }

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
