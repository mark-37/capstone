import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getProducts() {
    return this._http.get(this._url, this.httpOptions);
  }

}
