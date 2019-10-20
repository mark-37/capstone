import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

import { Product } from '../models/product';

import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  // categories: any[];


  maxlength = 100;

  descriptionLength = 1000000000;

  config: any = {
    // id: 'foo',
    // itemsPerPage: 5,
    // currentPage: 1,
    // totalItems: 1000
  };



  constructor(private _productService: ProductsService) {

  }

  ngOnInit() {
    this.getProducts();
    // this.getCategories();
    this.showProducts();

    // this._productService.getProducts().subscribe((data: any) => {
    //   this.config = {
    //     // id: 'foo',
    //     itemsPerPage: 10,
    //     currentPage: 1,
    //     totalItems: 1000
    //   };

    // });
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      (data: Product[]) => {

        this.products = data;

        this.config = {
          // id: 'foo',
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.products.length
        };
      },
      (err) => console.error(err)
    );


  }

  // getCategories() {
  //   this._productService.getCategories().subscribe(
  //     (data: any) => {
  //       this.categories = data;
  //       console.log(this.categories);
  //     },
  //     (err) => console.error(err)
  //   );
  // }

  showProducts() {
    // console.log(this.products);
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }

  fullLength(len) {
    this.maxlength = len;
  }


  editProduct(data) {
    console.log(data);
    if (localStorage.getItem('sessionObject')) {
      console.log('User is logged in');
      console.log(localStorage.getItem('sessionObject'));
    } else {
      console.log('Please Continue to login!');
      $('#myModal').modal('show');
    }
  }

  deleteProduct(data) {

    console.log(data);
    if (localStorage.getItem('sessionObject')) {
      console.log('User is logged in');
      console.log(localStorage.getItem('sessionObject'));

      this._productService.deleteProduct(data).subscribe(
        (dt) => {
          console.log(dt);
          alert('Data deleted Succesfully!');
          window.location.reload();
        },
        (err) => console.error(err)
      );
    } else {
      console.log('Please Continue to login!');
      $('#myModal').modal('show');
    }

  }

}
