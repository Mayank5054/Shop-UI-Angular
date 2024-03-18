import { Component } from '@angular/core';
// import { ImageCrousel } from 'src/ImageCrousel/imageCrousel.component';
// import Navbar from 'src/navigation/navbar.component';
import { Home } from 'src/Home/home.component';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  imports: [Home],
  standalone: true,
  styleUrls: ['./app.component.css'],
  template: ` <home></home> `,
})
export class AppComponent {
  title = 'CodeSandbox';
}
