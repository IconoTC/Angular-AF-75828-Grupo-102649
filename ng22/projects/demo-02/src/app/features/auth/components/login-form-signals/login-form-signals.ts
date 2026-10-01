import { Component, inject, signal } from '@angular/core';
import { LoginRequest } from '../../types/auth';
import {
  email,
  form,
  FormField,
  minLength,
  PathKind,
  required,
  SchemaPathTree,
  FormRoot,
} from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

type LoginModel = LoginRequest;

// export interface LoginRequest {
//   email: string;
//   password: string;
//   rememberMe: boolean;
// }

@Component({
  imports: [FormField, JsonPipe, FormRoot],
  selector: 'ind-login-form-signals',
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 80vw;
      max-width: 400px;

      .form-control {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &.checkbox {
          flex-direction: row;
          align-items: center;
        }
      }
    }

    input,
    textarea {
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--color-primary-hot);
      background-color: var(--color-background-primary);
      border: none;
      border-block-end: 2px solid var(--color-primary);
      border-radius: 4px;

      &:focus-visible {
        outline: var(--color-primary) auto 1px;
        background-color: var(--color-background);
      }
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: var(--color-background);
      background-color: var(--color-primary);
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:disabled {
        background-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
        cursor: not-allowed;
      }
    }

    .error {
      color: var(--color-tertiary);
      font-size: 0.8rem;
    }
  `,
  template: `
    <h3>login-form-signals</h3>
    <form [formRoot]="fieldTree">
      <label for="email" class="form-control">
        <span>Email:</span>
        <input type="email" id="email" [formField]="fieldTree.email" />
      </label>
      @if (fieldTree.email()?.invalid() && fieldTree.email()?.touched()) {
        <p class="error">{{ fieldTree.email().errors()[0].message }}</p>
      }

      <label for="password" class="form-control">
        <span>Password:</span>
        <input type="password" id="password" [formField]="fieldTree.password" />
      </label>
      @if (fieldTree.password()?.invalid() && fieldTree.password()?.touched()) {
        <p class="error">{{ fieldTree.password().errors()[0].message }}</p>
      }

      <label for="remember" class="form-control checkbox">
        <input type="checkbox" id="remember" [formField]="fieldTree.rememberMe" />
        <span>Remember me</span>
      </label>

      <button type="submit" [disabled]="fieldTree().invalid() || isSending()">Login</button>
    </form>
    <pre>{{ fieldTree().value() | json }}</pre>
  `,
})
export class LoginFormSignals {
  readonly #auth = inject(Auth);
  readonly #router = inject(Router);

  private readonly isSending = signal(false);

  readonly #initialState: LoginModel = {
    email: '',
    password: '',
    rememberMe: false,
  };

  readonly #loginModel = signal<LoginModel>(this.#initialState);

  readonly #schema = (path: SchemaPathTree<LoginRequest, PathKind.Root>) => {
    required(path.email, {
      message: 'El email es obligatorio',
    });
    email(path.email, {
      message: 'El email no es válido',
    });
    required(path.password, {
      message: 'La contraseña es obligatoria',
    });
    minLength(path.password, 6, {
      message: 'La contraseña debe tener al menos 6 caracteres',
    });
  };

  protected readonly fieldTree = form(this.#loginModel, this.#schema, {
    submission: {
      action: this.#submitLogin.bind(this),
    },
  });

  async #submitLogin() {
    if (this.fieldTree().invalid()) {
      console.log('Formulario inválido');
      return;
    }
    this.isSending.set(true);
    try {
      const response = await this.#auth.loginPromise(this.fieldTree().value());
      this.fieldTree().reset(this.#initialState);

      console.log(response);

      this.#router.navigate(['auth', 'login', 'info'], {
        state: response,
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    } finally {
      this.isSending.set(false);
    }
  }
}
