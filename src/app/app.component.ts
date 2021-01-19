import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dark_mode: boolean = false;

  constructor() {
    this.dark_mode = localStorage.getItem('dark_mode') === 'true';
  }
}
