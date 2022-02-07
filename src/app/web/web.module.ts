import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';



@NgModule({
  declarations: [
    WebComponent
  ],
  exports: [
    WebComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebModule { }
