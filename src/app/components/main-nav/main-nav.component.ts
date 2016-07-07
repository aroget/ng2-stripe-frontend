import { Component, OnInit, forwardRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Store } from '@ngrx/store';
import { CartComponent } from '../../components';


@Component({
    moduleId: module.id,
    selector: 'main-navigation',
    styles: [require('./main-nav.scss')],
    directives: [
        forwardRef(() => CartComponent),
        ROUTER_DIRECTIVES,
    ],
    template: require('./main-nav.html')
})
export class MainNavComponent implements OnInit {
    public credit;

    constructor(
        private _store: Store<any>
    ) {
        _store.select('credit')
                            .subscribe((data) => {
                                this.credit = data;
                            });
    }

    ngOnInit() { }

}
