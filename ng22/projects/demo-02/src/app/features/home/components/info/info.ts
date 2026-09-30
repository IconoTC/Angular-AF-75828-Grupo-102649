import { Component, inject, signal } from '@angular/core';
import { Timestamp } from '../../../../core/components/timestamp/timestamp';
import { TimeService } from '../../../../core/services/time';
import { Logger } from '../../../../core/services/logger';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  imports: [Timestamp, DatePipe, TitleCasePipe],
  providers: [
    // {
    //   provide: TimeService,
    //   useClass: TimeService
    // }
    TimeService,
  ],
  selector: 'ind-info',
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }

    p {
      max-width: 23rem;
    }

    footer {
      font-size: 0.9em;
      background-color: var(--color-background-primary);
      color: var(--color-primary-hot);
      border-top: 2px solid var(--color-primary);
      border-radius: 0.5rem;
      margin-top: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  template: `
    <h3>Información del proyecto</h3>
    <p>Este proyecto es un ejemplo de uso de Angular 22 y sus nuevas características.</p>
    <ul>
      <li>Angular 22</li>
      <li>TypeScript 6.0</li>
      <li>ES2026</li>
    </ul>
    <footer>
      <ul>
        <li>Autor: {{ author() }}</li>
        <li>Fecha: {{ currentDate() | date  : 'fullDate' | titlecase }}</li>
      </ul>
    </footer>
    <ind-timestamp />
  `,
})
export class Info {
  readonly #logger = inject(Logger);

  protected readonly author = signal('Alejandro Cerezo');
  protected readonly currentDate = signal(new Date());

  // Formato anterior de inyección de dependencias
  // constructor(protected readonly timeService: TimeService) {}


  constructor(
  ) {
    this.#logger.warn('Level ', this.#logger.level)
  }
}
