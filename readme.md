# Angular 22

- Nombre: Angular AF 75828 – GR 102649
- Duración: 30 horas
- Modalidad: On-line
- Fechas/Horario:
  - Días 28/09, 29/09, 30/09, 01/10 y 02/10 de 2026
  - Horario 9:00 – 15:00 hs

- Instructor: Alejandro Cerezo Lasne <alce65@hotmail.es>

- Repositorio: <https://github.com/IconoTC/Angular-AF-75828-Grupo-102649>

Curso de Angular 22, versión publicada el 3 de Junio de 2026.

## Día 1 (L-28/09): Introducción Angular. CLI. Componentes. Testing.

- Introducción a Angular y su ecosistema.

- Entornos de desarrollo para Angular: 
  - Node: nvm (Node Version Manager)
  - Visual Studio Code
    - Extensiones recomendadas
- Instalación de Angular CLI.
- Workspace y proyectos en Angular.
  - Creación de un nuevo workspace Angular sin proyecto. `ng new`
  - Creación de un nuevo proyecto (app) Angular. `ng generate app`
  - Estructura de un workspace/proyecto Angular.
  - Añadiendo ESLint (`ng add`) y Prettier.

- Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.

- [descanso]: 11:30 - 12:00


- Angular CLI: Comandos básicos.
  - Testing con Vitest: `ng test`.
  - Testing con Playwright: `ng e2e`.
    - Problemas de versiones. Actualización con Version Lens 
  - Construcción del proyecto: `ng build`.
  - Despliegue: `ng deploy`. Opciones

- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript. 
  - Template y estilos inline o en ficheros.
  - Guía de estilos actualizada
  - Scaffolding
  - Estilos globales: variables, reset...

<!-- 
- Elementos básicos de TypeScript.
  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos. 
  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters.
    - Herencia.
    - Clases abstractas.
  - Módulos ES6 en TypeScript.
    - Import y Export.
    - Módulos por defecto y nombrados.
-->

- Definición de tipos/interfaces y datos: Course

 - Generación de componentes: `ng generate component <nombre>`.
    - Programación declarativa en el template: {{}}, [], ()
    - Estilos: Encapsulación de estilos. ViewEncapsulation.
    - Signals en el estado del componente y en la plantilla.
  
- Testing de componentes. Pruebas unitarias

  - Test con Vitest. Conceptos básicos y ejemplo
  - Elementos de los test en Angular: TestBed, fixture, detectChanges()
  - Test de implementación v. test de comportamiento.
  - Tests para componentes básicos.
    - Renderizado del componente (e.g. heading).
    - Coverage. Instalación v-8:  `npm i -D @vitest/coverage-v8`

- Componente 🧿CourseItemSignals
  - Signals y asincronía. Zoneless + Estrategia OnPush 
  
- Componente 🧿CourseItemPro

## Día 2 (M-29/09): Componentes del Layout. Páginas

- Componente 🧿CourseItemPro
  - Eventos
  - Computed signals

- Scaffolding. Core

- Componente 🧿Header. Estructura básica en CSS: Grid
- Componente 🧿Footer
 <!-- - Test de Header y Footer -->
- Componente 🧿LogoCoders. Fichero svg como template
- Componente 🧿User. Svg como parte del template
  <!-- - Test de LogoCoders. Spies & mocks -->
  
- Componente 🧿Card. Proyección de contenido
  - Uso en el componente 🧿App como contenedor principal.
  <!-- - Test de Card. TestingComponent -->

- Componentes de navegación  
  - 🧿Menu. Tipo y datos. Iteración con @for
  - Incorporación en App
  - 🧿Socials. @for + @switch: iconos svg de las redes sociales
  <!-- - Test de Menu y Socials. Renderizado y @for @switch -->

- Componentes CSS
  - 🧿Separador. Componente de CSS

- [Descanso]: 11:45 - 12:15

- Componentes CSS
  - 🧿toggle: Widget css como componente Angular


- Componente 🧿Search. Input de usuario: 2 way data binding. [(ngModel)]
- Referencias locales. #ref
  - Signal queries: viewChild, focus()
  - Ciclo de vida de los componentes 
  - Effects (primitiva de signal) 

- Componente 🧿SearchRef. Referencias locales en el template.  
<!-- 
- Test de Search. Renderizado y data binding
-->

- Test del eventos: componente CourseItemPro. Renderizado y eventos.


- Nuevo proyecto (app): demo-02.  `ng g app demo-02 --style css --ssr false -p ind -t -s` 

- Scaffolding. Features
  - Componentes (pages): Home, About, Dashboard, Courses.

<!--
- Testing de todos los componentes
  - Test de Header, Footer, Menu, Card y Layout.  
  - Test de las páginas
  - Test de Counter. Renderizado y eventos.
  - Test de Search. Renderizado y data binding.
-->

<!-- 
- Componentes: estado. Zone v. Zoneless
- Estado en los componentes con ZoneJS.
  - Componente Counter. Estado y eventos.
  - Detección del cambio: Zone v. Zoneless
  - Signals y estado
  - Zoneless y asincronía: uso de Signals
-->

## Día 3 (X-30/09). Comunicaciones entre Componentes. Rutas, Servicios 

- Comunicación entre componentes (1)
  - Input. Decoradores @Input. función input(). Drilling

- Dashboard.
  - Componente 🧿Counter. Estado y eventos (click)
  - Refactor Componente Counter. Condicionales @If. [class}

<!--
- Testing de todos los componentes (comentado)
  - Test de Counter. Eventos. Errores al testar implementación
-->

