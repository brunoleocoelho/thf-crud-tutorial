import { Component } from '@angular/core';

import { ThfMenuItem } from '@totvs/thf-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<ThfMenuItem> = [
    { label: 'Home', link: '/home', icon: 'thf-icon-home' },
    { label: 'Customers', link: '/customers', icon: 'thf-icon-users' }
  ];

}
