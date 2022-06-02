import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static birthYear(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 85;
    const maxYear = currentYear - 18;
    const isValid =
      !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
    const message = {
      years: {
        message:
          'The year must be a valid number between ' +
          minYear +
          ' and ' +
          maxYear,
      },
    };
    return isValid ? null : message;
  }

  static minLength(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    console.log(numValue);
    const isValid = !isNaN(numValue) && numValue != 0;
    const message = {
      years: {
        message: 'Minimum length should be greater than zero',
      },
    };

    return isValid ? null : message;
  }
  static uniqueName(c: FormControl): Promise<ValidationErrors> {
    const message = {
      uniqueName: {
        message: 'The name is not unique',
      },
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(c.value === 'Existing' ? message : null);
      }, 1000);
    });
  }
}
