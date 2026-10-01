import { Component, input, signal } from '@angular/core';
import { LoginFormTd } from '../components/login-form-td/login-form-td';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/design/card/card';
import { LoginFormMdRx } from '../components/login-form-md-rx/login-form-md-rx';
import { LoginFormSignals } from '../components/login-form-signals/login-form-signals';
import { MenuOption } from '../../../core/types/menu-option';
import { Menu } from '../../../core/components/menu/menu';
import { LoginInfo } from '../components/login-info/login-info';

type FormType = 'td' | 'md-rx' | 'signals' | 'info';

@Component({
  imports: [Card, LoginFormTd, LoginFormMdRx, LoginFormSignals, LoginInfo, RouterLink, Menu],
  selector: 'ind-login-page',
  styles: ``,
  template: `
    <ind-menu [options]="menuOptions()" />
    <ind-card>
      @if (formType() === 'td') {
        <ind-login-form-td />
      } @else if (formType() === 'md-rx') {
        <ind-login-form-md-rx />
      } @else if (formType() === 'signals') {
        <ind-login-form-signals />
      } @else if (formType() === 'info') {
        <ind-login-info />
      } @else {
        <p>Loading...</p>
      }
    </ind-card>
    <p>Si no tienes cuenta, <a [routerLink]="['/auth', 'register']">regístrate aquí</a>.</p>
  `,
})
export default class LoginPage {
  readonly formType = input<FormType>();
  readonly menuOptions = signal<MenuOption[]>([
    {
      label: 'Formulario TD',
      path: '../td',
    },
    {
      label: 'Formulario MD-RX',
      path: '../md-rx',
    },
    {
      label: 'Formulario Signals',
      path: '../signals',
    }
  ]);
}
