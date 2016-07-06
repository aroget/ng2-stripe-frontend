import {
    expect,
    it,
    describe,
    TestComponentBuilder,
    addProviders,
    inject,
} from '@angular/core/testing';
​
import { AppNotificationsComponent } from './notifications.component';
import {provide} from '@angular/core';

describe('testing notifications component', () => {
    // beforeEach(() => {
    // addProviders([MyService]);
    // });

    it('should display right message and class', inject(
        [TestComponentBuilder], (tcb) => {
            return tcb.createAsync(AppNotificationsComponent).then((fixture) => {
                expect(true).toBe(true);
            });
        }
    ));
});