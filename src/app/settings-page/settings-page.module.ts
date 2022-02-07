import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { TimeSettingsModule } from '../time-settings/time-settings.module';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SettingsPageComponent}]),
    InputNumberModule,
    TimeSettingsModule,
    PanelModule,
  ],
  exports: [
    SettingsPageComponent,
    RouterModule,
  ]
})
export class SettingsPageModule {
}
