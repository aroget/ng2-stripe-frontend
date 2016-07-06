import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent,
         DashboardComponent,
         AccountComponent,
         ShopComponent } from './+pages';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'account', component: AccountComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
