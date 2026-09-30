import { inject, InjectionToken, Service } from '@angular/core';

export type ErrorLevel = 0 | 1 | 2 | 3 | 4;

export const ERROR_LEVEL = new InjectionToken<ErrorLevel>('ERROR_LEVELS');

@Service()
export class Logger {
  readonly #errorLevel = inject(ERROR_LEVEL, { optional: true }) ?? 0;

  constructor() {
    console.log('Logger service initialized with error level:', this.#errorLevel);
  }

  get level(): ErrorLevel {
    return this.#errorLevel;
  }

  public error(message: string, ...rest: unknown[]): void {
    if (this.#errorLevel > 0) {
      console.error(message, ...rest);
    }
  }

  public warn(message: string, ...rest: unknown[]): void {
    if (this.#errorLevel > 1) {
      console.warn(message, ...rest);
    }
  }

  public info(message: string, ...rest: unknown[]): void {
    if (this.#errorLevel > 2) {
      console.info(message, ...rest);
    }
  }

  public log(message: string, ...rest: unknown[]): void {
    if (this.#errorLevel > 3) {
      console.log(message, ...rest);
    }
  }
}
