import { Component } from '@angular/core';
import Navbar from 'src/navigation/navbar.component';
import { ImageCrousel } from './ImageCrousel/imageCrousel.component';
import { Part2 } from './Part2Home/Part2Home.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [Navbar, ImageCrousel, Part2],
  template: `
    <navbar></navbar>
    <imageCrosuel></imageCrosuel>
    <Part2></Part2>
  `,
})
export class Home {}
