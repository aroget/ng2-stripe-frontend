import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MainNavComponent } from './components';


import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  directives: [
    ...ROUTER_DIRECTIVES,
    MainNavComponent
  ],
  template: `
  <main-navigation></main-navigation>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor() {
  }
}
