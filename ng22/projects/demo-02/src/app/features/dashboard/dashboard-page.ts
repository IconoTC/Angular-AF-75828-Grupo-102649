import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'ind-dashboard-page',
  styleUrl: '../pages.css',
  styles: ``,
  template: ` <h2>{{ title }}</h2> `,
})
export default class DashboardPage {
  private readonly title = 'Dashboard';
}
