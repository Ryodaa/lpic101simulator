import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, ViewChildren } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})
export class SingleChoiceComponent {

  @Input() question!: Question;

  @Output() answerObj = new EventEmitter<any>();

  @ViewChild('answer') answerChild!: ElementRef;
  @ViewChildren('label') labelChild!: ElementRef;


  test() {
    if (this.answerChild.nativeElement.checked === true) {
      console.log(this.labelChild.nativeElement.innerHTML);
    }
  }

}
