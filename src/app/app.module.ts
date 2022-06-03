import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FooterComponent } from './core/footer/footer.component';
import { ListShopComponent } from './core/list-shop/list-shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopDetailComponent } from './core/shop-detail/shop-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AddShopComponent } from './core/add-shop/add-shop.component';
import { ErrorMessageFormComponent } from './core/shared/error-message-form/error-message-form.component';
import { ValdemortModule } from 'ngx-valdemort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ListShopComponent,
    ShopDetailComponent,
    AddShopComponent,
    ErrorMessageFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LeafletModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ValdemortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
