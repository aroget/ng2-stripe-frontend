import {
  it,
  inject,
  describe,
  beforeEachProviders,
} from '@angular/core/testing';

import { provideStore } from '@ngrx/store';
import { notifications, initialState, NotificationsState } from '../../reducers';

// Load the implementations that should be tested
import { AppNotificationsComponent } from './notifications.component';

const defaultMessage: NotificationsState = {
  body: 'Message Body',
  class: 'alert--success'
};

describe('Notifications Component', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AppNotificationsComponent,
    provideStore({
        notifications
    })
  ]);

  it('should load default state', inject([AppNotificationsComponent], (fixture) => {
    expect(fixture.message).toBe(initialState);
  }));

  it('should display right message and right class', inject([AppNotificationsComponent], (fixture) => {
    fixture.message = defaultMessage;

    expect(fixture.message.body).toBe(defaultMessage.body);
    expect(fixture.message.class).toBe(defaultMessage.class);

  }));

    it('should call closeNotification', inject([AppNotificationsComponent], (fixture) => {
    spyOn(fixture, 'closeNotification');
    fixture.closeNotification();

    expect(fixture.closeNotification).toHaveBeenCalled();

  }));

});

