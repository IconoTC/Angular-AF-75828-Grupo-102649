import { Component, signal } from '@angular/core';
import { Course } from '../../types/course';
import { COURSES } from '../../data/courses';

@Component({
  imports: [],
  selector: 'ind-course-item-signals',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin: 1rem;
      padding: 1rem;
      border: 1px solid var(--color-primary);
      border-radius: 4px;
    }
    h3, p {
      margin: 0;
    }
  `,
  template: `
    <img [src]="course().image" [alt]="course().title" />
    <h3>{{ course().title }} (Signals demo)</h3>
    <p>{{ course().description }}</p>
    <p>{{ plainText}}
  `,
})
export class CourseItemSignals {
  protected readonly course = signal<Course>(COURSES[0]);
  protected plainText = "Ejemplo de texto sin signals"

  constructor() {
    setTimeout(() => {
      this.plainText = "Texto cambiado sin signals"
      console.log(this.plainText)
    }, 2000)

    setTimeout(() => {
      this.course.update((course) => ({
        ...course,
        title: 'Curso de Angular (Signals)',
        description: 'Aprende Angular con Signals en este curso actualizado.',
      }));

      // Mala práctica
      // this.course.set({
      //   ...this.course(),
      //   title: 'Curso de Angular (Signals) - Set',
      //   description: 'Aprende Angular con Signals en este curso actualizado. (Set)',
      // })


    }, 4000)
  }
}
