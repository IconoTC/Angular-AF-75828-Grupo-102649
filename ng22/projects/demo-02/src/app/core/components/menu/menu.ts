import { Component, input } from '@angular/core';
import { MenuOption } from '../../types/menu-option';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'ind-menu',
  styles: `
  nav {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1rem;
      }

      .vertical {
        flex-direction: column;
        a {
          font-size: 1.8rem;
        }
      }

      a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
      }
    }`,
  template: ` <nav>
    <ul>
  @for (item of options(); track item.label) {
    <li>
      <a [href]="item.path">
        {{ item.label }}
      </a>
    </li>
  }

      <!-- <li *ngFor="let item of menuItems()">{{ item.label }}</li> -->
    </ul>
  </nav>`,
})
export class Menu {
  readonly options = input.required<MenuOption[]>();
}
