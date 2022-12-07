import { Component, ElementRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() question!: Question;
  @Output() answerObj = new EventEmitter<any>();

  @ViewChild('answer') answerChild!: ElementRef;
  @ViewChild('btn') okBtn!: ElementRef;

  lockIn(id: number): void {
    let answer: string = this.answerChild.nativeElement.value;
    let answerArr: string[] = [];
    answerArr.push(answer)
    this.answerObj.emit({id, answerArr});
    this.okBtn.nativeElement.className = "ui button disabled positive";
  }
  
}
