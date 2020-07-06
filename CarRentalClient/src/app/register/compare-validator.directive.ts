import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
    selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {
    @Input('mustMatch') compareValidator: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return this.CompareValidator(this.compareValidator[0], this.compareValidator[1])(formGroup);
    }

    private CompareValidator(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
  
          // return null if controls haven't initialised yet
          if (!control || !matchingControl) {
            return null;
          }
  
          // return null if another validator has already found an error on the matchingControl
          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              return null;
          }
  
          // set error on matchingControl if validation fails
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
  }
}