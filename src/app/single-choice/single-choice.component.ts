import { Component, ElementRef, Input, Output, ViewChild, EventEmitter, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
})
export class SingleChoiceComponent implements AfterViewInit {

  @Input() question!: Question;

  @Output() answerObj = new EventEmitter<any>();

  checkedObj!: { id: number, answer: string };

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  ngAfterViewInit() {
    
  }

  getChecked(id: number): void {
    this.answerChildren.forEach(answChild => {
      //console.log(answChild.nativeElement.nextElementSibling.innerHTML)
      if(answChild.nativeElement.checked === true) {
        let answer: string = answChild.nativeElement.nextElementSibling.innerHTML;
        this.checkedObj = {id, answer};
        console.log(this.checkedObj);
      }
    })
  }

}
