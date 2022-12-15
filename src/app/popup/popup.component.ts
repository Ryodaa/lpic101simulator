import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../#services/answers.service';
import { CountingService } from '../#services/counting.service'; 

@Component({
  selector: 'ltps-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(
    public route: Router,
    public cs: CountingService,
    private as: AnswersService
    ) {}

  closePopup() {
    this.cs.popBool = false;
    if(this.cs.runVar > 1) {
      this.cs.runVar = this.cs.runVar - 2;
    } else if (this.cs.runVar === 1) {
      this.cs.runVar = this.cs.runVar - 1;
    }
    this.as.answers[this.cs.runVar].answerArr = [];
    this.as.answers[this.cs.runVar + 1].answerArr = [];
  }

  closeCancel() {
    this.cs.cancelBool = false;
    this.cs.resetAll();
    this.route.navigateByUrl('/home');
  }

}
