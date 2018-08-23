import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NumberSystemModule } from 'number-system';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NumberSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
