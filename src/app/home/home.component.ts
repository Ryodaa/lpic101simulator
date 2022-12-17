import { Component, OnInit } from '@angular/core';
import { CountingService } from '../#services/counting.service';

@Component({
  selector: 'ltps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
    public cs: CountingService
    ) {}

    ngOnInit(): void {
      this.cs.hardFlag = false;
    }

}
