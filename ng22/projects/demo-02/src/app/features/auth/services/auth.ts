/* eslint-disable @typescript-eslint/no-unused-vars */
import { Service } from '@angular/core';
import { LoginRequest, LoginResponse } from '../types/auth';
import { Observable, of } from 'rxjs';

@Service()
export class Auth {
  login(data: LoginRequest): Observable<LoginResponse> {
    return of({} as LoginResponse);
  }

  loginPromise(data: LoginRequest): Promise<LoginResponse> {
    return Promise.resolve({} as LoginResponse);
  }
}
