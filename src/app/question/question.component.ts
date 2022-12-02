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

  questions!: Question[];
  laufVar!: number;
  currentRoute: string = this.route.url;

  @Input() childIdQuestion!: number; // Die id aus der question-list
  @Output() laufVarCp = new EventEmitter<number>; // Die aktuelle laufVar als Kopie für andere Komponenten.

  @ViewChild('previousArw') previousArw!: ElementRef;
  @ViewChild('nextArw') nextArw!: ElementRef;
  
  constructor(private qs: QuestionsService, private route: Router) { }
  
  ngOnInit() {
    this.questions = this.qs.getAll();
    
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
  ngAfterViewInit() {
    if(this.laufVar === 0) {
      this.previousArw.nativeElement.className = 'btn ui icon button disabled';
    } else {
      this.previousArw.nativeElement.className = 'btn ui icon button';
    }
  }

  nextQuestion() {
    if (this.laufVar < this.questions.length - 1) {
      this.laufVar++;
      this.laufVarCp.emit(this.laufVar);
      if (this.laufVar > 0) {
        this.previousArw.nativeElement.className = 'btn ui icon button';
      }
      if (this.laufVar >= this.questions.length - 1) {
        this.nextArw.nativeElement.className = 'btn ui icon button disabled';
      }
    }
  }

  previousQuestion() {
    if (this.laufVar > 0) {
      this.laufVar--;
      this.laufVarCp.emit(this.laufVar);
      if (this.laufVar === 0) {
        this.previousArw.nativeElement.className = "btn ui icon button disabled";
      }
      if (this.laufVar < this.questions.length - 1) {
        this.nextArw.nativeElement.className = "btn ui icon button";
      }
    } 
  }
}
