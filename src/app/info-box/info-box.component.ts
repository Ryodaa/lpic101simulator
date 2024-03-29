import { Component, Input } from '@angular/core';
import { Info } from '../#interfaces/info';
import { InfoService } from '../#services/info.service';
import { Question } from '../#interfaces/question'; 
import { QuestionsService } from '../#services/questions.service'; 


@Component({
  selector: 'ltps-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent {
  
  infoDetail!: Info[]               // Infos zu den Fragen aus dem info-service
  questions!: Question[];           // Alle Fragen aus dem question-service
  @Input() childIdBox!: number;     // Die id aus der learn-mode Komponente runter gereicht
  @Input() laufVarCpBox!: number;   // Die laufVar aus der question Komponente

  constructor(
    private is: InfoService, 
    private qs: QuestionsService
    ) { }

  ngOnInit(): void {
    this.infoDetail = this.is.getAllInfo();
    this.questions = this.qs.getAll();
  }

}
