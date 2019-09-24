import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { user } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _url='http://localhost:3000/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getUsers(email: string) {
    return this._http.get(this._url+`?q=${email}`, this.httpOptions);
  }

  register(user: user) {
    return this._http.post(this._url, user, this.httpOptions);
  }

  updateUserInfo(user: user) {
    return this._http.put(this._url, user, this.httpOptions);
  }

  deleteUserInfo(id: number) {
    return this._http.delete(this._url+`/${id}`, this.httpOptions);
  }

}
