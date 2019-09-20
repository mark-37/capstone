import { Component, OnInit } from '@angular/core';

import { ProductsService } from './services/products.service';

import { $ } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'capstone';

  constructor() {

  }

  ngOnInit() {

  }

}
