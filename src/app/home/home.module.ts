import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {homeRouter} from './home.router';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    homeRouter
  ]
})
export class HomeModule { }
