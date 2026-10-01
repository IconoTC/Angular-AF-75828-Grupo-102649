import { Component, input } from '@angular/core';
import { LoginResponse } from '../../types/auth';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'ind-login-info',
  styles: ``,
  template: `
    @if (routerState()?.error) {
      <p>Error: {{ routerState()?.error }}</p>
    } @else {
      <p>Saludo: {{ routerState()?.info?.email }}</p>
    }
    <pre>{{ routerState() | json }}</pre>
  `,
})
export class LoginInfo {
  readonly routerState = input.required<LoginResponse | null>();
}
