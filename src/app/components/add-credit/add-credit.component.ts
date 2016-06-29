import { Component, OnInit } from '@angular/core';

import { AddCreditService } from './add-credit.service';
import { ADD_CREDIT } from '../../reducers';
import { Store } from '@ngrx/store';

declare var Stripe: any;
declare var stripe: any;

@Component({
    moduleId: module.id,
    selector: 'add-credit',
    template: `
    <form #form="ngForm" (submit)=onSubmit(form.value)>
        <select ngControl="amount">
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
        </select>
        <br>
        <input type="text" ngControl="creditCardNumber" placeholder="Credit Card Number">
        <br>
        <input type="text" ngControl="creditCardExpMonth" placeholder="Credit Card Expiration Month">
        <br>
        <input type="text" ngControl="creditCardExpYear" placeholder="Credit Card Expiration Year">
        <br>
        <input type="text" ngControl="creditCardCvc" placeholder="Credit Card CVC">
        <br>

        <button type="submit">Add Credit</button>
    </form>
    `,
    providers: [AddCreditService]
})
export class AddCreditComponent implements OnInit {
    constructor(
        private _service: AddCreditService,
        private _store: Store<any>
    ) { }

    ngOnInit() { }

    onSubmit(data) {
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
                        (res) => this.onPaymentSucces(res),
                        (err) => this.onPaymentError(err)
                    );
    }

    onPaymentSucces(data) {
        console.log(data);
        this._store.dispatch({
            type: ADD_CREDIT,
            payload: data.amount
        });
    }

    onPaymentError(err) {
        console.log(err);
    }
}
