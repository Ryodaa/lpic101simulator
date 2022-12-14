import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountingService } from './#services/counting.service';
import { QuestionsService } from './#services/questions.service';

@Component({
  selector: 'ltps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'lernTestPruefSimulator'; // Titel der Anwendung.
  popper = false; // Default popup wert. Nur bei True wird er angezeigt.
  currentRoute: string = this.route.url;
  popupFlag: Boolean = false;

  constructor(
    public route: Router,
    public cs: CountingService,
    public qs: QuestionsService
    ) {}

  // Popup anzeigen lassen, oder wieder ausblenden.
  togglePopper(): void {
    if (this.popper === false) {
      this.popper = true;
    } else {
      this.popper = false;
    }
  }

  flagReciever(flag: Boolean) {
    this.popupFlag = flag;
  }

}
