import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NumberSystemModule, NumberSystemComponent } from 'number-system';

import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    NumberSystemModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const numberSystemConverter = createCustomElement(NumberSystemComponent, {injector: this.injector});
    customElements.define('number-system-converter', numberSystemConverter);
  }
 }
