import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
}
