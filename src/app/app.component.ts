import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {C2Component} from './c2/c2.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    C2Component,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trainning_project';
}
