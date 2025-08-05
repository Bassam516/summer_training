import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  count:BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) { }

  getProducts():Observable<any>{
    return this._HttpClient.get("https://fakestoreapi.com/products");
  }

  getProductDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }

  addNewProduct(product:any):Observable<any>{
      return this._HttpClient.post("https://fakestoreapi.com/products",product);

  }



}
