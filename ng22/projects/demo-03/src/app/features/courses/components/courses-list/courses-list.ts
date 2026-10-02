import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { CourseItem } from '../course-item/course-item';
import { JsonPipe } from '@angular/common';
import { CourseForm } from '../course-form/course-form';
import { CoursesStore } from '../../services/courses.store';

@Component({
  imports: [CourseItem, CourseForm, JsonPipe],
  selector: 'ind-courses-list',
  styles: `
    details {
      margin-block: 1rem;
      summary::marker {
        color: var(--color-primary);
      }
    }
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  template: `
    <details #details>
      <summary>Añadir cursos</summary>
      <ind-course-form (addEvent)="addCourse()" />
    </details>

    @if (store.isLoading()) {
      <p>Loading courses...</p>
    } @else if (store.error()) {
      <p>Error loading courses: <br />{{ store.error()?.message }}</p>
    } @else {
      <ul>
        @for (course of store.courses(); track course.id) {
          <li>
            <ind-course-item
              [course]="course"
            />
          </li>
        }
      </ul>
      <pre>{{ store.courses() | json }}</pre>
    }
  `,
})
export class CoursesList {
  readonly store = inject(CoursesStore);
  readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details')

  addCourse() {
    this.details()!.nativeElement.open = false;      
  }
}
