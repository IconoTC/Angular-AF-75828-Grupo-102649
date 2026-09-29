import { Component, signal } from '@angular/core';
import { COURSES } from '../../data/courses';
import { Course } from '../../types/course';

@Component({
  imports: [],
  selector: 'ind-course-item-pro',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin: 1rem;
      padding: 1rem;
      border: 1px solid var(--color-primary);
      border-radius: 4px;
    }
    h3,
    h4,
    p {
      margin: 0;
    }
    .details {
      text-align: center;
    }

    .course-title {
      font-weight: bolder;
      font-size: 1.4rem;
      margin-block: 0.5rem;
      text-align: center;
    }

    .course-stats {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;

      .course-courseStats-buttons {
        display: flex;
        gap: 0.5rem;
      }
    }

    .average {
      margin-block-start: 0.5rem;
      padding-block-start: 0.5rem;
      border-top: 1px solid var(--color-primary);
    }
  `,
  template: `
    <header>
      <img [src]="course().image" [alt]="course().title" />
      <h3 class="course-title" [title]="'Curso ID: ' + course().id">{{ course().title }}</h3>
    </header>

    <section class="details">
      <p>{{ course().description }}</p>
      <p>Duración: {{ course().duration }}</p>
      <p>Nivel: {{ course().level }}</p>
    </section>
    <div>
      <h4>Course Stats:</h4>
      <div class="course-stats" aria-label="Utilidad">
        <span
          >Utilidad: <output>{{ course().courseStats.utility }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button>➖</button>
          <button>➕</button>
          <button [title]="'Reset ' + 'utilidad' + ' a 0'">🔄️</button>
        </div>
      </div>
      <div class="course-stats" aria-label="Dificultad">
        <span
          >Dificultad: <output>{{ course().courseStats.difficulty }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button>➖</button>
          <button>➕</button>
          <button [title]="'Reset ' + 'utilidad' + ' a 0'">🔄️</button>
        </div>
      </div>
      <div class="course-stats" aria-label="Actualidad">
        <span
          >Actualidad: <output>{{ course().courseStats.actualization }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button>➖</button>
          <button>➕</button>
          <button [title]="'Reset ' + 'utilidad' + ' a 0'">🔄️</button>
        </div>
      </div>
    </div>
  `,
})
export class CourseItemPro {
  private readonly course = signal<Course>(COURSES[0]);
}
