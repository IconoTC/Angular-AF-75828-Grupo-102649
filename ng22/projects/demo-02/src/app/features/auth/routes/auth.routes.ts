import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
      path: 'login',
      //component: LoginPage,
      redirectTo: 'login/td',
    },

{
      path: 'login/:formType',
      //component: LoginPage,
      loadComponent: () => import('../pages/login-page'),
      title: 'Iniciar sesión | Demo 02',

    },

    {
      path: 'register',
      //component: RegisterPage,
      loadComponent: () => import('../pages/register-page'),
      title: 'Registrarse | Demo 02',
    }]
