import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOneShown = false;
  title = 'git branching practice';

  toggleOne(): void {
    this.isOneShown = !this.isOneShown;
  }
}
