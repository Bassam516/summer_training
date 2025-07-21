import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = 'trainning_project';

  link:string = "https://google.com";
  protected readonly alert = alert;

  sayHello(){
    alert("hello ts");
}

isActive:boolean = true;

  users:string[]=["ahmed","mohamed","ali"];

   user:any[]=[

   ]
}
