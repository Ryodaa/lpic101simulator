import { Component, ElementRef, Input, ViewChildren, QueryList, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { Answers } from '../answers';
import { Question } from '../question';

@Component({
  selector: 'ltps-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements AfterViewInit {

  @Input() question!: Question;

  @Input() answer!: Answers;

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  @Output() answerObj = new EventEmitter<any>();

  answersArr: string[] = [];

  ngAfterViewInit() {

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
