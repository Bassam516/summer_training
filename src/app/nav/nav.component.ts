import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-nav',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  cartCount!:number;
  constructor(private _ProductsService:ProductsService) {

  }

  ngOnInit(){
    this._ProductsService.count.subscribe(data=>{
      this.cartCount = data;
    })
    // this.cartCount = this._ProductsService.count.value;
  }




}
