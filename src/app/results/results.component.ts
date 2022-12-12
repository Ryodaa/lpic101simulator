import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';
import { AnswersService } from '../answers.service';
import { Answers } from '../answers';

@Component({
  selector: 'ltps-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  
  questions!: Question[]; // Fragen Array aus dem Questions-service
  
  answers!: Answers[];

  checkedAnswers: { id: number, userAnswers: string[], correct: Boolean }[] = [];
  
  constructor(private qs: QuestionsService, private as: AnswersService) {}
  
  ngOnInit() {
    this.questions = this.qs.getAll();
    this.answers = this.as.getAll();
    console.log(this.questions);
    console.log('questions');
    console.log(this.answers);
    console.log('answers')

    this.fillEmptyArr();
    this.compareAnswers();
  }

  fillEmptyArr() {

    for (let i = 0; i < this.questions.length; i++) {
      this.checkedAnswers.push( { id: i + 1, userAnswers: [''], correct: false } )
    }

  }

  compareAnswers() {
    
    for (let i = 0; i < this.questions.length; i++) {
      
      this.answers[i].answerArr.forEach(answer => {

        let userAnswer = this.checkedAnswers[i].userAnswers;

        if(this.questions[i].solution.includes(answer) && this.questions[i].type !== 'multi') {
          this.checkedAnswers[i].correct = true;
          userAnswer.push(answer);
        } else {
          if(this.questions[i].solution.includes(answer)) {
            userAnswer.push(answer);
          } else {
            userAnswer.push(answer + '*');
          }

          console.log(userAnswer);

          let counter: number = 0;
          userAnswer.forEach(element => {
            if(this.questions[i].solution.includes(element)) {
              counter++;
            }
            if(counter === this.questions[i].solution.length) {
              this.checkedAnswers[i].correct = true;
            } else {
              this.checkedAnswers[i].correct = false;
            }
          });
        }
      });
    }

  }

}