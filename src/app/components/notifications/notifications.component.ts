import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { DEFAULT_STATE } from '../../reducers/notifications.reducer';

export interface Notification {
    body: string;
    class: string;
}

@Component({
    moduleId: module.id,
    selector: 'app-notifications',
    styles: [require('./notifications.scss')],
    template: require('./notifications.html')
})
export class AppNotificationsComponent implements OnInit, OnDestroy {

    message: any;

    constructor(
        private _store: Store<Notification>
    ) {
       _store.select('notifications')
             .subscribe((data) => this.message = data );
    }

    closeNotification() {
        this._store.dispatch({
            type: DEFAULT_STATE
        });
    }

    ngOnDestroy() {
        this._store.dispatch({
            type: DEFAULT_STATE
        });
    }

    ngOnInit() {}

}