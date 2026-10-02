import { DestroyRef, inject, Service, signal } from '@angular/core';
import { Course } from '../types/course';
import { CoursesApiRepo } from './courses.api.repo';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';

@Service()
export class CoursesStore {
  readonly #destroyRef = inject(DestroyRef);
  readonly #repo = inject(CoursesApiRepo);

  readonly #courses = signal<Course[]>([]);
  readonly #error = signal<Error | null>(null);
  readonly #isLoading = signal<boolean>(false);

  public readonly courses = this.#courses.asReadonly();
  public readonly error = this.#error.asReadonly();
  public readonly isLoading = this.#isLoading.asReadonly();

  public loadCourses(): void {
    this.#isLoading.set(true);
    this.#error.set(null);

    this.#repo
      .getAll()
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (courses) => {
          this.#courses.set(courses);
          this.#isLoading.set(false);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
          this.#error.set(error);
          this.#isLoading.set(false);
        },
      });
  }

  public addCourse(data: Omit<Course, 'id'>): void {
    this.#repo
      .add(data)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (course) => {
          //this.#courses.set([...this.#courses(), { ...course }]);
          this.#courses.update((courses) => [...courses, { ...course }]);
        },
        error: (error: Error) => {
          console.log(error);
          this.#error.set(error);
        },
      });
  }

  public updateCourse(data: Course): void {
    const { id, ...rest } = data;
    this.#repo
      .updateById(id, rest)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (course) => {
          // const updatedCourses = this.#courses().map((c) =>
          //   c.id === course.id ? { ...course } : c
          // );
          // this.#courses.set(updatedCourses);

          this.#courses.update((courses) => {
            return courses.map((c) => (c.id === course.id ? { ...course } : c));
          });
        },
        error: (error: Error) => {
          console.log(error);
          this.#error.set(error);
        },
      });
  }

  public deleteCourse(data: Course): void {
    this.#repo
      .deleteById(data.id)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: () => {
          // const updatedCourses = this.#courses().filter((c) => c.id !== data.id);
          // this.#courses.set(updatedCourses);
          this.#courses.update((courses) => courses.filter((c) => c.id !== data.id));
        },
        error: (error: Error) => {
          console.log(error);
          this.#error.set(error);
        },
      });
  }
}
