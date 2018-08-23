import { Component, OnInit } from '@angular/core';
import { NumberSystem } from './number-system';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ng-number-system-converter',
  templateUrl: './number-system.component.html',
  styles: []
})
export class NumberSystemComponent implements OnInit {
  public numberConverterForm: FormGroup;
  public result: string;
  public error: string;
  
  constructor() {}

  ngOnInit() {
    let baseValidators = [Validators.required, Validators.min(2), Validators.max(32)];
    this.numberConverterForm = new FormGroup({
      number: new FormControl(undefined, [Validators.required, Validators.pattern('[a-vA-V0-9]*')]),
      fromBase: new FormControl(undefined, baseValidators),
      toBase: new FormControl(undefined, baseValidators)
    });
  }

  public onSubmit() {
    let number = this.numberConverterForm.get('number').value;
    let fromBase = this.numberConverterForm.get('fromBase').value;
    let toBase = this.numberConverterForm.get('toBase').value;
    console.log(this);
    try {
      let decimalNumber = NumberSystem.convertToDecimal(number, fromBase);
      this.result = NumberSystem.convertFromDecimal(decimalNumber, toBase);
      this.error = '';
    } catch (e) {
      this.error = e.message;
    }
  }

}
