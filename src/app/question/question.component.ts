import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from '../answers';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'ltps-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  finishFlag: boolean = false;
  questions!: Question[]; // Alle fragen aus dem Questions.service
  laufVar!: number; // Variable die für den Index der aktuellen Frage zuständig ist.
  currentRoute: string = this.route.url; // aktuelle Route als string. 
  clickedInfoBtn!: number; // Ist gleich der aktuellen question.id
  userAnswersArr: Answers[] = []; // Das array mit allen Antworten die vom User eingegeben wurden.

  @Input() childIdQuestion!: number; // Die id aus der question-list

  @Input() markedArrCp!: {id: number, answers: string[]}[]; // Kopie des marked Array für multi Fragen. Wird nur weitergereicht.
  
  @Input() currentAnswer!: Answers; // Die letzte Antwort die via emit an diese Komponente übergeben wurde.

  @Output() clickedInfoBtnEmit = new EventEmitter<any>(); // Liefert die id vom Info Button an die Eltern Komponente


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
  erlaubt es somit auf die DOM Elemente zuzugreifen was nicht im ngOnInit selber möglich ist 
  !!! Views sind eventuell nicht der beste Weg um auf den DOM zuzugreifen, muss recherchieren !!! */
  ngAfterViewInit(): void  {
    if(this.laufVar === 0) {  // Disabled den zurück Pfeil wenn laufVar auf 0 ist und es somit keine Frage mehr vorher gibt.
      this.previousArw.nativeElement.className = 'btn ui icon button disabled';
    } else {
      this.previousArw.nativeElement.className = 'btn ui icon button';
    }
  }

  // Erstellt leeres Antwort Objekt. Objekt besitzt immer die richtige ID, ist aber ohne Antworten.
  mkEmptyObj(): Answers {
    let answerArr: string[] = [];
    let id: number = this.laufVar + 1;
    return { id, answerArr };
  }

  // Ausgelagerte Funktionen zum disablen der Pfeil-Buttons
  dsblNxtBtn(laufVar: number): void {
    if (this.laufVar > 0) { // Wenn laufVar größer als 0 ist wird der Button enabled.
      this.previousArw.nativeElement.className = 'btn ui icon button';
    }
    if (this.laufVar >= this.questions.length) { // Wenn laufVar größer oder gleich der anzahl aller Fragen ist, so wird der Button disabled. 
      this.nextArw.nativeElement.className = 'btn ui icon button disabled';
    }
  }
  dsblPreBtn(laufVar: number): void {
    if (this.laufVar === 0) { // Wenn laufVar === 0 ist, so wird der Button disabled da es keine Frage vor index 0 gibt.
      this.previousArw.nativeElement.className = "btn ui icon button disabled";
    }
    if (this.laufVar < this.questions.length - 1) { // Solange laufVar kleiner ist als die anzahl aller Fragen, bleibt der Button enabled.
      this.nextArw.nativeElement.className = "btn ui icon button";
    }
  }

  pushToAnswArr(): void {
      // Erstelle zuerst Leeres Objekt damit es innerhalb der Funktion genutzt werden kann.
      let emptyObj = this.mkEmptyObj();

      // Die eigentliche Funktion.
      if(!this.userAnswersArr.find(
        a => a.id === this.laufVar + 1 )) {                // Wenn aktuelle Antwort noch nicht im Antwort Array existiert.
        console.log('noch nicht vorhanden!');              // -- REMOVE BEFORE FINISH --
        
        if(this.currentAnswer) {                           // Wenn eine User-Antwort existiert (der user hat eine Eingabe getätigt).
          if(this.currentAnswer.id === this.laufVar + 1) { // Und wenn diese Antwort ID = aktuelle laufVar + 1 ist.
            this.userAnswersArr.push(this.currentAnswer);  // Dann pushe diese Antwort in das Antworten Array.
          } else {                                         // Wenn User-Antwort existiert, aber nicht die selbe ID hat wie laufVar + 1.
            console.log('erstelle leeres objekt');         // -- REMOVE BEFORE FINISH --
            this.userAnswersArr.push(emptyObj);            // Dann pushe ein leeres Objekt an dessen Stelle.
          }
        } else {                                           // Wenn keine User-Antwort existiert.
          console.log('erstelle leeres objekt');           // -- REMOVE BEFORE FINISH --
          this.userAnswersArr.push(emptyObj);              // Dann pushe ein leeres Objekt an dessen Stelle.
        }
      } else {                                             // Wenn aktuelle Antwort bereits im Antwort Array existiert.
        console.log('wird aktualisiert');
        console.log(this.currentAnswer)                  // -- REMOVE BEFORE FINISH --
        if(this.currentAnswer) {                           // Wenn eine User-Antwort existiert.
          this.userAnswersArr[this.laufVar].answerArr      
            = this.currentAnswer.answerArr;                // Dann überschreibe die alte Antwort mit der neuen User-Antwort.
        } else {                                           // Ansonsten leere das Antworten Array innerhalb der Antwort (Quasi leeres Objekt).
          this.userAnswersArr[this.laufVar].answerArr 
            = [];
        }
      }

  }

  /* Erhöht laufVar um 1 welche dann auf den index der nächsten Frage spring.
   Checkt dann an welcher Frage wir uns befinden um je nachdem die Buttons zu disablen.
   Beispiel: Der vorwärts Button wird disabled wenn wir auf der letzten Frage sind.
   Danach wird die vom User gewählte Antwort in den Array userAnswersArr gepusht.
   Im falle das keine Antwort gewählt wurde, wird ein leeres Objekt mit passender ID
   gepusht so das immer jeder platz im array durch eine id dargestellt wird.*/
  nextQuestion(): void  {
    if (this.laufVar < this.questions.length) {

      // -- REMOVE BEFORE FINISH --
      console.log(this.questions.length)
      console.log(this.laufVar)
      
      // Pusht entweder ein leeres oder ein gefülltes Objekt in das Antworten Array.
      this.pushToAnswArr();
      
      // ??? WARUM BRAUCHE ICH DAS ???
      // Code bricht wenn es nicht da ist...
      if(this.laufVar < this.questions.length - 1) {
        this.laufVar++;
      }

      // Checkt Button status
      this.dsblNxtBtn(this.laufVar);
    }
    console.log(this.userAnswersArr) // -- REMOVE BEFORE FINISH --

    }
  previousQuestion(): void  {
    if (this.laufVar > 0) {
      this.laufVar--;

      // Disabled den previous Button wenn es keine weiteren Fragen gibt.
      this.dsblPreBtn(this.laufVar);
    }
    console.log(this.laufVar);
  }

  // Übergibt die ID der aktuellen Frage an die Info box so das diese auch die passende Info anzeigt.
  showInfo(id: number): void {
    this.clickedInfoBtn = id;
    this.clickedInfoBtnEmit.emit(id);
  }

  // Setzt finishFlag auf true damit der Result-Screen angezeigt wird.
  showResult() {
    this.finishFlag = true;
  }

  // Hier kommt immer die aktuelle Antwort als Objekt an um weiter verarbeitet zu werden.
  answerReciever( answer: any ): void {
    // Objekt struktur: { id: number, answers: string[] }
    this.currentAnswer = answer;
  }

}
