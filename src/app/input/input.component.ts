import { Component, ElementRef, Input, ViewChild, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Answers } from '../answers';
import { Question } from '../question';

@Component({
  selector: 'ltps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() question!: Question; // Alle Fragen

  @Input() answers!: Answers[]; // Aktuelle User-Antwort

  @Input() laufVar!: number;

  @Output() answerObj = new EventEmitter<any>(); // Die aktuelle Antwort als Objekt

  @ViewChild('btn') okBtn!: ElementRef;

  inputValue!: string;

  ngOnChanges() {
    console.log('changes!')
    this.ngOnInit();
  }

  ngOnInit() {

    console.log(this.answers[this.laufVar]);

    if(this.answers[this.laufVar] !== undefined) {
      if(this.answers[this.laufVar].answerArr.length > 0) {
        this.inputValue = this.answers[this.laufVar].answerArr[0];
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
