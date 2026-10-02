import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CourseItem } from '../course-item/course-item';
import { Course } from '../../types/course';
import { getCoursesRx } from '../../data/courses';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CourseForm } from '../course-form/course-form';

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
    <details>
      <summary>Añadir cursos</summary>
      <ind-course-form (addEvent)="addCourse($event)" />
    </details>

    @if (isLoading()) {
      <p>Loading courses...</p>
    } @else if (error()) {
      <p>Error loading courses: <br />{{ error()?.message }}</p>
    } @else {
      <ul>
        @for (course of courses(); track course.id) {
          <li>
            <ind-course-item [course]="course" (changeEvent)="updateCourse($event)" (deleteEvent)="deleteCourse($event)" />
          </li>
        }
      </ul>
      <pre>{{ courses() | json }}</pre>
    }
  `,
})
export class CoursesList {
  readonly #destroyRef = inject(DestroyRef);
  readonly courses = signal<Course[]>([]);
  readonly error = signal<Error | null>(null);
  readonly isLoading = signal<boolean>(false);

  constructor() {
    this.loadCourses();
  }

  loadCourses() {
    this.isLoading.set(true);
    this.error.set(null);
    getCoursesRx()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (courses) => {
          this.courses.set(courses);
          this.isLoading.set(false);
        },
        error: (error: Error) => {
          this.error.set(error);
          this.isLoading.set(false);
        },
      });
  }

  #generateId() {
    return Math.floor(Math.random() * 1_000);
  }

  addCourse(data: Omit<Course, "id">) {
    try {
      this.courses.update((courses) => [...courses, { ...data, id: this.#generateId() }]);
    } catch (error: unknown) {
      this.error.set(error as Error);
    }
  }

  updateCourse(data: Course) {
    try {
      this.courses.update((courses) => courses.map((course) => (course.id === data.id ? data : course)));
    } catch (error: unknown) {
      this.error.set(error as Error);
    }
  }
  
  deleteCourse(data: Course) {
    try {
      this.courses.update((courses) => courses.filter((course) => course.id !== data.id));
    } catch (error: unknown) {
      this.error.set(error as Error);
    }
  }
}
