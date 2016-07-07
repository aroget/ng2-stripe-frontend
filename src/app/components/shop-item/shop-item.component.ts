import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter
} from '@angular/core';

import { ShopItemInterface } from './shop-item.interface';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    selector: 'shop-item',
    template: require('./shop-item.html'),
    styles: [require('./shop-item.scss')]
})
export class ShopItemComponent implements OnInit {
    @Input() data: ShopItemInterface;
    @Output() itemAdded: EventEmitter<any> = new EventEmitter();
    public availableCredit: any;

    constructor(private _store: Store<any>) {
        this._store.select('credit')
                   .subscribe((credit) => {
                       this.availableCredit = credit;
                   });
    }

    addToCart(item) {
        this.itemAdded.emit(item);
    }

    ngOnInit() {
        // console.log(this);
    }

}