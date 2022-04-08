import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    ProductComponent,
    HomeComponent,
    LoginComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
