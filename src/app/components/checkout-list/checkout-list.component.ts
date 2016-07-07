import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { cart, credit, notifications } from '../../reducers';
import { DEFAULT_CART_STATE } from '../../reducers/cart.reducer';
import { NEW_MESSAGE, DEFAULT_STATE } from '../../reducers/notifications.reducer';
import { USE_CREDIT } from '../../reducers/credit.reducer';
import { AppNotificationsComponent } from '../../components';

@Component({
    moduleId: module.id,
    selector: 'checkout-list',
    template: require('./checkout-list.html'),
    styles: [require('./checkout-list.scss')],
    directives: [AppNotificationsComponent]
})
export class CheckoutListComponent implements OnInit {
    items: any;
    orderTotal: number;

    constructor(private _store: Store<any>) {
        this._store.select('cart')
                   .subscribe((cart) => {
                       let total = [];
                       this.items = cart;
                       this.items.forEach((item) => total.push(item.price));
                       this.orderTotal = total.reduce((prev, curr) => {return prev + curr; }, 0 );
                   });
    }

    ngOnInit() { }

    placeOrder() {
        this._store.dispatch({
            type: USE_CREDIT,
            payload: this.orderTotal
        });
        this._store.dispatch({type: DEFAULT_CART_STATE});
        this._store.dispatch({
            type: NEW_MESSAGE,
            payload: {
                body: 'Thank you for your order!',
                class: 'alert--success'
            }
        })
    }

}