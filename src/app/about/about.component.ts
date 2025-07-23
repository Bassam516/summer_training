import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-about',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
users:string[]=[];
  constructor(private _UserService:UserService) {
    // let user = new UserService();
    // this.users = user.users;
    // this.users = _UserService.users;
  }

}
