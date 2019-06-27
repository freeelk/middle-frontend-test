import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import {productsRouter} from './products.router';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    SharedModule,
    productsRouter
  ]
})
export class ProductsModule { }
