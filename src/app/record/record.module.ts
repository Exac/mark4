import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    RecordComponent
  ],
  exports: [
    RecordComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    ChipModule,
    ButtonModule,
  ]
})
export class RecordModule {
}
