import { Component } from '@angular/core';
import { ImageCrousel } from 'src/ImageCrousel/imageCrousel.component';
import { Navbar } from 'src/navigation/navbar.component';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  imports: [Navbar, ImageCrousel],
  standalone: true,
  styleUrls: ['./app.component.css'],
  template: `
    <navbar></navbar>
    <imageCrosuel> </imageCrosuel>
  `,
})
export class AppComponent {
  title = 'CodeSandbox';
}
