import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ltps-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(public route: Router) {}

}
