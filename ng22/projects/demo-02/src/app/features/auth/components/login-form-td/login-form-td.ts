import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginRequest } from '../../types/auth';
import { Auth } from '../../services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'ind-login-form-td',
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
    <p>login-form-td works!</p>
    <form #form #ngForm="ngForm" (ngSubmit)="login(ngForm)">
      <label for="email" class="form-control">
        <span>Email:</span>
        <input type="email" id="email" name="email" ngModel required email />
      </label>
      @if (ngForm.controls['email']?.invalid && ngForm.controls['email']?.touched) {
        <div class="error">
          @if (ngForm.controls['email']?.hasError('required')) {
            <p>El correo electrónico es obligatorio.</p>
          }
          @if (ngForm.controls['email']?.hasError('email')) {
            <p>Por favor, introduce una dirección de correo electrónico válida.</p>
          }
        </div>
      }

      <label for="password" class="form-control">
        <span>Password:</span>
        <input type="password" id="password" name="password" ngModel required minlength="5" />
      </label>

      @if (ngForm.controls['password']?.invalid && ngForm.controls['password']?.touched) {
        <div class="error">
          @if (ngForm.controls['password']?.hasError('required')) {
            <p>La contraseña es obligatoria.</p>
          }
          @if (ngForm.controls['password']?.hasError('minlength')) {
            <p>La contraseña debe tener al menos 5 caracteres.</p>
          }
        </div>
      }

      <label for="remember" class="form-control checkbox">
        <input type="checkbox" id="remember" name="rememberMe" [ngModel]="false" />
        <span>Remember me</span>
      </label>

      <button type="submit" [disabled]="ngForm.invalid || isSending()">Login</button>
    </form>

    <pre>{{ ngForm.value | json }}</pre>
  `,
})
export class LoginFormTd {

  readonly #auth = inject(Auth);
  readonly #destroyRef = inject(DestroyRef);
  readonly #router = inject(Router);

  private readonly isSending = signal(false);

  readonly #initialFormValue: LoginRequest = {
    email: '',
    password: '',
    rememberMe: false,
  };

  // readonly form = viewChild<ElementRef<HTMLFormElement>>('form');
  // readonly ngForm = viewChild<NgForm>('ngForm');
  // constructor() {
  //   effect(() => {
  //     console.log('Form value:', this.ngForm());
  //     console.log('Form', this.form());
  //   });
  // }

  login(ngForm: NgForm) {
    this.isSending.set(true);
    if (ngForm.valid) {

      console.log('Form submitted:', ngForm.value);

      this.#auth.login(ngForm.value, {delayTime: 3000})
      .pipe(
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe({
        next: (response) => {
          this.isSending.set(false);
          ngForm.resetForm(this.#initialFormValue);
          console.log('Login successful:', response);
          this.#router.navigate(['auth','login','info'], {
            state: response
          });
          // Aquí puedes manejar la respuesta exitosa, como redirigir al usuario o almacenar el token.
        },
        error: (error) => {
          this.isSending.set(false);
          console.error('Login failed:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario.
        }
      });


    } else {
      console.log('Form is invalid');
    }
  }
}
