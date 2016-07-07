import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { ADD_CART_ITEM } from '../../reducers/cart.reducer';
import { ShopItemComponent } from '../../components';
import { ShopItemInterface } from '../../components/shop-item/shop-item.interface';

@Component({
    moduleId: module.id,
    selector: 'shop',
    template: require('./shop.html'),
    styles: [require('./shop.scss')],
    directives: [
        ShopItemComponent
    ]
})
export class ShopComponent implements OnInit {
    private items: Array<ShopItemInterface> = [];
    // private selectedItem: any;

    constructor(
        private _store: Store<any>
    ) {
        this.buildItems();
    }

    buildItems() {
        let price;
        for (let i = 0; i < 21; i++) {
            price = Math.floor((Math.random() * 1000) + 1);
            let currentItem = i + 1;
            this.items.push({
                id: currentItem,
                name: `Item ${currentItem}`,
                price: price,
                image: 'https://unsplash.it/300/300?random'
            });
        }
    }

    // getItem(val, collection) {

    //     let item;
    //     if (val.id === )
    //     if (val.id === this.items.id) {
    //         return val;
    //     }
    //     return this.items.filter((el) => {

    //     })
    // }

    onItemAdded(item) {
        this._store.dispatch({
            type: ADD_CART_ITEM,
            payload: item
        });
    }

    ngOnInit() {
        // console.log(this);
    }

}
