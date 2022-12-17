import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CountingService } from '../#services/counting.service';

@Component({
  selector: 'ltps-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnDestroy {

  examStart: Boolean = false;
  state: string = 'Zurück';

  @ViewChild('startBtn') startBtn!: ElementRef;
  @ViewChild('hardSlider') hardSlider!: ElementRef;

  constructor(
    private router: Router,
    public cs: CountingService
    ) {}

  ngOnDestroy(): void {
    // this.hardSlider.nativeElement.firstElementChild.checked = false;
  }

  startExam(): void {
    if (this.examStart === false) {
      this.examStart = true;
      this.state = 'Abbrechen';
      this.startBtn.nativeElement.className = 'ui large labeled icon button disabled';
      this.hardSlider.nativeElement.className = 'ui toggle checkbox disabled';
      this.hardSlider.nativeElement.firstElementChild.disabled = true;
    }
  }

  cancelExam(): void {
    if (this.examStart === true) {
      this.examStart = false;
      this.state = 'Zurück';
      this.startBtn.nativeElement.className = 'ui large labeled icon button'
      this.hardSlider.nativeElement.className = 'ui toggle checkbox';
      this.hardSlider.nativeElement.firstElementChild.disabled = false;
      this.cs.resetAll();
    } else {
      this.router.navigate(['/home']);
      this.cs.resetAll();
    }
  }


  hardMode(): void {
    if(this.hardSlider.nativeElement.firstElementChild.checked) {
      this.cs.hardFlag = true;
    } else {
      this.cs.hardFlag = false;
    }
  }

}
