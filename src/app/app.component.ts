import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'copilot';

  constructor(private router : Router) {

  }

  shouldShowToolbar() : boolean {
    return !this.router.url.endsWith('auth');
  }

}
