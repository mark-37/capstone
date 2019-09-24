import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var $ : any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() {

    
   }

  ngOnInit() {
    $('document').ready(function() {
      $('#myModal').modal('show');
    });

    
  }

}
