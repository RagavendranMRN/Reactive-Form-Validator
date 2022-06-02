import { Component, VERSION } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { CustomValidators } from './validators/custom-validators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public myForm;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required, CustomValidators.uniqueName],
      birthYear: ['', [Validators.required, CustomValidators.birthYear]],
    });
  }

  remove(i: number) {
    (<FormArray>this.myForm.controls.phoneNumbers).removeAt(i);
  }

  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }
}
