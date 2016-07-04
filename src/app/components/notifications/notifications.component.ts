import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { DEFAULT_STATE } from '../../reducers/notifications.reducer';

interface Notification {
    body: string;
    class: string;
}

@Component({
    moduleId: module.id,
    selector: 'app-notifications',
    template: require('./notifications.html')
})
export class AppNotificationsComponent implements OnInit {

    message: any;

    constructor(
        private _store: Store<Notification>
    ) {
       _store.select('notifications')
             .subscribe((data) => {
                this.message = data;
                setTimeout(() => this.clearMessages(), 3000);
             });
    }

    clearMessages() {
        this._store.dispatch({
            type: DEFAULT_STATE
        });
    }

    ngOnInit() { }

}