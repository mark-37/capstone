import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  categories: any[];

  currentSelection: string = 'Any';

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.showProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      (data:Product[]) => {
      //  let i = 0;
      //   while(data[i]!=undefined) {
      //     this.products.push(data[i])
      //     i++;
      //   }
        this.products = data;
        console.log();
      },
      (err) => console.error(err)
    );
  }

  getCategories() {
    this._productService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (err) => console.error(err)
    );
  }

  showProducts() {
    // console.log(this.products);
  }

  selectThis(data) {
    this.currentSelection = data.innerText;
    console.log("selected value is", data.innerText);
  }

}
