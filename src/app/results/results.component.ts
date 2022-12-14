import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { QuestionsService } from '../#services/questions.service'; 
import { Question } from '../#interfaces/question'; 
import { AnswersService } from '../#services/answers.service';
import { Answers } from '../#interfaces/answers'; 
import { Router } from '@angular/router';

@Component({
  selector: 'ltps-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  questions!: Question[]; // Fragen Array aus dem Questions-service
  answers!: Answers[];
  checkedAnswers: { id: number, userAnswers: string[], correct: Boolean }[] = [];
  corrCount: number = 0;
  incorrCount: number = 0;
  
  @Output() 
    chkAnswersCp = new EventEmitter<any[]>();
  
  constructor(private qs: QuestionsService, private as: AnswersService, public route: Router) {}
  
  ngOnInit(): void {
    this.questions = this.qs.getAll();
    this.answers = this.as.getAll();

    this.fillEmptyArr();
    this.compareAnswers();
    this.countCorr();
  }

  countCorr(): void {
    
    this.checkedAnswers.forEach(element => {
      if(element.correct === true) {
        this.corrCount++;
      } else {
        this.incorrCount++;
      }
    });
  }

  fillEmptyArr(): void {

    for (let i = 0; i < this.questions.length; i++) {
      this.checkedAnswers.push( { id: i + 1, userAnswers: [], correct: false } )
    }
  }

  reloadComp(): void {
    /* Forciert einen sauberen reload der Komponenten damit der Nutzer neu Anfangen kann. 
    Der Trick ist, der Router navigiert zu einer anderen Komponente, überspring aber den
    wechsel und geht dann direkt zurück zur ausgangs Komponente.
    Somit ist ein hard reload der Komponente gelungen ohne die komplette Anwendung neu zu laden. */
    if(this.route.url === '/exam') {
      this.route.navigateByUrl('/testmode', { skipLocationChange: true }).then(() => {
        this.route.navigate(['/exam']);
      });
    } else if (this.route.url === '/testmode') {
      this.route.navigateByUrl('/exam', { skipLocationChange: true }).then(() => {
        this.route.navigate(['/testmode']);
      });
    }
  }

  compareAnswers(): void {
    
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

      this.chkAnswersCp.emit(this.checkedAnswers);

    }

  }

}