import { Component } from '@angular/core';
import { CountingService } from '../#services/counting.service';

@Component({
  selector: 'ltps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public cs: CountingService
    ) {}

}
