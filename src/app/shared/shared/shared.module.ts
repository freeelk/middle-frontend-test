import { NgModule } from '@angular/core';
import {ColumnsTextComponent} from '../columns-text/columns-text.component';
import {CommonModule} from '@angular/common';
import {AlertComponent} from '../alert/alert.component';

@NgModule({
  declarations: [
    ColumnsTextComponent,
    AlertComponent
  ],
  imports: [CommonModule],
  exports: [
    ColumnsTextComponent,
    CommonModule,
    AlertComponent
  ]
})
export class SharedModule { }
