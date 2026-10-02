import { Component } from '@angular/core';
import { Timestamp } from '../../core/components/timestamp/timestamp';
import { CoursesList } from './components/courses-list/courses-list';

@Component({
  imports: [CoursesList, Timestamp],
  selector: 'ind-courses-page',
  styles: ``,
  styleUrl: '../pages.css',
  template: `
    <h2>{{ title }}</h2>

    <ind-courses-list />

    <ind-timestamp />
  `,
})
export default class CoursesPage {
  private readonly title = 'Cursos';
}
