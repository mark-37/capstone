import { Component, OnInit } from '@angular/core';

import { ProductsService } from './services/products.service';
import { product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'capstone';

  private products: product[];

  constructor(private _productService: ProductsService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this._productService.getProducts().subscribe(
      (products: any) => {this.products = products; console.log(products)},
       err => console.error(err)
    )
  }

}
