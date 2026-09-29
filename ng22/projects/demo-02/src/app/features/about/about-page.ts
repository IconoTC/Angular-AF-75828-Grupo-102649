import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'ind-about-page',
  styleUrl: '../pages.css',
  styles: ``,
  template: ` <h2>{{ title }}</h2> `,
})
export default class AboutPage {
  private readonly title = 'Sobre Nosotros';
}
