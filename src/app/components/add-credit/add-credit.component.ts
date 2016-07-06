import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES  } from '@angular/forms';
import { isNumber, isValidCreditCardNumber, isValidDate } from './add-credit.validation';

import { AddCreditService } from './add-credit.service';
import { ADD_CREDIT } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    selector: 'add-credit',
    template: require('./add-credit.html'),
    styles: [require('./add-credit.scss')],
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [
        AddCreditService
    ]
})
export class AddCreditComponent implements OnInit {
    @Output() onMessageChange = new EventEmitter();
    form: FormGroup;
    credit: number = 0;
    amount = new FormControl('0', [Validators.required, isNumber]);

    constructor(
        private fb: FormBuilder,
        private _service: AddCreditService,
        private _store: Store<any>
    ) {
        this.form = fb.group({
            'amount': this.amount,
            'creditNameOnCard': ['', Validators.required],
            'creditCardNumber': ['', [Validators.required, isNumber, isValidCreditCardNumber]],
            'creditCardExpirationDate': ['', [Validators.required, isValidDate]],
            'creditCardCvc': ['', [Validators.required, isNumber]],
        });

    }

    ngOnInit() { }

    increaseCredit() {
        this.credit += 100;
        this.amount.updateValue(this.credit);
    }

    decreaseCredit() {
        this.credit -= 100;
        this.amount.updateValue(this.credit);
    }

    onSubmit(data) {
        // 4242424242424242
        let creditCardExpMonth = parseInt(data.creditCardExpirationDate.split('/')[0], 10);
        let creditCardExpYear = parseInt(data.creditCardExpirationDate.split('/')[1], 10);

        this._service
                    .charge(data.creditNameOnCard,
                            data.creditCardNumber,
                            creditCardExpMonth,
                            creditCardExpYear,
                            data.creditCardCvc,
                            'cad',
                            data.amount
                            )
                    .subscribe(
                        (res) => {
                            let status = res.statusCode;

                            switch (status) {
                                case (402):
                                    this.onPaymentError(res.message);
                                    break;
                                default:
                                     this.onPaymentSucces(res);
                                    break;
                            }
                        },
                        (err) => this.onPaymentError(err)
                    );
    }

    onPaymentSucces(data) {
        this._store.dispatch({
            type: ADD_CREDIT,
            payload: data.amount
        });
        this.onMessageChange.emit({
            body: 'Credit successfully added',
            class: 'alert--success'
        });
    }

    onPaymentError(err) {
        console.log(err);
        this.onMessageChange.emit({
            body: err,
            class: 'alert--danger'
        });
    }
}
