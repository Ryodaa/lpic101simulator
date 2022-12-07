import { Component, ElementRef, Input, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent {

  @Input() question!: Question;

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  @Output() answerObj = new EventEmitter<any>();

  answersArr: string[] = [];

  getChecked(id: number) {

    this.answerChildren.forEach(answChild => {
      if(answChild.nativeElement.checked === true) {
        if(!this.answersArr.includes(answChild.nativeElement.nextElementSibling.innerHTML)) {
          this.answersArr.push(answChild.nativeElement.nextElementSibling.innerHTML);
        }
        //this.answerObj.emit({id, answer});
      } else {
        if(this.answersArr.includes(answChild.nativeElement.nextElementSibling.innerHTML)) {
          this.answersArr.splice(this.answersArr.indexOf(answChild.nativeElement.nextElementSibling.innerHTML));
        }
      }
    })
    let answerArr: string[] = this.answersArr;
    // Emit darf nicht sofort passieren da sonst mit jedem check ein neues Objekt gesendet wird.
    this.answerObj.emit({ id, answerArr })
  }

}
