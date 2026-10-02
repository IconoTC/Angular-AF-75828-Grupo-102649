import { inject, Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../types/course';
import { CoursesApiRepo } from './courses.api.repo';

@Service()
export class CoursesStoreRx {

  readonly #repo = inject(CoursesApiRepo);

  readonly #courses = new BehaviorSubject<Course[]>([]);
  readonly #error = new BehaviorSubject<Error | null>(null);
  readonly #isLoading = new BehaviorSubject<boolean>(false);

  public readonly courses = this.#courses.asObservable();
  public readonly error = this.#error.asObservable();
  public readonly isLoading = this.#isLoading.asObservable();

  public loadCourses(): void {

    this.#isLoading.next(true);
    this.#error.next(null);

    this.#repo.getAll().subscribe({
      next: (courses) => {
        this.#courses.next(courses);
        this.#isLoading.next(false);
      },
      error: (error: Error) => {
        console.log(error);
        this.#error.next(error);
        this.#isLoading.next(false);
      },
    });

  }

  public addCourse(data: Omit<Course, 'id'>): void {

    this.#repo.add(data).subscribe({
      next: (course) => {
        this.#courses.next([...this.#courses.getValue(), { ...course }]);
      },
      error: (error: Error) => {
        console.log(error);
        this.#error.next(error);
      },
    });
  }

  public updateCourse(data: Course): void {

    const { id, ...rest } = data;
    this.#repo.updateById(id, rest).subscribe({
      next: (course) => {
        const updatedCourses = this.#courses.getValue().map((c) =>
          c.id === course.id ? { ...course } : c
        );
        this.#courses.next(updatedCourses);
      },
      error: (error: Error) => {
        console.log(error);
        this.#error.next(error);
      },
    });
  }

  public deleteCourse(data: Course): void {
    this.#repo.deleteById(data.id).subscribe({
      next: () => {
        const updatedCourses = this.#courses.getValue().filter((c) => c.id !== data.id);
        this.#courses.next(updatedCourses);
      },
      error: (error: Error) => {
        console.log(error);
        this.#error.next(error);
      },
    });
  }


}
