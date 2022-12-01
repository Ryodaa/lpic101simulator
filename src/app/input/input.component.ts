import { Component, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'ltps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() question!: Question;

}
