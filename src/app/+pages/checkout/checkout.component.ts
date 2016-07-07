import { Component, OnInit } from '@angular/core';

import { CheckoutListComponent } from '../../components';

@Component({
    moduleId: module.id,
    selector: 'checkout',
    template: require('./checkout.html'),
    styles: [require('./checkout.scss')],
    directives: [CheckoutListComponent]
})
export class CheckoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
