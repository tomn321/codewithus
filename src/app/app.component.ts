import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <customer-list></customer-list>
  `
})
export class AppComponent  {
  title = 'Customer Managment';
}
