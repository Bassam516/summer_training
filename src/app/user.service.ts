import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:string[]=["bassam","mohamed","ali"];

  constructor(private _HttpClient:HttpClient) {

  }

  getComments():Observable<any>{
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/comments');
  }

  getPost():Observable<any>{
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts')
  }



}
