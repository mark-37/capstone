import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _url = 'http://13.235.95.22:3000/products';

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
  addProducts(productData: product){
    return this._http.post(this._url, productData, this.httpOptions);
  }

  /* Method to edit product on server */
  editProduct() {

  }

  /* Method to delete product on server */
  deleteProduct() {
    
  }

}
