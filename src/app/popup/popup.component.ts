import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CountingService } from '../#services/counting.service'; 

@Component({
  selector: 'ltps-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  flag: Boolean = false;

  @Output() 
    flagEmit = new EventEmitter<Boolean>();

  constructor(
    public route: Router,
    public cs: CountingService
    ) {}

  closePopup() {
    this.flag = true;
    this.flagEmit.emit(this.flag);
  }

}
