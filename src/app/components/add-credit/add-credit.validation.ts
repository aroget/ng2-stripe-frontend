import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

    constructor() { }

    isNumber(month, target) {
        let regex = /^\d+$/;

        if (!regex.test(month)) {
            throw(`${target} is not a valid number`);
        }
    }

    isBlank(data) {
        if (data.trim() === '') {
            throw('All fields are required');
        }
    }

    isValidCreditCardNumber(number) {
        if (number.toString().length !== 16) {
            throw('This is not a valid credit card number');
        }
    }

    isValidMonth(month) {
        let validMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        if (validMonths.indexOf(parseInt(month, 10)) === -1) {
            throw('Month is not valid');
        }
    }

    isValidYear(year) {
        let thisYear = new Date().getFullYear();

        if (year < thisYear) {
            throw('Year is already passed');
        }
    }

}
