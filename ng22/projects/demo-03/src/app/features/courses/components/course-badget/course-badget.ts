import { Component, inject } from '@angular/core';
import { CoursesStore } from '../../services/courses.store';

@Component({
  imports: [],
  selector: 'ind-course-badget',
  styles: `
    p {
      background-color: var(--color-primary);
      color: white;
      padding: 0.5rem;
      border-radius: 0.25rem;
    }
  `,
  template: ` <p>Cursos: {{ store.courses().length }}</p> `,
})
export class CourseBadge {
  readonly store = inject(CoursesStore);
}
