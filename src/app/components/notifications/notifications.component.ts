import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

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
             });
    }

    ngOnInit() { }

}