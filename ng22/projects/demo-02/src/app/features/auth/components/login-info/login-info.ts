import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RoutesRecognized } from '@angular/router';
import { LoginResponse } from '../../types/auth';

@Component({
  imports: [],
  selector: 'ind-login-info',
  styles: ``,
  template: ` <p>Login completed successfully.</p> `,
})
export class LoginInfo {
  readonly routerState = signal<LoginResponse | null>(null);
  readonly #router = inject(Router);
  readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.#router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        console.log('RoutesRecognized event:', event);
        const navigation = this.#router.getCurrentNavigation();
        if (navigation && navigation.extras.state) {
          this.routerState.set(navigation.extras.state as LoginResponse);
          console.log('Navigation state:', this.routerState());
        }
      }
    });
  }
}
