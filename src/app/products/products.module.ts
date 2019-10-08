import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { TruncatePipe } from './trancate.pipe';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';

@NgModule({
  declarations: [ProductsComponent, TruncatePipe
    // , LoginComponent, RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProductsModule { }
