import { Component } from '@angular/core';
import { Navbar } from 'src/navigation/navbar.component';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  imports: [Navbar],
  standalone: true,
  styleUrls: ['./app.component.css'],
  template: `<navbar></navbar>`,
})
export class AppComponent {
  title = 'CodeSandbox';
}
