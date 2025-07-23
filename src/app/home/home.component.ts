import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    NgClass,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string = 'trainning_project';

//   link:string = "https://google.com";
//   protected readonly alert = alert;
//
//   sayHello(){
//     alert("hello ts");
// }
//
// isActive:boolean = true;
//
//   users:string[]=["ahmed","mohamed","ali"];
//
//    user:any[]=[
//
//    ]
//
//   inputValue:string='';
  users:string[]=[];
  posts:any[]=[];
 constructor(private _UserService:UserService) {
   // let user = new UserService();
   // this.users = user.users;

   // this.users = _UserService.users;

   // _UserService.getComments().subscribe((data)=>{
   //   console.log(data);
   // })

   _UserService.getPost().subscribe((ayhaga) => {
     this.posts = ayhaga;
   })
 }
 }

