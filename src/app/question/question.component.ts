import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from '../#interfaces/answers'; 
import { AnswersService } from '../#services/answers.service'; 
import { CountingService } from '../#services/counting.service'; 
import { Question } from '../#interfaces/question'; 
import { QuestionsService } from '../#services/questions.service'; 

@Component({
  selector: 'ltps-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  // Variablen Deklarationen

  finishFlag: Boolean = false; 
  finishBtn: Boolean = false;                                                 // Bestimmt ob der Result-screen sichtbar ist oder nicht.
  questions!: Question[];                                                       // Alle fragen aus dem Questions.service.
  currentRoute: string = this.route.url;                                        // aktuelle Route als string. 
  clickedInfoBtn!: number;                                                      // Ist gleich der aktuellen question.id.
  answersArr!: Answers[];                                                       // Alle user Antworten.
  checkedAnswers!: { id: number, userAnswers: string[], correct: Boolean }[];   // die verarbeiteten Antworten aus der Result Komponente
  disabled = 'btn ui icon button disabled'                                      // Klassen für disabled buttons.
  enabled = 'btn ui icon button'                                                // Klassen für enabled buttons.
  wrongCount: number = 0;

  @Input() 
    childIdQuestion!: number;                        // Die id aus der question-list

  @Input() 
    markedArrCp!: {id: number, answers: string[]}[]; // Kopie des marked Array für multi Fragen. Wird nur weitergereicht.
  
  @Input() 
    currentAnswer!: Answers;                         // Die letzte Antwort die via emit an diese Komponente übergeben wurde.

  @Output() 
    clickedInfoBtnEmit = new EventEmitter<any>();    // Liefert die id vom Info Button an die Eltern Komponente

  // DOM zugriffe auf die Pfeil-buttons zum verändern der Klassen (zum disablen).
  @ViewChild('previousArw') 
    previousArw!: ElementRef;
  @ViewChild('nextArw') 
    nextArw!: ElementRef;
  
  constructor(
    private route: Router, 
    private qs: QuestionsService,
    private as: AnswersService,
    public cs: CountingService
    ) { }
  
  ngOnInit(): void {

    this.questions = this.qs.getAll();  // Holt alle Fragen aus dem Questions.service
    this.answersArr = this.as.getAll(); // Holt alle Antworten aus dem Answers.service

    /* Wenn kein Button vorher gedrückt wurde ist childIdQuestion ohne Wert (undefined).
     Wenn dies zutrifft wird die runVar auf 0 gesetzt damit immer bei Frage 1 (index 0) angefangen wird.
     Sobald der User einen Info-Button drückt wird an childIdQuestion eine Zahl übergeben.
     Diese wird in dem Fall der runVar zugewießen damit beim ansichtswechsel die richtige Frage angezeigt wird.*/
    if(this.childIdQuestion === undefined) {
      this.cs.runVar = 0;
    } else {
      this.cs.runVar = this.childIdQuestion - 1; // -1 da childIdQuestion bei 1 anfängt und somit als index Variable ungeeignet wäre.
    }
  }

  /* Ähnlich wie ngOnInit nur führt nach dem initialisieren der Views aus und 
  erlaubt es somit auf die DOM Elemente zuzugreifen was nicht im ngOnInit selber möglich ist 
  !!! Views sind eventuell nicht der beste Weg um auf den DOM zuzugreifen, muss recherchieren !!! */
  ngAfterViewInit(): void {
    if(this.cs.runVar === 0) {                                    // Disabled den zurück Pfeil wenn runVar auf 0 ist und es somit keine Frage mehr vorher gibt.
      this.previousArw.nativeElement.className = this.disabled;
    } else {
      this.previousArw.nativeElement.className = this.enabled;
    }
  }

  // Funktionen zum disablen der Pfeil-Buttons
  dsblNxtBtn(): void {
    if (this.cs.runVar > 0 && this.cs.runVar < 119) {                                     // Wenn runVar größer als 0 ist wird der Button enabled.
      this.previousArw.nativeElement.className = this.enabled;
    }
    if (this.finishBtn === true) {                // Wenn runVar größer oder gleich der anzahl aller Fragen ist, so wird der Button disabled. 
      this.nextArw.nativeElement.className = this.disabled;
    }
  }
  dsblPreBtn(): void {
    if (this.cs.runVar === 0) {                                   // Wenn runVar === 0 ist, so wird der Button disabled da es keine Frage vor index 0 gibt.
      this.previousArw.nativeElement.className = this.disabled;
    }
    if (this.cs.runVar < this.questions.length - 1) {             // Solange runVar kleiner ist als die anzahl aller Fragen, bleibt der Button enabled.
      this.nextArw.nativeElement.className = this.enabled;
    }
  }

  /* Live count der Falschen Antworten für die Warn-Popups.
  runVar - 1 weil die runVar erhöht wird bevor diese Funktion ausgeführt wird,
  wir uns aber trotzdem noch auf die vorherige Frage beziehen. */
  currIncorr(): void {

    let multiWrong = 0

    if(this.questions[this.cs.runVar - 1].type !== 'multi') {
      if(this.questions[this.cs.runVar - 1].solution[0] !== this.answersArr[this.cs.runVar - 1].answerArr[0]) {
        this.cs.liveWrongCount++;
      }
    } else {
      this.answersArr[this.cs.runVar - 1].answerArr.forEach(answer => {
        if(!this.questions[this.cs.runVar - 1].solution.includes(answer)) {
          multiWrong++;
        }
      })
      if(multiWrong > 0) {
        this.cs.liveWrongCount++;
      }
      if(this.answersArr[this.cs.runVar].answerArr.length < this.questions[this.cs.runVar].solution.length && multiWrong === 0) {
        this.cs.liveWrongCount++;
      }
    }  
  }

  nextQuestion(): void  {
    if(this.cs.runVar < 120) {
      this.cs.runVar++;
      this.cs.lifes--;
      this.cs.popBool = true;
    }
    this.dsblNxtBtn();
    this.currIncorr();
  }

  previousQuestion(): void  {
    this.cs.runVar--;
    this.dsblPreBtn();
    this.cs.liveWrongCount--;
  }

  // Übergibt die ID der aktuellen Frage an die Info box so das diese auch die passende Info anzeigt.
  showInfo(id: number): void {
    this.clickedInfoBtn = id;
    this.clickedInfoBtnEmit.emit(id);
  }

  // Setzt finishFlag auf true damit der Result-Screen angezeigt wird.
  showResult(): void {
    this.finishFlag = true;
    this.finishBtn = false;
  }

  resultReciever(emit: any): void {
    this.checkedAnswers = emit;
  }

  showFinBtn(): void {
    this.finishBtn = true;
    this.dsblNxtBtn();
  }

}
