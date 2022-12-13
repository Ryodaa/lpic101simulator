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
  
  answersArr!: Answers[];          // Alle user Antworten.

  @Input() 
    question!: Question;           // Alle Fragen

  @Input() 
    laufVar!: number;              // Der aktuelle Index zur Frage


  constructor(private as: AnswersService) { }
  
  ngOnInit(): void {
    this.answersArr = this.as.getAll();
  }
  
}
