import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES],
    selector: 'main-navigation',
    styles: [require('./main-nav.scss')],
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
