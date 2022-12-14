import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../#interfaces/question'; 
import { AnswersService } from '../#services/answers.service';
import { Answers } from '../#interfaces/answers'; 
import { CountingService } from '../#services/counting.service'; 

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

  constructor(
    private as: AnswersService,
    public cs: CountingService
    ) { }
  
  ngOnInit(): void {
    
    this.answersArr = this.as.getAll();

  }
  
}
