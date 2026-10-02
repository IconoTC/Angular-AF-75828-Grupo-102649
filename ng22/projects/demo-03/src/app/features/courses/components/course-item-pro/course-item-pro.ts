import { Component, computed, signal } from '@angular/core';
import { COURSES } from '../../data/courses';
import { Course } from '../../types/course';

const STAT_LIMIT = 10;

@Component({
  imports: [],
  selector: 'ind-course-item-pro',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
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
          <button
            (click)="changeStat('utility', -1)"
            [disabled]="course().courseStats.utility <= 0"
          >
            ➖
          </button>
          <button
            (click)="changeStat('utility', 1)"
            [disabled]="course().courseStats.utility >= statLimit"
          >
            ➕
          </button>
          <button
            (click)="changeStat('utility')"
            [disabled]="course().courseStats.utility === 0"
            [title]="'Reset ' + 'utilidad' + ' a 0'"
          >
            🔄️
          </button>
        </div>
      </div>
      <div class="course-stats" aria-label="Dificultad">
        <span
          >Dificultad: <output>{{ course().courseStats.difficulty }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button
            (click)="changeStat('difficulty', -1)"
            [disabled]="course().courseStats.difficulty <= 0"
          >
            ➖
          </button>
          <button
            (click)="changeStat('difficulty', 1)"
            [disabled]="course().courseStats.difficulty >= statLimit"
          >
            ➕
          </button>
          <button
            (click)="changeStat('difficulty')"
            [disabled]="course().courseStats.difficulty === 0"
            [title]="'Reset ' + 'dificultad' + ' a 0'"
          >
            🔄️
          </button>
        </div>
      </div>
      <div class="course-stats" aria-label="Actualidad">
        <span
          >Actualidad: <output>{{ course().courseStats.actualization }}</output></span
        >
        <div class="course-courseStats-buttons">
          <button
            (click)="changeStat('actualization', -1)"
            [disabled]="course().courseStats.actualization <= 0"
          >
            ➖
          </button>
          <button
            (click)="changeStat('actualization', 1)"
            [disabled]="course().courseStats.actualization >= statLimit"
          >
            ➕
          </button>
          <button
            (click)="changeStat('actualization')"
            [disabled]="course().courseStats.actualization === 0"
            [title]="'Reset ' + 'actualidad' + ' a 0'"
          >
            🔄️
          </button>
        </div>
      </div>
      <div class="course-stats" aria-label="Media">
        <span
          >Media: <output>{{ statsAverage().toFixed(2) }}</output></span
        >
        <div></div>
      </div>
    </div>
  `,
})
export class CourseItemPro {
  private readonly course = signal<Course>(COURSES[0]);

  private readonly statsAverage = computed(() => {
    //(this.course().courseStats.utility + this.course().courseStats.difficulty + this.course().courseStats.actualization) / 3

    const stats = this.course().courseStats;
    const total = Object.values(stats).reduce((acc, stat) => acc + stat, 0);
    return total / Object.keys(stats).length;
  });

  private readonly statLimit = STAT_LIMIT;

  protected changeStat(stat: keyof Course['courseStats'], delta = 0): void {
    console.log('Change stat clicked');

    if (delta === 0) {
      this.course.update((current) => ({
        ...current,
        courseStats: {
          ...current.courseStats,
          [stat]: 0,
        },
      }));
      return;
    }

    this.course.update((current) => ({
      ...current,
      courseStats: {
        ...current.courseStats,
        [stat]: current.courseStats[stat] + delta,
      },
    }));
  }
}
