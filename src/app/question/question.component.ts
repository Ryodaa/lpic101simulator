import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Answers } from '../answers';
import { AnswersService } from '../answers.service';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'ltps-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  // Variablen Deklarationen

  finishFlag: boolean = false;              // Bestimmt ob der Result-screen sichtbar ist oder nicht.
  questions!: Question[];                   // Alle fragen aus dem Questions.service.
  laufVar!: number;                         // Variable die für den Index der aktuellen Frage zuständig ist.
  currentRoute: string = this.route.url;    // aktuelle Route als string. 
  clickedInfoBtn!: number;                  // Ist gleich der aktuellen question.id.
  answersArr!: Answers[];                   // Alle user Antworten.
  disabled = 'btn ui icon button disabled'  // Klassen für disabled buttons.
  enabled = 'btn ui icon button'            // Klassen für enabled buttons.

  @Input() childIdQuestion!: number;                        // Die id aus der question-list

  @Input() markedArrCp!: {id: number, answers: string[]}[]; // Kopie des marked Array für multi Fragen. Wird nur weitergereicht.
  
  @Input() currentAnswer!: Answers;                         // Die letzte Antwort die via emit an diese Komponente übergeben wurde.

  @Output() clickedInfoBtnEmit = new EventEmitter<any>();   // Liefert die id vom Info Button an die Eltern Komponente


  // DOM zugriffe auf die Pfeil-buttons zum verändern der Klassen (zum disablen).
  @ViewChild('previousArw') previousArw!: ElementRef;
  @ViewChild('nextArw') nextArw!: ElementRef;
  
  constructor(private qs: QuestionsService, private route: Router, private as: AnswersService) { }
  
  ngOnInit(): void  {

    this.questions = this.qs.getAll(); // Holt alle Fragen aus dem Questions.service
    this.answersArr = this.as.getAll(); // Holt alle Antworten aus dem Answers.service

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
      this.previousArw.nativeElement.className = this.disabled;
    } else {
      this.previousArw.nativeElement.className = this.enabled;
    }
  }

  // Funktionen zum disablen der Pfeil-Buttons
  dsblNxtBtn(laufVar: number): void {
    if (this.laufVar > 0) { // Wenn laufVar größer als 0 ist wird der Button enabled.
      this.previousArw.nativeElement.className = this.enabled;
    }
    if (this.laufVar >= this.questions.length) { // Wenn laufVar größer oder gleich der anzahl aller Fragen ist, so wird der Button disabled. 
      this.nextArw.nativeElement.className = this.disabled;
    }
  }
  dsblPreBtn(laufVar: number): void {
    if (this.laufVar === 0) { // Wenn laufVar === 0 ist, so wird der Button disabled da es keine Frage vor index 0 gibt.
      this.previousArw.nativeElement.className = this.disabled;
    }
    if (this.laufVar < this.questions.length - 1) { // Solange laufVar kleiner ist als die anzahl aller Fragen, bleibt der Button enabled.
      this.nextArw.nativeElement.className = this.enabled;
    }
  }

  nextQuestion(): void  {
    this.laufVar++;
    this.dsblNxtBtn(this.laufVar);
  }

  previousQuestion(): void  {
    this.laufVar--;
    this.dsblPreBtn(this.laufVar);
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

}

