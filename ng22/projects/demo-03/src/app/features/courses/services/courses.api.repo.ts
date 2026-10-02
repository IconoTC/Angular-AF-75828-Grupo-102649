import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RepoRx } from '../../../core/types/repo';
import { Course } from '../types/course';
import { map, Observable } from 'rxjs';

@Service()
export class CoursesApiRepo implements RepoRx<Course> {
  readonly #baseUrl = environment.apiUrl + '/courses';
  readonly #http = inject(HttpClient);

  // Ejemplos de como funciona fetch en JS
  // fetchCourses() {
  //   fetch(this.#baseUrl)
  //     .then((res: Response) => {

  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       return res.json()})
  //     .then(data => console.log('fetchCourses', data))
  //     .catch(err => console.error('fetchCourses', err))
  // }

  // fetchPostCourses() {
  //   fetch(this.#baseUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ title: 'New Course', description: 'Course description' })
  //   })
  //     .then((res: Response) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       return res.json()})
  //     .then(data => console.log('fetchPostCourses', data))
  //     .catch(err => console.error('fetchPostCourses', err))
  // }

  getAll(): Observable<Course[]> {
    return this.#http.get<Course[]>(this.#baseUrl);
  }

  getById(id: number): Observable<Course> {
    const url = `${this.#baseUrl}/${id}`;
    return this.#http.get<Course>(url);
  }

  add(item: Omit<Course, 'id'>): Observable<Course> {
    return this.#http.post<Course>(this.#baseUrl, item);
  }

  updateById(id: number, item: Partial<Omit<Course, 'id'>>): Observable<Course> {
    const url = `${this.#baseUrl}/${id}`;
    return this.#http.patch<Course>(url, item);
  }

  deleteById(id: number): Observable<void> {
    const url = `${this.#baseUrl}/${id}`;
    return this.#http.delete<Course>(url).pipe(
      map(() => undefined)
    );
  }
}
