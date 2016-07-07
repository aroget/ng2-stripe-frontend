import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    selector: 'cart',
    template: require('./cart.html'),
    styles: [require('./cart.scss')],
    directives: [ROUTER_DIRECTIVES]
})
export class CartComponent implements OnInit {
    items: any;
    total: number;
    isOpen: boolean = false;

    constructor(private _store: Store<any>) {
        this._store.select('cart')
                   .subscribe((cart) => {
                       this.items = cart;
                       this.total = this.items.length;
                   });
    }

    ngOnInit() {
        // console.log(this);
    }

}
