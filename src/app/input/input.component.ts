import { Component, ElementRef, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterViewInit {

  @Input() question!: Question;
  @Output() answerObj = new EventEmitter<any>();

  @ViewChild('answer') answerChild!: ElementRef;
  @ViewChild('btn') okBtn!: ElementRef;
  
  ngAfterViewInit(): void  {

  }
  
  lockIn(): void {
    let answStr = this.answerChild.nativeElement.value as string;
    let id = 2;
    this.answerObj.emit({id, answStr});
    this.okBtn.nativeElement.className = "ui button disabled positive";
  }
  
}
