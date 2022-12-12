import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';
import { AnswersService } from '../answers.service';
import { Answers } from '../answers';

@Component({
  selector: 'ltps-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, AfterViewInit {

  
  questions!: Question[]; // Fragen Array aus dem Questions-service
  
  answers!: Answers[];

  checkedAnswers: { id: number, userAnswers: string[], correct: Boolean }[] = [];

  @Input() markedArrCp!: {id: number, answers: string[]}[];
  
  constructor(private qs: QuestionsService, private as: AnswersService) {}
  
  ngOnInit() {
    this.questions = this.qs.getAll();
    this.answers = this.as.getAll();

    this.fillEmptyArr();
    console.log(this.checkedAnswers)
    this.compareAnswers();

    console.log(this.markedArrCp)

  }

  ngAfterViewInit() {
    console.log(this.markedArrCp)
  }

  fillEmptyArr() {

    for (let i = 0; i < this.questions.length; i++) {
      this.checkedAnswers.push( { id: i, userAnswers: [], correct: false } )
    }

  }

  compareAnswers() {

    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].solution.forEach(solution => {
        
      });
    }
    console.log(this.checkedAnswers)

  }

}
