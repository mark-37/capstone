import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url = 'http://localhost:3000/products';
  private _categoriesUrl = 'http://localhost:3000/categories';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  /* Method to get products from the server */
  getProducts() {
    return this._http.get(this._url, this.httpOptions);
  }

  /* Method to post product on server */
  addProducts(productData: Product) {
    return this._http.post(this._url, productData, this.httpOptions);
  }

  /* Method to edit product on server */
  editProduct(productData : Product) {
    return this._http.put(this._url, productData, this.httpOptions );
  }

  /* Method to delete product on server */
  deleteProduct(id : string) {
    return this._http.delete(this._url+`/${id}`, this.httpOptions);
  }

  /* Method to search a product on server */
  searchProduct(id: string) {
    return this._http.get(this._url+`?id=${id}`, this.httpOptions);
  } 

  /* Method to get categories of a product */ 
  getCategories() {
    return this._http.get(this._categoriesUrl, this.httpOptions);
  }

}
