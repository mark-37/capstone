import { Component, OnInit } from '@angular/core';

import { ProductsService } from './services/products.service';

import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'capstone';

  currentUser: string = null;
  currentSelection: string = 'Any';


  constructor() {

  }

  ngOnInit() {

  }

  isLoggedIn() {
    let status: Boolean= false;

    if(localStorage.getItem("sessionObject")) {
      status = true;
      this.currentUser = JSON.parse(localStorage.getItem("sessionObject"));
    }

    return status;

  }

  sample(e) {
    e.preventDefault();
    console.log(e.target.innerText);

    const controller: string = e.target.innerText;

    if(controller.toLocaleLowerCase() == "login") {
      $('#myModal').modal('show');
      this.currentUser = JSON.parse(localStorage.getItem("sessionObject"));
    } else {
      $('#registerModal').modal('show');
    }

  }

  logout() {
    console.log("Logout Confirmed!");
    $('#dropdown-menu-content').removeClass('show');
    localStorage.clear();
  }


}
