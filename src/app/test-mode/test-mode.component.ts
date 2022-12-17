import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountingService } from '../#services/counting.service';

@Component({
  selector: 'ltps-test-mode',
  templateUrl: './test-mode.component.html',
  styleUrls: ['./test-mode.component.css']
})
export class TestModeComponent implements OnInit {

  testStart: boolean = false;
  state: string = 'Zurück';

  @ViewChild('startBtn') startBtn!: ElementRef;

  ngOnInit(): void {
    this.cs.hardFlag = false;
  }

  constructor(
    private router: Router,
    public cs: CountingService
    ) {}

  startTest(): void {
    if (this.testStart === false) {
      this.testStart = true;
      this.state = 'Abbrechen';
      this.startBtn.nativeElement.className = 'ui large labeled icon button disabled';
    }
  }

  cancelTest(): void {
    if (this.testStart === true) {
      this.testStart = false;
      this.state = 'Zurück';
      this.startBtn.nativeElement.className = 'ui large labeled icon button'
      this.cs.resetAll();
    } else {
      this.router.navigate(['/home']);
      this.cs.resetAll();
    }
  }

  

}