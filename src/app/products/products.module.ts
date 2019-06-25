import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {productsRouter} from './products.router';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    productsRouter
  ]
})
export class ProductsModule { }
