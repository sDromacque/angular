import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './com/home/home.component';
import { AboutComponent } from './com/about/about.component';
import { NavbarComponent } from './com/navbar/navbar.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, LeafletModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
