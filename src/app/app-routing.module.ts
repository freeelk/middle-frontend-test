import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeModule} from './home/home.module';
import {ProductsModule} from './products/products.module';

const routes: Routes = [

  /**
   *  Не смог заставить это работать.
   */
  /*  { path: '', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule'},*/


{ path: '', loadChildren: () => HomeModule},
  { path: 'home', loadChildren: () => HomeModule},
  { path: 'products', loadChildren: () => ProductsModule},
  { path: '**', component: NotFoundComponent }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes);
