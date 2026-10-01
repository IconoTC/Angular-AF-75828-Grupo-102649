import { Component } from '@angular/core';
import { RegisterForm } from '../components/register-form/register-form';
import { Card } from '../../../core/design/card/card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RegisterForm, Card, RouterLink],
  selector: 'ind-register-page',
  styles: ``,
  template: `
  <ind-card>
    <ind-register-form />
  </ind-card>
  <p>Si ya tienes cuenta, <a [routerLink]="['/auth', 'login']">inicia sesión aquí</a>.</p>
  `,
})
export default class RegisterPage {}
