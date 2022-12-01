import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent {

  @Input() question!: Question;

  ngOnInit(): void {
  }

}
