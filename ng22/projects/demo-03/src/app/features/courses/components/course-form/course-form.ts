import { Component, output, signal } from '@angular/core';
import { Course } from '../../types/course';

@Component({
  imports: [],
  selector: 'ind-course-form',
  styles: ``,
  template: ` 
    <p>Aquí irá el formulario</p> 
    <button (click)="onAddEmit()">Añadir curso</button>
    `,
})
export class CourseForm {
  readonly data = signal<Omit<Course, 'id'>>({
    title: 'Nuevo curso',
    description: 'Ejemplo de curso',
    image: '',
    isOfficial: false,
    duration: '20 horas',
    level: 'beginner',
    courseStats: {
      actualization: 5,
      difficulty: 5,
      utility: 5,
    }
  });

  readonly addEvent = output<Omit<Course, 'id'>>();

  onAddEmit() {
    this.addEvent.emit(this.data());
  }
}
