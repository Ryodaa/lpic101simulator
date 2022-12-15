import { Injectable } from '@angular/core';
import { AnswersService } from './answers.service';

@Injectable({
  providedIn: 'root'
})
export class CountingService {

  liveWrongCount: number = 0;
  skipped: number = 0;
  wrong: number = 0;
  runVar: number = 0;
  lifes: number = 7;
  uncheckFlag: Boolean = false;
  popBool: Boolean = false;
  cancelBool: Boolean = false;
  wrongBool: Boolean = false;

  constructor(
    private as: AnswersService
    ) { }

  /* Resettet alle variablen der Klasse und das Antworten-Array
  auf default, damit der User von vorne anfangen kann */
  resetAll(): void {
    this.liveWrongCount = 0;
    this.skipped = 0;
    this.wrong = 0;
    this.runVar = 0;
    this.lifes = 7;
    this.uncheckFlag = false;
    this.popBool = false;
    this.cancelBool = false;
    this.wrongBool = false;
    this.as.answers.forEach(element => {
      element.answerArr = [];
    });
  }

}

