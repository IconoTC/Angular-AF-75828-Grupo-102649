import { Component, inject, output, signal } from '@angular/core';
import { Course } from '../../types/course';
import { CoursesStore } from '../../services/courses.store';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { Input } from '../../../../core/design/input/input';

@Component({
  imports: [Input, FormField, FormRoot],
  selector: 'ind-course-form',
  styles: `
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 80vw;
      max-width: 400px;

      .form-control {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &.checkbox {
          flex-direction: row;
          align-items: center;
        }
      }
    }

    input,
    textarea {
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--color-primary-hot);
      background-color: var(--color-background-primary);
      border: none;
      border-block-end: 2px solid var(--color-primary);
      border-radius: 4px;

      &:focus-visible {
        outline: var(--color-primary) auto 1px;
        background-color: var(--color-background);
      }
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: var(--color-background);
      background-color: var(--color-primary);
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:disabled {
        background-color: color-mix(in srgb, var(--color-primary) 30%, transparent);
        cursor: not-allowed;
      }
    }

    .error {
      color: var(--color-tertiary);
      font-size: 0.8rem;
    }
  `,
  template: `
    <form [formRoot]="courseForm" (submit)="onAddEmit()">
      <ind-input [formField]="courseForm.title" [label]="'Title'" [type]="'text'"></ind-input>
      <ind-input
        [formField]="courseForm.description"
        [label]="'Description'"
        [type]="'text'"
      ></ind-input>
      <ind-input [formField]="courseForm.duration" [label]="'Duration'" [type]="'text'"></ind-input>
      <ind-input [formField]="courseForm.level" [label]="'Level'" [type]="'text'"></ind-input>
      <ind-input [formField]="courseForm.image" [label]="'Image'" [type]="'text'"></ind-input>
      <label class="form-control checkbox" for="officialCourse">
        <input type="checkbox" id="officialCourse" [formField]="courseForm.isOfficial" />
        <span>Curso oficial</span>
      </label>
      <button type="submit" [disabled]="courseForm().invalid()">Añadir curso</button>
    </form>
  `,
})
export class CourseForm {
  readonly formModel = signal<Omit<Course, 'id'>>({
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
    },
  });

  readonly addEvent = output<void>();
  readonly store = inject(CoursesStore);

  protected readonly courseForm = form(this.formModel);

  onAddEmit() {
    this.store.addCourse(this.courseForm().value());
    this.addEvent.emit();
  }
}
