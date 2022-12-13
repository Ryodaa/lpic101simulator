import { Component } from '@angular/core';

@Component({
  selector: 'ltps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'lernTestPruefSimulator'; // Titel der Anwendung.

  popper = false; // Default popup wert. Nur bei True wird er angezeigt.

  // Popup anzeigen lassen, oder wieder ausblenden.
  togglePopper(): void {
    if (this.popper === false) {
      this.popper = true;
    } else {
      this.popper = false;
    }
  }

}
