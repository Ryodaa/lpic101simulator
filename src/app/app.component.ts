import { Component } from '@angular/core';

@Component({
  selector: 'ltps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lernTestPruefSimulator';

  popper = false;

  togglePopper() {
    if (this.popper === false) {
      this.popper = true;
    } else {
      this.popper = false;
    }
  }

}
