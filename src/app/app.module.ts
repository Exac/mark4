import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const webRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./mark-page/mark-page.module').then(m => m.MarkPageModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings-page/settings-page.module').then(m => m.SettingsPageModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(webRoutes, {enableTracing: true}),
    MenubarModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
