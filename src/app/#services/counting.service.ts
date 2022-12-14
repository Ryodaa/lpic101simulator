import { Injectable } from '@angular/core';
import { AnswersService } from './answers.service';

@Injectable({
  providedIn: 'root'
})
export class CountingService {

  liveWrongCount: number = 0;
  runVar: number = 0;

  constructor(
    private as: AnswersService
    ) { }

  /* Resettet den counter der aktuellen Fehler Quote, den
  counter der laufvariablen und leert danach noch das 
  Antworten-Array wieder damit der User von vorne anfangen kann */
  resetAll(): void {
    this.liveWrongCount = 0;
    this.runVar = 0;
    this.as.answers.forEach(element => {
      element.answerArr = [];
    });
  }

}

