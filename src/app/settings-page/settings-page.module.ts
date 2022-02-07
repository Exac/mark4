import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SettingsPageComponent }]),
  ],
  exports: [
    SettingsPageComponent,
    RouterModule,
  ]
})
export class SettingsPageModule { }
