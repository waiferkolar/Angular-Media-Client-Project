import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>`
})
export class AppComponent {
  title = 'app';
}
