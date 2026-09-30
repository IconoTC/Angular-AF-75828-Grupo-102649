import { Component, input } from '@angular/core';
import { MenuOption } from '../../types/menu-option';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive],
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
      .active {
        display: inline-block;
        color: var(--color-primary-hot);
        border-bottom: 2px solid var(--color-primary-hot);
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
      }
    }
  `,
  template: ` <nav>
    <ul>
      @for (item of options(); track item.label) {
        <li>
          <a [routerLink]="item.path" [routerLinkActive]="'active'">
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
