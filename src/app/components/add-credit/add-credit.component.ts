import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ValidationService } from './add-credit.validation';

import { AddCreditService } from './add-credit.service';
import { ADD_CREDIT } from '../../reducers';
import { Store } from '@ngrx/store';

declare var Stripe: any;
declare var stripe: any;

@Component({
    moduleId: module.id,
    selector: 'add-credit',
    template: require('./add-credit.html'),
    styles: [require('./add-credit.scss')],
    providers: [
        AddCreditService,
        ValidationService
    ]
})
export class AddCreditComponent implements OnInit {
    @Output() onMessageChange = new EventEmitter();

    constructor(
        private _validate: ValidationService,
        private _service: AddCreditService,
        private _store: Store<any>
    ) { }

    ngOnInit() { }

    onSubmit(data) {
        console.log(typeof data);

        try {
            this._validate.isNumber(data.creditCardNumber, 'Card number');
            this._validate.isNumber(data.creditCardExpMonth, 'Card expiration date');
            this._validate.isNumber(data.creditCardExpYear, 'Card expiration year');
            this._validate.isNumber(data.creditCardCvc, 'Card CVC');
            this._validate.isValidCreditCardNumber(data.creditCardNumber);
            this._validate.isValidMonth(data.creditCardExpMonth);
            this._validate.isValidYear(data.creditCardExpYear);
        } catch (e) {
            this.onMessageChange.emit({
                body: e,
                class: 'alert--danger'
            });
            return;
        }
        // 4242424242424242
        this._service
                    .charge(data.creditCardNumber,
                            data.creditCardExpMonth,
                            data.creditCardExpYear,
                            data.creditCardCvc,
                            'cad',
                            data.amount
                            )
                    .subscribe(
                        (res) => {
                            console.log(res)
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
