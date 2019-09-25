import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Importing MD5 hashing */
import {Md5} from 'ts-md5/dist/md5';
import * as uuiud from 'uuid';

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
    return this._http.get(this._url+`?email=${email}`, this.httpOptions);
  }

  register(User: user) {
    const md5 = new Md5();
    User.password = md5.appendStr(User.password).end().toString();
    User.id = uuiud.v4();
    console.log(User.id);
    
    return this._http.post(this._url, User, this.httpOptions);
  }

  updateUserInfo(user: user) {
    return this._http.put(this._url, user, this.httpOptions);
  }

  deleteUserInfo(id: number) {
    return this._http.delete(this._url+`/${id}`, this.httpOptions);
  }

  checkPassword(email: string, password: string) {
    const md5 = new Md5();
    password = md5.appendStr(password).end().toString();
    // console.log("hashed Password:"+password);
    return this._http.get(this._url+`?email=${email}&&password=${password}`,this.httpOptions);
  }

}
