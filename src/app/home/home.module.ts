import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {homeRouter} from './home.router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    homeRouter
  ]
})
export class HomeModule { }
