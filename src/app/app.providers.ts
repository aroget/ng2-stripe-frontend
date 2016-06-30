import { ELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { provideStore } from '@ngrx/store';
import { credit, notifications } from './reducers';

const ENV_PROVIDERS = [];

if (process.env.ENV !== 'build') {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

ENV_PROVIDERS.push([
    ...HTTP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS,
    provideStore({
        credit,
        notifications
    })
]);

export const PROVIDERS = ENV_PROVIDERS;
