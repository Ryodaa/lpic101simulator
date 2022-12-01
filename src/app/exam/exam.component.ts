import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ltps-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {

  examStart: boolean = false;
  state: string = 'Zurück';

  @ViewChild('startBtn') startBtn!: ElementRef;
  @ViewChild('settingsBtn') settingsBtn!: ElementRef;

  constructor(private router: Router) {}

  startExam() {
    if (this.examStart === false) {
      this.examStart = true;
      this.state = 'Abbrechen';
      this.startBtn.nativeElement.className = 'ui large labeled icon button disabled';
      this.settingsBtn.nativeElement.className = 'ui small labeled icon button disabled';
    }
  }

  cancelExam() {
    if (this.examStart === true) {
      this.examStart = false;
      this.state = 'Zurück';
      this.startBtn.nativeElement.className = 'ui large labeled icon button'
      this.settingsBtn.nativeElement.className = 'ui small labeled icon button';
    } else {
      this.router.navigate(['/home']);
    }
  }

}
