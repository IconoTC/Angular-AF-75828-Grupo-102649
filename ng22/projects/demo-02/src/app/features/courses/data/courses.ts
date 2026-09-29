import { Course } from "../types/course";

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Angular Basics',
    description: 'Learn the basics of Angular',
    duration: '2 hours',
    level: 'beginner',
    image: 'assets/course_angular.webp',
    courseStats: {
      difficulty: 7,
      actualization: 9,
      utility: 8
    }
  },
  {
    id: 2,
    title: 'Advanced Angular',
    description: 'Dive deep into Angular',
    duration: '4 hours',
    level: 'advanced',
    image: 'advanced-angular.jpg',
    courseStats: {
      difficulty: 3,
      actualization: 3,
      utility: 3
    }
  }
];
