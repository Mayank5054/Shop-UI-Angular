import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ImageCrousel } from 'src/ImageCrousel/imageCrousel.component';
// import Navbar from 'src/navigation/navbar.component';
import { Home } from 'src/Home/home.component';
import Navbar from 'src/navigation/navbar.component';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  imports: [Navbar,RouterModule],
  standalone: true,
  styleUrls: ['./app.component.css'],
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet> `,
})
export class AppComponent {
  title = 'CodeSandbox';
}
