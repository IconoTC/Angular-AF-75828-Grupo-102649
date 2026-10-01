import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'ind-login-form-md-rx',
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
    <h3>login-form-md-rx</h3>
    <form [formGroup]="form" (ngSubmit)="submitLogin()">
      <label for="email" class="form-control">
        <span>Email:</span>
        <input type="email" id="email" formControlName="email" />
      </label>
      @let email = form.get('email');
      @if (email?.invalid && email?.touched) {
        <div class="error">
          @if (email?.hasError('required')) {
            <p>El correo electrónico es obligatorio.</p>
          }
          @if (email?.hasError('email')) {
            <p>Por favor, introduce una dirección de correo electrónico válida.</p>
          }
        </div>
      }

      <label for="password" class="form-control">
        <span>Password:</span>
        <input type="password" id="password" formControlName="password" />
      </label>
      @let password = form.get('password');
      @if (password?.invalid && password?.touched) {
        <div class="error">
          @if (password?.hasError('required')) {
            <p>La contraseña es obligatoria.</p>
          }
          @if (password?.hasError('minlength')) {
            <p>La contraseña debe tener al menos 4 caracteres.</p>
          }
        </div>
      }

      <label for="remember" class="form-control checkbox">
        <input type="checkbox" id="remember" formControlName="rememberMe" />
        <span>Remember me</span>
      </label>

      <button type="submit" [disabled]="form.invalid || isSending()">Login</button>
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
})
export class LoginFormMdRx {

  // Forma alternativa de creación de un FormGroup 
  // protected readonly form = new FormGroup({
  //   email: new FormControl('', []),
  //   password: new FormControl('', []),
  //   remember: new FormControl(false),
  // });

  readonly #fb = inject(FormBuilder);
  readonly #auth = inject(Auth);
  readonly #destroyRef = inject(DestroyRef);
  readonly #router = inject(Router);

  private readonly isSending = signal(false);

  // readonly #initialFormValue: LoginRequest = {
  //   email: '',
  //   password: '',
  //   rememberMe: false,
  // };

  protected readonly form: FormGroup = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    rememberMe: [false],
  });

  submitLogin() {
    if (!this.form.valid) {
      console.log('Form is invalid');
      return;
    }

    this.isSending.set(true);
    this.#auth
      .login(this.form.value)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (response) => {
          this.isSending.set(false);
          console.log('submitLogin', this.form.value);
          this.form.reset();
          console.log('Login successful:', response);
          this.#router.navigate(['auth', 'login', 'info'], {
            state: response,
          });
        },
        error: (error) => {
          console.error('submitLogin error', error);
          this.isSending.set(false);
        },
      });
  }
}
