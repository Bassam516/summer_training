import { Component } from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product'
import {RouterLink} from '@angular/router';
import {CurrencyPipe, LowerCasePipe, UpperCasePipe} from '@angular/common';
import {SmallTextPipe} from '../small-text.pipe';
import {SearchPipe} from '../search.pipe';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    SmallTextPipe,
    SearchPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Product[]=[];
  searchTerm:string = '';

  addProduct:FormGroup = new FormGroup({
    title:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    price:new FormControl(null, [Validators.required]),
    description:new FormControl(null, [Validators.required]),
    category:new FormControl(null, [Validators.required]),
    image:new FormControl(null, [Validators.required]),
  })

  constructor(private _ProductsService:ProductsService) {
    _ProductsService.getProducts().subscribe({
      next:(data)=>{
        this.products = data;
      },
      error:(err)=>{

      }
    })
  }

  addNewProduct(addProduct:FormGroup){
    this._ProductsService.addNewProduct(addProduct.value).subscribe({
      next:(res)=>{
        this.products.push(res);
      },
      error:(err)=>{

      }
    })
  }
}
