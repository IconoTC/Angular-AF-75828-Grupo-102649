import { Component } from '@angular/core';
import { CountersList } from './components/counters-list/counters-list';
import { Timestamp } from '../../core/components/timestamp/timestamp';

@Component({
  imports: [CountersList, Timestamp],
  selector: 'ind-dashboard-page',
  styleUrl: '../pages.css',
  styles: ``,
  template: ` 
    <h2>{{ title }}</h2> 
    <ind-counters-list />
    <ind-timestamp />
    `,
})
export default class DashboardPage {
  private readonly title = 'Dashboard';
}
