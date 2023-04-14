import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewsletterComponent} from './newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mac-portfolio';

  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      if (!window.sessionStorage.getItem('newsletter')) {
        this.dialog.open(NewsletterComponent);
      }
    }, 10000);
  }
}
