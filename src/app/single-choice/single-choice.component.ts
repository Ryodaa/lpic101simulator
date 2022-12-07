import { Component, ElementRef, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})
export class SingleChoiceComponent {

  @Input() question!: Question;

  @Output() checkedObj = new EventEmitter<any>();

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  // Erstellt ein Objekt mit der id der Frage und der gewählten Antwort.
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
