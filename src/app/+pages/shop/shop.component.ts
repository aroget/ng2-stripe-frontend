import { Component, OnInit } from '@angular/core';

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

    constructor() {
        this.buildItems();
    }

    buildItems() {
        let price;
        for (let i = 0; i < 20; i++) {
            price = Math.floor((Math.random() * 1000) + 1);
            let currentItem = i + 1;
            this.items.push({
                name: `Item ${currentItem}`,
                price: price,
                image: `img-${currentItem}`
            });
        }
    }

    onItemAdded(item) {
        console.log('item added');
        console.log(item);
    }

    ngOnInit() {
        // console.log(this);
    }

}
