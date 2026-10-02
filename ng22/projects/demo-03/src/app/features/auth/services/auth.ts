import { Service } from '@angular/core';
import { LoginRequest, LoginResponse } from '../types/auth';
import { delay, firstValueFrom, Observable, of } from 'rxjs';

interface AuthOptions {
  success?: boolean;
  delayTime?: number;
}

const DEFAULT_AUTH_OPTIONS: AuthOptions = {
  success: true,
  delayTime: 1000,
};



@Service()
export class Auth {

  #generateToken(): string {
    // Generamos un token aleatorio simulado
    // (en un caso real, esto lo haría el backend)
    return Math.random().toString(36).substring(2);
  }

  #generateId(): number {
    // Generamos un id aleatorio simulado
    // (en un caso real, esto lo haría el backend)
    return Math.floor(Math.random() * 1000);
  }

  login(data: LoginRequest, options?: AuthOptions): Observable<LoginResponse> {
    const opts = { ...DEFAULT_AUTH_OPTIONS, ...options };

    const hasError =
      !opts.success || !data.email || !data.password || data.email.includes('error');

    if (hasError) {
      return of({
        error: 'Invalid credentials',
        token: '',
      } as LoginResponse).pipe(
        delay(opts.delayTime as number)
      );
    }


    return of({
      error: '',
      token: this.#generateToken(),
      info: {
        id: this.#generateId(),
        email: data.email,
        loginDate: new Date(),
        rememberMe: data.rememberMe,
      },
    } as LoginResponse).pipe(
      delay(opts.delayTime as number)
    );
  }

  loginPromise(data: LoginRequest, options?: AuthOptions): Promise<LoginResponse> {
    return firstValueFrom(this.login(data, options));
  }
}
