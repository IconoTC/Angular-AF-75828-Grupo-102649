import { Service, signal } from '@angular/core';

@Service()
export class TimeService {

  readonly #time = signal(new Date());

  getTime() {
    return this.#time().getTime();
  }

}
