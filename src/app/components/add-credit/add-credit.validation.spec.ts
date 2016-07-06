import { isNumber,
         isValidCreditCardNumber,
         isValidDate
} from './add-credit.validation';
import {
    expect,
    it,
    describe
} from '@angular/core/testing';

​import { FormControl } from '@angular/forms';
​
describe('Add Credit Validation', () => {

    it('should return null if not a number', () => {
        let input = new FormControl('0');

        input.updateValue(123);

        expect(isNumber(input)).toBeNull();
    });

    it('should return false if not a number', () => {
        let input = new FormControl('0');
        let expected = {
            isNumber: {
                valid: false
            }
        };

        input.updateValue('string');

        expect(isNumber(input)).toEqual(expected);
    });

    it('should return null if credit card number is 16 char long', () => {
        let input = new FormControl('0');

        input.updateValue(4242424242424242);

        expect(isValidCreditCardNumber(input)).toBeNull();
    });

    it('should return null if credit card number is not 16 char long', () => {
        let input = new FormControl('0');
        let expected = {
            isValidCreditCardNumber: {
                valid: false
            }
        };

        input.updateValue(424242424242424);

        expect(isValidCreditCardNumber(input)).toEqual(expected);
    });

    it('should return null if valid date', () => {
        let input = new FormControl('0');
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let nextYear = year + 1;

        input.updateValue(`${month}/${nextYear}`);

        expect(isValidDate(input)).toBeNull();
    });

    it('should return null if not valid date', () => {
        let input = new FormControl('0');
        let expected = {
            isValidDate: {
                valid: false
            }
        };

        input.updateValue('03/2000');

        expect(isValidDate(input)).toEqual(expected);
    });
});