import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';
import { RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { TimeSettingsModule } from '../time-settings/time-settings.module';
import { PanelModule } from 'primeng/panel';
import { StorageSettingsModule } from '../storage-settings/storage-settings.module';


@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SettingsPageComponent}]),
    InputNumberModule,
    TimeSettingsModule,
    PanelModule,
    StorageSettingsModule,
  ],
  exports: [
    SettingsPageComponent,
    RouterModule,
  ]
})
export class SettingsPageModule {
}
