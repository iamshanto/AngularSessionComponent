import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  @Input() currentProduct:Product;

  constructor() { }

  ngOnInit() {
  }

}
