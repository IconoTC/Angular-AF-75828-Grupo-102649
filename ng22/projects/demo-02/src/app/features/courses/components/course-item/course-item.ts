import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Course } from '../../types/course';
import { COURSES } from '../../data/courses';

@Component({
  imports: [],
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'ind-course-item',
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
    <h3>{{ course().title }}</h3>
    <p>{{ course().description }}</p>
  `,
})
export class CourseItem {
  private readonly course = signal<Course>(COURSES[0]);

  constructor() {
    console.log(this.course());
  }
}
