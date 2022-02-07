import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSettingsComponent } from './time-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InfoBoxModule } from '../info-box/info-box.module';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';



@NgModule({
  declarations: [TimeSettingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,
    InfoBoxModule,
    MessageModule,
    MessagesModule,
  ],
  exports: [TimeSettingsComponent],
})
export class TimeSettingsModule { }
