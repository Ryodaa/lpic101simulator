import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ltps-test-mode',
  templateUrl: './test-mode.component.html',
  styleUrls: ['./test-mode.component.css']
})
export class TestModeComponent {

  testStart: boolean = false;
  state: string = 'back';

  @ViewChild('startBtn') startBtn!: ElementRef;
  @ViewChild('settingsBtn') settingsBtn!: ElementRef;

  constructor(private router: Router) {}

  startTest() {
    if (this.testStart === false) {
      this.testStart = true;
      this.state = 'cancel';
      this.startBtn.nativeElement.className = 'ui large labeled icon button disabled';
      this.settingsBtn.nativeElement.className = 'ui small labeled icon button disabled';
    }
  }

  cancelTest() {
    if (this.testStart === true) {
      this.testStart = false;
      this.state = 'back';
      this.startBtn.nativeElement.className = 'ui large labeled icon button'
      this.settingsBtn.nativeElement.className = 'ui small labeled icon button';
    } else {
      this.router.navigate(['/home']);
    }
  }

}