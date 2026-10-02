import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';
import { CounterState } from '../counters-list/counters-list';

const LIMIT = 5;

@Component({
  imports: [],
  selector: 'ind-counter',
  styles: `
    div {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .limit-reached {
      color: var(--color-primary-hot);
      margin-top: 0.5rem;
    }
    .negative {
      color: red;
    }
  `,
  template: `
    <!-- <p>Counter value: <output [class]='count() < 0 ? "negative" : ""'>{{ count() }}</output></p> -->
    <!-- <p>Counter value: <output [class]='{negative: count() < 0}'>{{ count() }}</output></p> -->
    <p>
      Counter value:
      <output [class.negative]="counterState().value < 0">{{ counterState().value }}</output>
    </p>
    <p>
      Clicks: <output>{{ counterState().clicks }}</output>
    </p>
    <div>
      <button
        [disabled]="counterState().value >= limit()"
        (click)="changeCount(1)"
        title="Increment"
      >
        ➕
      </button>
      <button
        [disabled]="counterState().value <= -limit()"
        (click)="changeCount(-1)"
        title="Decrement"
      >
        ➖
      </button>
      <button
        [disabled]="counterState().value === 0 && counterState().clicks === 0"
        (click)="resetCount()"
        title="Reset"
      >
        🟣
      </button>
    </div>
    <!-- Visualizado condicional -->
    <p [hidden]="counterState().value !== limit()" class="limit-reached">Has llegado al límite de {{ limit() }}</p>
    <!-- Renderizado condicional -->
    @if (counterState().value === -limit()) {
      <p class="limit-reached">Has llegado al límite de {{ limit() }}</p>
    }
  `,
})
export class Counter {
  private readonly limit = signal(LIMIT);
  counterInput = input.required<CounterState>();

  // protected counterState = signal<CounterState>({} as CounterState);

  // constructor() {
  //   effect(() => {
  //     this.counterState.set(this.counterInput());
  //   })
  // }

  protected counterState = linkedSignal<CounterState>(() => this.counterInput());

  // @Output() private readonly changeEvent = new EventEmitter()
  protected readonly changeEvent = output<CounterState>();

  changeCount(delta: number) {
    this.counterState.update((current) => ({
      ...current,
      value: current.value + delta,
      clicks: current.clicks + 1,
    }));
    this.changeEvent.emit(this.counterState());
  }

  resetCount() {
    this.counterState.update((current) => ({
      ...current,
      value: 0,
      clicks: 0,
    }));
    this.changeEvent.emit(this.counterState());
  }
}
