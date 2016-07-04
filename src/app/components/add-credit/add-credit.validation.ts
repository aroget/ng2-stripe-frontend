import { FormControl } from '@angular/forms';

export function isNumber(c: FormControl) {
  let NUMBER_REGEX = /^\d+$/;

  return NUMBER_REGEX.test(c.value) ? null : {
    isNumber: {
      valid: false
    }
  };
}

export function isValidCreditCardNumber(c: FormControl) {

  return c.value.toString().length === 16 ? null : {
    isValidCreditCardNumber: {
      valid: false
    }
  };
}

export function isValidDate(c: FormControl) {
    let today = new Date();
    let creditCardExpMonth = parseInt(c.value.split('/')[0], 10);
    let creditCardExpYear = parseInt(c.value.split('/')[1], 10);
    let expDate = new Date(creditCardExpYear, creditCardExpMonth);

    return expDate > today ? null : {
        isValidDate: {
            valid: false
        }
    };
}
