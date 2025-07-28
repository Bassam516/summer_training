import { Component } from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product'
import {RouterLink} from '@angular/router';
import {CurrencyPipe, LowerCasePipe, UpperCasePipe} from '@angular/common';
import {SmallTextPipe} from '../small-text.pipe';
import {SearchPipe} from '../search.pipe';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    SmallTextPipe,
    SearchPipe,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Product[]=[];
  searchTerm:string = '';
  constructor(private _ProductsService:ProductsService) {
    _ProductsService.getProducts().subscribe({
      next:(data)=>{
        this.products = data;
      },
      error:(err)=>{

      }
    })
  }
}
