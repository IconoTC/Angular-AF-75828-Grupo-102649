import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { LoginFormTd } from '../components/login-form-td/login-form-td';
import { RouterLink } from '@angular/router';
import { Card } from '../../../core/design/card/card';
import { LoginFormMdRx } from '../components/login-form-md-rx/login-form-md-rx';
import { LoginFormSignals } from '../components/login-form-signals/login-form-signals';
import { MenuOption } from '../../../core/types/menu-option';
import { Menu } from '../../../core/components/menu/menu';
import { LoginInfo } from '../components/login-info/login-info';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RoutesRecognized } from '@angular/router';
import { LoginResponse } from '../types/auth';

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
        <ind-login-info [routerState]="routerState()" />
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
    },
  ]);

  readonly routerState = signal<LoginResponse | null>(null);
  readonly #router = inject(Router);
  readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.#router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        console.log('RoutesRecognized event:', event);
        const navigation = this.#router.currentNavigation;

        if (!navigation()) {
          return;
        }

        const state = navigation()!.extras.state as LoginResponse | undefined;
        if (state) {
          this.routerState.set(state);
          console.log('Navigation state:', this.routerState());
        }
      }
    });
  }
}
