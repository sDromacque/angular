import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { AddShopComponent } from './core/add-shop/add-shop.component';
import { HomeComponent } from './core/home/home.component';
import { ListShopComponent } from './core/list-shop/list-shop.component';
import { ShopDetailComponent } from './core/shop-detail/shop-detail.component';

const routes: Routes = [
  { path: 'add-shop', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ListShopComponent },
  { path: 'shop/:shopId', component: ShopDetailComponent },
  { path: '', component: AddShopComponent },

  { path: '**', redirectTo: 'shop' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
