import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _Router:Router) {
  }
  cred:any = {
    email: "admin",
    password:"ntg"
  }
  isLogin:boolean = false;

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),
  })

  login(loginForm:FormGroup){
    if(loginForm.value.email == this.cred.email && loginForm.value.password == this.cred.password){
      this._Router.navigate(['/home']);
      this.isLogin = true;
      localStorage.setItem("isLogin","true");
    }else{
      localStorage.setItem("isLogin","false");
      this.isLogin = false;
      return;
    }
  }

}
