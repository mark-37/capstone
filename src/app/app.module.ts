import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent
    // ProductsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
