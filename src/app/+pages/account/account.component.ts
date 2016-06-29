import { Component, OnInit } from '@angular/core';

import { AddCreditComponent } from '../../components';
import { Store } from '@ngrx/store';


@Component({
    moduleId: module.id,
    selector: 'account',
    directives: [AddCreditComponent],
    template: require('./account.html')
})
export class AccountComponent implements OnInit {
    public credit;
    constructor(
        private _store: Store<any>
    ) {
        this.credit = _store
                            .select('credit')
                            .subscribe((val) => {
                                this.credit = val;
                            });
    }

    ngOnInit() { }

}