import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NumberSystem } from './number-system';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ng-number-system-converter',
  templateUrl: './number-system.component.html',
  styleUrls: ['./number-system.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class NumberSystemComponent implements OnInit {
  public numberConverterForm: FormGroup;
  public result: string;
  public resultBase: string;
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

  get number(): AbstractControl { return this.numberConverterForm.get('number'); }
  get fromBase(): AbstractControl { return this.numberConverterForm.get('fromBase'); }
  get toBase(): AbstractControl { return this.numberConverterForm.get('toBase'); }

  public onSubmit() {
    let number = this.number.value;
    let fromBase = this.fromBase.value;
    let toBase = this.toBase.value;

    try {
      let decimalNumber = NumberSystem.convertToDecimal(number, fromBase);
      this.result = NumberSystem.convertFromDecimal(decimalNumber, toBase);
      this.resultBase = toBase;
      this.error = '';
    } catch (e) {
      this.error = e.message;
    }
  }

}
