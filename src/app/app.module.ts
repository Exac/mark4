import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';

const routes: Routes = [{ path: '', component: WebComponent }];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    WebModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
