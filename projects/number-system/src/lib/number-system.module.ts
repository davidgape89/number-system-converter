import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { NumberSystemComponent } from './number-system.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [NumberSystemComponent],
  exports: [NumberSystemComponent],
  entryComponents: [NumberSystemComponent]
})
export class NumberSystemModule { 
  constructor(private injector: Injector) {
    const numberSystemConverter = createCustomElement(NumberSystemComponent, {injector});
    customElements.define('number-system-converter', numberSystemConverter);
  }
}
