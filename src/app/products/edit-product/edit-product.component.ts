import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { Edit } from 'src/app/models/Edit';

import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  id: string;
  catSelected: string;

  private name: string;
  private price: number;
  private quantity: number;
  private color: string;
  private manufacturer: string;
  private category: string;
  private description: string;


  model: Edit = new Edit();

  @ViewChild('editForm') form: any;


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

  constructor(private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.route.params.subscribe(params => {
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

  editProduct(editForm) {
    console.log(this.product);
    // this.form.reset();
    this.productService.editProduct(this.product).subscribe(
      (data) => {
        console.log(data);
        alert('data edited succesfully!');
        this.router.navigate(['/products']);
      },
      (err) => console.error(err)
    );
  }

}