- Comunicación entre componentes (2) 
  - 🧿CounterList. Agrupando contadores. Estado en el componente padre
  - Input en los contadores. Revision de los totales
    - input() y linkedSignal
    - sincronización de diversas "fuentes" de cambio
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
    - Contadores. Eventos con valor 
  - Respuesta a los eventos. Estado en el componente padre (contenedor/controlador).
  - Computed signals 
  <!-- - Test de inputs y outputs.  -->

- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive

- [Descanso]: 11:45 - 12:15

- Rutas (continuación)
  - Rutas Lazy. Default import en las páginas 
<!-- 
  - Test las paginas (componentes) con rutas. RouterTestingHarness -->


- 🧿Info. Componente para probar servicios...
- Introducción a los servicios en Angular.

- Servicios y Providers. DI (Dependency Injection)
  - Provider root v. provider en un componente / ruta
  - Ejemplo con un servicio simple: TimeService
  - Injector jerárquico. Servicios singleton y no singleton.  

  <!-- - Test del servicio TimeService
  - Test de componentes con servicios (mocks y spies).
    - Modificación del provider en el TestBed. `providers: [ { provide: TimeService, useValue: mockTimeService } ]`
    - Modificación del provider en el componente. `TestBed.overrideProvider()` -->

- Servicio Logger. 
  - environments de Angular
  - Uso de tokens de inyección

- Pipes. Location "es"
   - Usar por defecto: inyección de dependencias
  
- Directivas. Estructurales y de atributo  

- Servicios y asincronías
  - RxJS (Observables)
    - Introducción. Observables, subscription, operadores.

- Feature Auth
  - Interface. Modelo de datos 

## Día 4 (J-01/10). Pipes y directivas. Formularios TD, DD, SD

- Feature Auth
  
  - Servicio Auth. Login simulado con Observables y con Promesas.
  - Test del servicio Auth. Casos de uso

<!-- 
 - Rutas anidadas. 
    - Login y Register
    - Fichero de rutas propio de Auth. `auth.routes.ts`
  - Rutas con parámetros
    - LoginPage. Parámetros y formularios posibles
      (td, md-rx, signals)
    - @if / @switch
-->


<!--
- 🧿Componente LoginFormTd: Forms Template Driven (TD)
    - NgForm implícito, NgModel. Referencias locales
    - Paso de ngForm al onSubmit: form.value; form.reset()
    - Validaciones 
 -->

- [Descanso] - 11:45 - 12:15

<!-- - Formularios reactivos (DD). RegisterForm
  - FormGroup, FormControl, FormBuilder
  - Binding desde el template  
  - RegisterForm. Otros controles HTML
  - Validaciones síncronas (y asíncronas).
    - Mensajes de validación -->

<!-- - Testing de formularios reactivos. -->

<!-- - 🧿Componente LoginFormSignals: Formularios con Signals.
  - Model (signal), FieldTree, FieldState 
  - Binding desde el template  [formField] y (submit)
  - Schema de validación
  - Directiva FormRoot y submit -->

<!--
- RegisterForm. Otros controles HTML (comentado)
-->

<!-- - Custom controls
  -  🧿Componente Input. [FormValueControl]  -->

## Día 5 (V-02/10). Arquitectura. Servicios repo (HTTP) y state 

<!-- - Arquitectura de componentes
  - Componentes de contenedores vs de presentación.
  - Componentes inteligentes vs tontos.

- Ejemplo: Courses List
  - Entidad Courses. Modelo y mock de datos asíncrono.
  - Componente Courses-List. Lógica del estado
  - Componente Courses-Item. Input y Output (Eventos)
  - Componente Courses-Form. Output (Eventos)  -->

 <!-- 
- Servicios y patrón Repository
  - Mock de datos. Interface de los repositorios
  - Uso de promesas y observables (RxJS) en los servicios.

- RxJS (Observables)
  - Introducción. Observables, subscription, operadores.
  - Los mismos repositorios usando RxJS (Observables). 
  - Uso del repo en el componente   

- API server fake basado en JSONServer.
  - Prueba con Postman

- Uso de environments. 
-->

- [Descanso] 11:45 - 12:15

<!-- 
  - Servicio LocalNotesRepository: Repositorio y persistencia local (localStorage).
  - Uso en los componentes. Inyección de dependencias.

-->


  <!-- - Testing de servicios.
    - Tests del servicio
      - Test de métodos CRUD.
      - Test de promesas (async, whenStable, expectAsync).
    - Testing de componentes con servicios (mocks y spies). -->


<!-- - Introducción a los servicios HTTP en Angular.

  - Repositorio y lógica de negocio (estado). Estrategias 
  - Métodos CRUD. getAll() y getById()
  - Métodos CRUD. add(), update(), delete()


- Servicio HttpClientModule. Observables (RxJs).

  - Creación de un ApiRepositoryService.
  - Antes de Angular 21: Configuración del servicio HTTP: provider
  - Uso desde el componente (NoteList).   -->

<!--
- Servicio HttpClientModule. Observables (RxJs).
  - Tests de servicios HTTP con HttpTestingController
  - Test de componentes con servicios HTTP (mocks y spies).
-->

<!-- 
- Servicios stateful: patrón Flux


  - Estado con RxJS: Subjects
    - Estado privado con BehaviorSubject
    - Estado público con Observable (asObservable)
    - Métodos para modificar el estado (add, toggle, remove)
  
  
  - Estado con Signals: signal (WriteableSignal) y readOnly/computed (Signal)
  
  - Servicio Store con NotesState
    - Estado privado con WriteableSignal
    - Estado público con Signal (asReadOnly)
    - Métodos para modificar el estado (add, toggle, remove)

- Uso del estado desde los componentes ToDo...
- Gestión de errores
- Uso desde cualquier parte de la aplicación (Header) 

-->
