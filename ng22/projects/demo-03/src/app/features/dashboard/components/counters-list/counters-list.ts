import { Component, computed, signal } from '@angular/core';
import { Counter } from '../counter/counter';
import { Card } from '../../../../core/design/card/card';

export type CounterState = {
  id: number;
  value: number;
  clicks: number;
};

const COUNTERS: CounterState[] = [
  { id: 109, value: 10, clicks: 0 },
  { id: 203, value: 0, clicks: 0 },
  { id: 304, value: 0, clicks: 0 },
];

@Component({
  imports: [Counter, Card],
  selector: 'ind-counters-list',
  styles: ``,
  template: `
    <p>Total value: {{ totalValue() }}</p>
    <p>Total clicks: {{ totalClicks() }}</p>
    @for (item of counters(); track $index) {
      <ind-card>
        <ind-counter (changeEvent)="handleChange($event)" [counterInput]="item" />
      </ind-card>
    }
  `,
})
export class CountersList {
  counters = signal<CounterState[]>(COUNTERS);


  private readonly totalValue = computed(() => this.counters().reduce((acc, counter) => acc + counter.value, 0));
  private readonly totalClicks = computed(() => this.counters().reduce((acc, counter) => acc + counter.clicks, 0));

  protected handleChange(data: CounterState)  {
    console.log('Counter changed', data);
    this.counters.update((counters) => {
      const index = counters.findIndex((c) => c.id === data.id);
      if (index !== -1) {
        counters[index] = { ...counters[index], ...data };
      }
      return [...counters];
    });
  }
}
