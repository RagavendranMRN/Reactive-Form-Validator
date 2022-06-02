import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'show-errors',
  template: `
    <ul *ngIf="shouldShowErrors()">
      <li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li>
    </ul>
  `,
})
export class ShowErrorsComponent {
  private static readonly errorMessages = {
    required: () => 'This field is required',
    years: (params) => params.message,
    minLength: (params) => params.message,
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((field) => {
      return this.getMessage(field, this.control.errors[field]);
    });
  }

  private getMessage(type: string, params: any) {
    console.log(type, params);
    return ShowErrorsComponent.errorMessages[type](params);
  }
}
