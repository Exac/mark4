import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageSettingsComponent } from './storage-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [StorageSettingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [StorageSettingsComponent],
})
export class StorageSettingsModule { }
