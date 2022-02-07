import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

const webRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../mark-page/mark-page.module').then(m => m.MarkPageModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings-page/settings-page.module').then(m => m.SettingsPageModule),
  }
];

@NgModule({
  declarations: [
    WebComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(webRoutes),
    MenubarModule,
  ],
  exports: [RouterModule, WebComponent],
})
export class WebModule { }
