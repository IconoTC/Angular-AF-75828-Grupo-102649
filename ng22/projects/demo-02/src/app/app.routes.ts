import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-option';
import HomePage from './features/home/home-page';
import DashboardPage from './features/dashboard/dashboard-page';
import CoursesPage from './features/courses/courses-page';
import AboutPage from './features/about/about-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    title: 'Inicio | Demo 02',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    title: 'Dashboard | Demo 02',
  },
  {
    path: 'courses',
    component: CoursesPage,
    title: 'Cursos | Demo 02',
  },
  {
    path: 'about',
    component: AboutPage,
    title: 'Acerca de | Demo 02',
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];


export const MENU_OPTIONS: MenuOption[] = [
  { label: 'Inicio', path: 'home'},
  { label: 'Dashboard', path: 'dashboard'},
  { label: 'Cursos', path: 'courses'},
  { label: 'Acerca de', path: 'about'},
];