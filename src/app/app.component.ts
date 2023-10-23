import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  findRoute(): any { return !(document.querySelector("signup") || (document.querySelector("login")))
}
  title = 'linguatune';
}
