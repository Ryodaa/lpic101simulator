import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';
import { AnswersService } from '../answers.service';
import { Answers } from '../answers';

@Component({
  selector: 'ltps-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // Variablen Deklarationen

  @Input() question!: Question;           // Alle Fragen

  @Input() laufVar!: number;              // Der aktuelle Index zur Frage

  answersArr!: Answers[];                 // Alle user Antworten.


  constructor(private as: AnswersService) {}
  
  
  ngOnInit() {
    this.answersArr = this.as.getAll();
  }
  
}
