import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  imports:[RouterModule],
  styleUrls: ['./navbar.css'],
  templateUrl: './navbar.html',
  standalone: true,
})
export default class Navbar {}
