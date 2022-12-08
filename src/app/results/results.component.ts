import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';

@Component({
  selector: 'ltps-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() userAnswers!: { id: number, answerArr: string[] }[];

  questions!: Question[]; // Fragen Array aus dem Questions-service

  
  constructor(private qs: QuestionsService) {}
  
  ngOnInit() {
    this.questions = this.qs.getAll();
  }

}
