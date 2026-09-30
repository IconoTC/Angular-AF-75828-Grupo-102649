import { Component } from '@angular/core';
import { CountersList } from './components/counters-list/counters-list';

@Component({
  imports: [CountersList],
  selector: 'ind-dashboard-page',
  styleUrl: '../pages.css',
  styles: ``,
  template: ` 
    <h2>{{ title }}</h2> 
    <ind-counters-list />
    `,
})
export default class DashboardPage {
  private readonly title = 'Dashboard';
}
