import { Component, inject, input } from '@angular/core';
import { Course } from '../../types/course';
import { CoursesStore } from '../../services/courses.store';

@Component({
  imports: [],
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
    img {
      width: 100%;
      max-width: 200px;
      height: auto;
      border-radius: 4px;
    }
  .official {
    color: var(--color-primary);
  }
  `,
  template: `
    <img [src]="course().image" [alt]="course().title" />
    <h3 [class.official]="course().isOfficial">{{ course().title }}</h3>
    <p>{{ course().description }}</p>
    <label><input type="checkbox" [checked]="course().isOfficial" (change)="onChangeEmit()" /> Official Course</label>
    <button (click)="this.store.deleteCourse(this.course())">Eliminar</button>
  `,
})
export class CourseItem {
 readonly course = input.required<Course>();
 readonly store = inject(CoursesStore);

 onChangeEmit() {
    const updatedCourse: Course = {
      ...this.course(),
      isOfficial: !this.course().isOfficial,
    };
    this.store.updateCourse(updatedCourse);
  }

}
