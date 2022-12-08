import { Component, ElementRef, Input, ViewChildren, QueryList, EventEmitter, Output, OnInit } from '@angular/core';
import { Answers } from '../answers';
import { Question } from '../question';

@Component({
  selector: 'ltps-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() question!: Question;

  @Input() answers!: Answers[];

  @Input() laufVar!: number;

  @ViewChildren('answer') answerChildren!: QueryList<ElementRef>;

  @Output() answerObj = new EventEmitter<any>();

  answersArr: string[] = [];


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

  getChecked(id: number) {

    this.answerChildren.forEach(answChild => {
      if(answChild.nativeElement.checked === true) {
        if(!this.answersArr.includes(answChild.nativeElement.nextElementSibling.innerHTML)) {
          this.answersArr.push(answChild.nativeElement.nextElementSibling.innerHTML);
        }
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
