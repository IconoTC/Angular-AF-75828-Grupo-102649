import { Component } from '@angular/core';
import { CourseItemPro } from './components/course-item-pro/course-item-pro';
import { CourseItem } from './components/course-item/course-item';
import { Card } from '../../core/design/card/card';

@Component({
  imports: [
    Card,
    CourseItem,
    CourseItemPro,
  ],
  selector: 'ind-courses-page',
  styles: ``,
  styleUrl: '../pages.css',
  template: ` 
    <h2>{{ title }}</h2> 
       <details>
        <summary>Course Items</summary>
        <ind-course-item />
      </details>

      <ind-card>
        <ind-course-item-pro />
      </ind-card>
    `,
})
export default class CoursesPage {
  private readonly title = 'Cursos';
}
