import { Component, ElementRef, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Answers } from '../answers';
import { Question } from '../question';

@Component({
  selector: 'ltps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() question!: Question; // Alle Fragen
  @Input() answer!: Answers; // Alle User Antworten
  @Output() answerObj = new EventEmitter<any>(); // Die aktuelle Antwort als Objekt

  @ViewChild('btn') okBtn!: ElementRef;

  inputValue!: string;

  ngOnInit(): void {
    if(this.answer) {
      if(this.answer.answerArr.length > 0) {
        this.inputValue = this.answer.answerArr[0];
      }
    }
  }

  // Habe keine Lust auf Observables, deswegen nutze ich einen Button zum emitten.
  // Wird vielleicht noch geändert wenn ich Lust habe...
  lockIn(id: number): void {
    let answer: string = this.inputValue;
    let answerArr: string[] = [];
    answerArr.push(answer)
    this.answerObj.emit({id, answerArr});
    this.okBtn.nativeElement.className = "ui button positive";
  }
  
}
