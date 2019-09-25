import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import * as $ from 'jquery';
import { RegisterModel } from '../models/register';
import { AuthenticationService } from '../services/authentication.service';
declare var $: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  model: RegisterModel = new RegisterModel();
  @ViewChild('registerForm') registerForm: any;

  constructor(private _auth: AuthenticationService) {


  }

  ngOnInit() {
    /**
     * For Testing Purpose
     * $('#registerModal').modal('show');
     */
    
  }

  onSubmit() {
    console.log("Form Submitted!");
    // console.log(this.registerForm.value);
    this._auth.getUsers(this.model.email).subscribe((data) => {
      if (data[0] == undefined) {
        if (this.model.password1 === this.model.password2 && this.model.tos) {
          const user = {
            id: null,
            name: this.model.username,
            password: this.model.password1,
            email: this.model.email,
            pin: this.model.pin
          }

          this._auth.register(user).subscribe((data) => {
            console.log(data);
            this.registerForm.reset();
            $('#registerModal').modal('hide');
          },
            (err) => console.error('Error at Registration Form Submit:\n', err)
          );

        } else {
          if(!this.model.tos) {
            console.log('Kindly accept the tos');
          } else {
            alert('Password Mismatch');
          }
        }
      } else {
        alert('User with the  email already exist');
      }
    }, (err) => { console.error(err) });


  }

}
