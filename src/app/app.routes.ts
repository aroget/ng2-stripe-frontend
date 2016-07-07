import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent,
         DashboardComponent,
         AccountComponent,
         ShopComponent,
         CheckoutComponent } from './+pages';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'account', component: AccountComponent },
  { path: 'checkout', component: CheckoutComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
