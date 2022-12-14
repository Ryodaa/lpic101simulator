import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountingService } from '../#services/counting.service';

@Component({
  selector: 'ltps-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  examStart: Boolean = false;
  state: string = 'Zurück';

  @ViewChild('startBtn') startBtn!: ElementRef;
  @ViewChild('settingsBtn') settingsBtn!: ElementRef;

  constructor(
    private router: Router,
    private cs: CountingService
    ) {}

  ngOnInit(): void {

  }

  startExam(): void {
    if (this.examStart === false) {
      this.examStart = true;
      this.state = 'Abbrechen';
      this.startBtn.nativeElement.className = 'ui large labeled icon button disabled';
      this.settingsBtn.nativeElement.className = 'ui small labeled icon button disabled';
    }
  }

  cancelExam(): void {
    if (this.examStart === true) {
      this.examStart = false;
      this.state = 'Zurück';
      this.startBtn.nativeElement.className = 'ui large labeled icon button'
      this.settingsBtn.nativeElement.className = 'ui small labeled icon button';
      this.cs.resetAll();
    } else {
      this.router.navigate(['/home']);
      this.cs.resetAll();
    }
  }

}
