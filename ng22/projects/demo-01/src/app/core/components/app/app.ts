import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseItem } from '../../../features/courses/components/course-item/course-item';
import { CourseItemSignals } from '../../../features/courses/components/course-item-signals/course-item-signals';
import { CourseItemPro } from '../../../features/courses/components/course-item-pro/course-item-pro';

@Component({
  imports: [RouterOutlet, CourseItem, CourseItemSignals, CourseItemPro],
  selector: 'ind-root',
  styles: [],
  template: `
    <h1>{{ title() }}</h1>
    <p>Welcome to the Demo-01 Angular application!</p>
    <router-outlet />
    <details>
      <summary>Course Items</summary>
      <ind-course-item />
      <ind-course-item-signals />
    </details>

    <ind-course-item-pro />

  `,
})
export class App {
 private readonly title = signal('Demo-01');
}
