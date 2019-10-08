import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id: string;
  catSelected: string;

  product: Product = {
    id: null,
    name: null,
    quantity: null,
    price: null,
    category: null,
    color: null,
    manufacturer: null,
    description: null
  };
  categories: any[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService) { 
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
    
    productService.searchProduct(this.id).subscribe(
      (data) => {
        console.log(data[0]);
        this.product = data[0];
        this.catSelected = this.product.category;
      },
      (err) => console.error(err)
    );

    productService.getCategories().subscribe(
      (data) => {
        let temp: any = {};
        temp = data;
        temp.forEach(element => {
          this.categories.push(element.category);
        });
        // console.log();
      },  
      (err) => console.error(err)
    );
  
  }

  ngOnInit() {
    
  }

}
