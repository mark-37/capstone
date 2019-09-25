import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';


import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Login } from '../models/login';
import { AuthenticationService } from '../services/authentication.service';

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

  constructor(private loginService: AuthenticationService) {

  }

  ngOnInit() {
    /* For Testing below */
    // $('#myModal').modal('show');
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

    if (this.form.valid) {
      console.info("Form is submitted");
     
      this.setEmail(this.form.value.name.email);
      this.setPassword(this.form.value.name.password);

      this.loginService.getUsers(this.getEmail()).subscribe((email) => {
        if (email[0] != undefined) {
          console.log(email[0]);
          this.loginService.checkPassword(this.getEmail(), this.getPassword()).subscribe(
            (data) => {
              if (data[0] != undefined) {
                const sessionObject = {
                  email: data[0].email
                }
                localStorage.clear();
                localStorage.setItem('sessionObject', JSON.stringify(sessionObject));
                console.log(`Welcome ${email[0].name}`);
                this.form.reset();
                $('#myModal').modal('hide');
              } else {
                console.log('Password Mismatch!');
                this.model.password = null;
                console.log(this.model);
                alert("Either the entered email is incorrect or password is incorrect!");
              }
            },
            (err) => console.error("Unable to send a get request: " + err)
          );
        } else {
          console.log("Email Not found");
          alert('Email not found');
        }
      },
        (err) => console.error(err)
      );
    }
  }

}
