import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CourseItem } from '../course-item/course-item';
import { Course } from '../../types/course';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CourseForm } from '../course-form/course-form';
import { CoursesApiRepo } from '../../services/courses.api.repo';
import { HttpErrorResponse } from '@angular/common/http';

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
            <ind-course-item
              [course]="course"
              (changeEvent)="updateCourse($event)"
              (deleteEvent)="deleteCourse($event)"
            />
          </li>
        }
      </ul>
      <pre>{{ courses() | json }}</pre>
    }
  `,
})
export class CoursesList {
  readonly #repo = inject(CoursesApiRepo);
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
    this.#repo
      .getAll()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (courses) => {
          this.courses.set(courses);
          this.isLoading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.error.set(error);
          this.isLoading.set(false);
        },
      });
  }

  addCourse(data: Omit<Course, 'id'>) {
    // asincrona -> backend (API)
    this.#repo
      .add(data)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(
        // sincrona -> Estado local (signal)
        {
        next: (course) => {
          this.courses.update((courses) => [...courses, { ...course }]);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.error.set(error);
        },
      });
  }

  updateCourse(data: Course) {
    const {id, ...rest} = data; 
    this.#repo
      .updateById(id, rest)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (course) => {
          this.courses.update((courses) =>
            courses.map((c) => (c.id === course.id ? course : c)),
          );
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.error.set(error);
        },
      });
  }

  deleteCourse(data: Course) {


    this.#repo
      .deleteById(data.id)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: () => {
           this.courses.update((courses) => courses.filter((course) => course.id !== data.id));
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.error.set(error);
        }
      });
  }
}
