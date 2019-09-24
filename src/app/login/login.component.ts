import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Login } from '../models/login';

declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  model: Login = new Login();

  private email: string;
  private password: string;

  @ViewChild('loginForm') form: any;

  constructor() {

  }

  ngOnInit() {
    $('document').ready(function () {
      $('#myModal').modal('show');
    });
  }

  /* Getters */
getEmail(): string {
  return this.email;
}

getPassword(): string {
  return this.password;
}


  /* Setters */
  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  onSubmit() {
    if(this.form.valid) {
      console.info("Form is submitted");
      // console.info(this.form.value.name.email);
      this.setEmail(this.form.value.name.email);
      this.setPassword(this.form.value.name.password);
      
      console.log(this.getEmail(), this.getPassword());
      this.form.reset();
      // $('#myModal').modal('hide');
    }
  }

}
