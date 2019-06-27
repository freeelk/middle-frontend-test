import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeModule} from './home/home.module';
import {ProductsModule} from './products/products.module';

const routes: Routes = [
  // { path: '', loadChildren: '/app/home/home.module#HomeModule'},
  { path: '', loadChildren: () => HomeModule},
  { path: 'home', loadChildren: () => HomeModule},
  // { path: 'products', loadChildren: '/app/products/products.module#ProductsModule'},
  { path: 'products', loadChildren: () => ProductsModule},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
