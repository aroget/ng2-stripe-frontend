import { Component, OnInit, Input } from '@angular/core';

import { AddCreditComponent, AppNotificationsComponent } from '../../components';
import { NEW_MESSAGE } from '../../reducers';
import { Store } from '@ngrx/store';


@Component({
    moduleId: module.id,
    selector: 'account',
    template: require('./account.html'),
    directives: [
        AddCreditComponent,
        AppNotificationsComponent
    ]
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

    onMessage(message) {
        this._store.dispatch({
            type: NEW_MESSAGE,
            payload: message
        });
    }

    ngOnInit() { }

}
