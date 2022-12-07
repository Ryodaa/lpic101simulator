import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'ltps-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  questions!: Question[]; // Alle fragen aus dem Questions.service
  laufVar!: number; // Variable die für den Index der aktuellen Frage zuständig ist.
  currentRoute: string = this.route.url; // aktuelle Route als string. 
  clickedInfoBtn!: number; // Ist gleich der aktuellen question.id

  @Input() childIdQuestion!: number; // Die id aus der question-list

  @Input() markedArrCp!: {id: number, answers: string[]}[]; // Kopie des marked Array. Wird nur weitergereicht.
  
  @Input() currentAnswer!: {id: number, answerArr: string[]}; // Die letzte Antwort die via emit an diese Komponente übergeben wurde.

  @Output() clickedInfoBtnEmit = new EventEmitter<any>(); // Liefert die id vom Info Button an die Eltern Komponente

  userAnswersArr: { id: number, answerArr: string[] }[] = []; // Das array mit allen Antworten die vom User eingegeben wurden.

  //answerCopy!: {id: number, answerArr: string[]};

  // DOM zugriffe auf die Pfeil-buttons zum verändern der Klassen (zum disablen).
  @ViewChild('previousArw') previousArw!: ElementRef;
  @ViewChild('nextArw') nextArw!: ElementRef;
  
  constructor(private qs: QuestionsService, private route: Router) { }
  
  ngOnInit(): void  {
    this.questions = this.qs.getAll(); // Holt alle Fragen aus dem Questions.service
    
    /* Wenn kein Button vorher gedrückt wurde ist childIdQuestion ohne Wert (undefined).
     Wenn dies zutrifft wird die laufVar auf 0 gesetzt damit immer bei Frage 1 (index 0) angefangen wird.
     Sobald der User einen Info-Button drückt wird an childIdQuestion eine Zahl übergeben.
     Diese wird in dem Fall der laufVar zugewießen damit beim ansichtswechsel die richtige Frage angezeigt wird.*/
    if(this.childIdQuestion === undefined) {
      this.laufVar = 0;
    } else {
      this.laufVar = this.childIdQuestion - 1; // -1 da childIdQuestion bei 1 anfängt und somit als index Variable ungeeignet wäre.
    }
  }

  /* Ähnlich wie ngOnInit nur führt nach dem initialisieren der Views aus und 
  erlaubt es somit auf die DOM Elemente zuzugreifen was nicht in ngOnInit selber möglich ist */
  ngAfterViewInit(): void  {
    if(this.laufVar === 0) {
      this.previousArw.nativeElement.className = 'btn ui icon button disabled';
    } else {
      this.previousArw.nativeElement.className = 'btn ui icon button';
    }
  }

  /* Erhöht laufVar um 1 welche dann auf den index der nächsten Frage spring.
   Checkt dann an welcher Frage wir uns befinden um je nachdem die Buttons zu disablen.
   Beispiel: Der vorwärts Button wird disabled wenn wir auf der letzten Frage sind.
   Danach wird die vom User gewählte Antwort in den Array userAnswersArr gepusht.
   Im falle das keine Antwort gewählt wurde, wird ein leeres Objekt mit passender ID
   gepusht so das immer jeder platz im array durch eine id dargestellt wird.*/
  nextQuestion(): void  {
    if (this.laufVar < this.questions.length - 1) {
      this.laufVar++;
      if (this.laufVar > 0) {
        this.previousArw.nativeElement.className = 'btn ui icon button';
      }
      if (this.laufVar >= this.questions.length - 1) {
        this.nextArw.nativeElement.className = 'btn ui icon button disabled';
      }

      let answerArr: string[] = [];
      let id: number = this.laufVar;
      let emptyObj = { id, answerArr };

      /* Checkt ob die aktuelle Frage auch der id aus der Antwort 
      entspricht und pusht nur dann, dass gesammte Objekt.
      Ansonsten wird ein leeres Objekt gepusht. */
      if(!this.userAnswersArr.find(e => e.id === this.laufVar)) {
        console.log('noch nicht vorhanden!');
        
        if(this.currentAnswer) {
          if(this.currentAnswer.id === this.laufVar) {
            this.userAnswersArr.push(this.currentAnswer);
          } else {
            console.log('erstelle leeres objekt');
            this.userAnswersArr.push(emptyObj); // Leeres Objekt wird gepusht.
          }
        } else {
          console.log('erstelle leeres objekt');
          this.userAnswersArr.push(emptyObj); // Leeres Objekt wird gepusht
        }
      // Wenn eintrag bereits vorhanden, setze die alten Werte auf die neuen. Überschreibt den alten Wert.
      // Und genau deswegen hab ich die IDs in die Antworten gepackt.
      } else {
        console.log('wird aktualisiert');
        this.userAnswersArr[this.currentAnswer.id - 1].answerArr = this.currentAnswer.answerArr;
      }
    }
  }
  previousQuestion(): void  {
    if (this.laufVar > 0) {
      this.laufVar--;
      if (this.laufVar === 0) {
        this.previousArw.nativeElement.className = "btn ui icon button disabled";
      }
      if (this.laufVar < this.questions.length - 1) {
        this.nextArw.nativeElement.className = "btn ui icon button";
      }
    }
  }

  // Übergibt die ID der aktuellen Frage an die Info box so das diese auch die passende Info anzeigt.
  showInfo(id: number): void {
    this.clickedInfoBtn = id;
    this.clickedInfoBtnEmit.emit(id);
  }

  // Hier kommt immer die aktuelle Antwort als Objekt an um weiter verarbeitet zu werden.
  answerReciever( answer: any ): void {
    // Objekt struktur: { id: number, answers: string[] }
    console.log(answer)
    this.currentAnswer = answer;
  }

}
