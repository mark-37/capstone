import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { TruncatePipe } from './trancate.pipe';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent, TruncatePipe, EditProductComponent
    // , LoginComponent, RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
