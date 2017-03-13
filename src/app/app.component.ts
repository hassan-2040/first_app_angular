import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Jango Mango</h1>
  <fa-other></fa-other>
  <fa-another></fa-another>
`,
    // './app.component.html',
  styles: [`h1 {
    color: red
  }`]

// ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Re Amigoes!';
}
