import {Component, EventEmitter, input, Input, OnInit, Output} from '@angular/core';
import {SmallTextPipe} from '../small-text.pipe';

@Component({
  selector: 'app-products-head',
  imports: [
    SmallTextPipe
  ],
  templateUrl: './products-head.component.html',
  styleUrl: './products-head.component.css'
})
export class ProductsHeadComponent implements OnInit{

  @Input() dataFromParent:any[]=[];
  @Output() dataFromChild:EventEmitter<any> = new EventEmitter();

  message:string = "hello form child";

  constructor() {
  }

  ngOnInit(){
    this.dataFromChild.emit(this.message);
  }



}
