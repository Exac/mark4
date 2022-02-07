import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkPageComponent } from './mark-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MarkPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MarkPageComponent }]),
  ],
  exports: [
    MarkPageComponent,
    RouterModule,
  ]
})
export class MarkPageModule { }
