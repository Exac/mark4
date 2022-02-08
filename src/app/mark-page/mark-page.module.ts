import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkPageComponent } from './mark-page.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { RecordModule } from '../record/record.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';



@NgModule({
  declarations: [
    MarkPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MarkPageComponent}]),
    ButtonModule,
    ScrollPanelModule,
    RecordModule,
    InputNumberModule,
    SplitButtonModule,
    ConfirmPopupModule,
  ],
  exports: [
    MarkPageComponent,
    RouterModule,
  ],
  providers: [ConfirmationService],
})
export class MarkPageModule { }
