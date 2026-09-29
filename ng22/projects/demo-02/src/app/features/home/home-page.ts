import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'ind-home-page',
  styleUrl: '../pages.css',
  styles: ``,
  template: ` <h2>{{ title }}</h2> `,
})
export default class HomePage {
  private readonly title = 'Inicio';
}
