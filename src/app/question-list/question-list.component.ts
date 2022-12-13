import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';

@Component({
  selector: 'ltps-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Output() 
    clickedInfoBtnEmit = new EventEmitter<any>(); // Liefert die id vom Info Button an die Eltern Komponente

  @Input() 
    markedArrCp!: {id: number, answers: string[]}[];

  @Input() 
    activeButton!: number;
  /* Nimmt die aktuelle ID von außen wieder auf um nach dem neu laden der Komponente 
  durch den wechseln zwischen liste und einzelansicht, den Button status wieder auf "positive" zu setzten. 
  Dies ist notwendig da durch das neu laden der ngFor wieder von vorne beginnt und dadurch
  clickedInfoBtn wieder auf undefined gesetzt wird und somit der Button wieder auf neutral ist. */
  
  clickedInfoBtn!: number; // Ist gleich der aktuellen question.id
  questions!: Question[]; // Fragen Array aus dem Questions-service

  constructor(private qs: QuestionsService) {}
  
  ngOnInit(): void {
    this.questions = this.qs.getAll();
    
    if (this.clickedInfoBtn === undefined) {
      this.clickedInfoBtn = this.activeButton;
    }
  }
  
  showInfo(id: number): void {
    this.clickedInfoBtn = id;
    this.clickedInfoBtnEmit.emit(id)
  } /* Bekommt die aktuelle questions.id (je nachdem welcher Button gedrückt wurde) 
  und setzt diese in eine lokale Variable.
  Zugleich wird die selbe id an die Eltern Komponente learn-mode emittet. */

}