import { Component } from '@angular/core';
import {ProductsService} from '../products.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product'
import {LowerCasePipe, UpperCasePipe} from '@angular/common';
@Component({
  selector: 'app-product-details',
  imports: [
    LowerCasePipe,
    UpperCasePipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  id!:string|null;
  product!:Product;
constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute) {
  _ActivatedRoute.paramMap.subscribe((param)=>{
    this.id = param.get("id");
  })
   _ProductsService.getProductDetails(this.id).subscribe({
     next:(data)=>{
       this.product = data;
     },
     error:(err)=>{

  }
   })
}

}
