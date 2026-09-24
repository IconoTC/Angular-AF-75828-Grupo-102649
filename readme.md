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

## Día 1 (L-28/09): Introducción a Typescript y Angular

<!-- - Introducción a Angular y su ecosistema.

- Entornos de desarrollo para Angular: 
  - Node: nvm (Node Version Manager)
    - Problemas de instalación
  - Visual Studio Code
    - Extensiones recomendadas
- Instalación de Angular CLI.
- Workspace y proyectos en Angular.
  - Creación de un nuevo workspace Angular sin proyecto. `ng new`
  - Creación de un nuevo proyecto (app) Angular. `ng generate app`
  - Estructura de un workspace/proyecto Angular.
  - Añadiendo ESLint (`ng add`) y Prettier. -->

- [descanso]: 11:45 - 12:15


<!-- - Angular CLI: Comandos básicos.
  - Servidor de desarrollo: `ng serve`.
  - Testing con Vitest: `ng test`.
  - Testing con Playwright: `ng e2e`.
    - Problemas de versiones. Actualización con Version Lens 
  - Construcción del proyecto: `ng build`.
- Generación de componentes: `ng generate`.
  - Elementos de un componente: HTML, CSS, TypeScript. 
  - Template y estilos inline o en ficheros.
  - Guía de estilos actualizada
  - Scaffolding

- Elementos básicos de TypeScript.
  - Tipos de datos. Inferencia y anotación de tipos.
  - Tipado de funciones.
  - Tipos personalizados. Interfaces y tipos. -->

## Día 2 (M-29/09): Componentes y Rutas

<!-- - Elementos básicos de TypeScript (continuación).

  - Clases ES6 en TypeScript.
    - Modificadores de acceso.
    - Getters y Setters.
    - Herencia.
    - Clases abstractas.
  - Módulos ES6 en TypeScript.
    - Import y Export.
    - Módulos por defecto y nombrados.

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
    - Interacción con el componente (e.g. click en un botón). -->

- [Descanso]: 11:45 - 12:15
 
<!-- - Scaffolding. Core
  - Componentes Header y Footer.
  - Componente Menu. Proyección de contenido
  - Componentes Card. Aspecto visual básico.
  - App como contenedor principal.


- Scaffolding. Features
  - Componentes (pages): Home, About.

- Componentes.
  - Componente Counter. Eventos. (click)
    - Condicionales @If. [class]
  - Componente Search. Input de usuario: data binding. [(ngModel)]
- Referencias locales. #ref
  - Componente SearchRef. Referencias locales en el template.  -->

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

## Día 3 (X-30/09). Comunicaciones y Arquitectura de componentes. Formularios TD

<!-- - Review doble data binding & #ref
  - Signal queries: viewChild
  - Ciclo de vida de los componentes
  - Effects (primitiva de signal)
- Modificamos Menu. @for

- Rutas básicas. `app.routes.ts`
  - Array de rutas.
  - Array de opciones de menu
  - RouterOutlet en AppComponent.
  - Navegación. Componente menu. @for
  - SPA: RouterLink y RouterLinkActive
- Rutas Lazy. Default import en las páginas -->

- [Descanso]: 11:45 - 12:15


<!-- - Comunicación entre componentes

  - Input. Decoradores @Input. función input(). Drilling
  - Output. Decorador @Output. EventEmitter. Función output(). Eventos del contador
  - Agrupando contadores. Estado en el componente padre
  - Contadores. Eventos con valor. Computed signals 
  
- Pipes. Location "es"

- Arquitectura de componentes
  - Componentes de contenedores vs de presentación.
  - Componentes inteligentes vs tontos.

- Ejemplo: Tasks List
  - Entidad Tasks. Modelo y mock de datos asíncrono.
  - Componente Tasks-List. Lógica del estado
  - Componente Tasks-Item. Input y Output (Eventos)
  - Componente Tasks-Form. Output (Eventos) - Mock sin formulario -->

## Día 4 (J-01/10). Servicios. Providers e injectors. Formularios DD

<!-- - Componente Tasks-Form. Output (Eventos)
  - Forms Template Driven (TD)
    - NgForm implícito, NgModel. Referencias locales
    - viewChild(NgForm) y form.reset()
    - viewChild(Form), ElementRef.nativeElement y acceso al DOM
  - Signal Forms

- Introducción a los servicios en Angular.
- Servicios y Providers. DI (Dependency Injection)
  - Provider root v. provider en un componente / ruta
  - Ejemplo con un servicio simple: Time
  - Injector jerárquico. Servicios singleton y no singleton.

- Solución de problemas en CSS con el grid RWD -->

- [Descanso] - 11:45 - 12:15

<!-- - Servicios y patrón Repository
  - Mock de datos. Interface de los repositorios
  - Uso de promesas y observables (RxJS) en los servicios.
  - Servicio LocalNotesRepository: Repositorio y persistencia local (localStorage).
  - Uso en los componentes. Inyección de dependencias.
  - Repositorio y lógica de negocio (estado). Estrategias 
  - Métodos CRUD. getAll() y getById()
  - Métodos CRUD. add(), update(), delete()

- RxJS (Observables)
  - Introducción. Observables, subscription, operadores.
  - Los mismos repositorios usando RxJS (Observables). 
  - Uso del repo en el componente -->


  <!-- - Testing de servicios.
    - Tests del servicio
      - Test de métodos CRUD.
      - Test de promesas (async, whenStable, expectAsync).
    - Testing de componentes con servicios (mocks y spies). -->

<!-- - Formularios reactivos (DD). RegisterForm
  - FormGroup, FormControl, FormBuilder
  - Binding desde el template  -->

## Día 5 (V-02/10). Servicios HTTP

<!-- - Formularios reactivos (continuación).

  - RegisterForm. Otros controles HTML
  - Validaciones síncronas (y asíncronas).
    - Mensajes de validación  -->
  
<!-- - Testing de formularios reactivos. -->

<!-- - Introducción a los servicios HTTP en Angular.

- API server fake basado en JSONServer.
  - Prueba con Postman

- Instalación y uso de environments. 
  - Configuración de la URL base del API.

- Servicio HttpClientModule. Observables (RxJs).

  - Creación de un ApiRepositoryService.
  - Antes de Angular 21: Configuración del servicio HTTP: provider
  - Uso desde el componente (NoteList).   -->

<!--
- Servicio HttpClientModule. Observables (RxJs).
  - Tests de servicios HTTP con HttpTestingController
  - Test de componentes con servicios HTTP (mocks y spies).
-->

- [Descanso] 11:45 - 12:15

<!-- 
- Servicios stateful: patrón Flux

- Nuevo proyecto (demo-02). Feature Notes

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

- Más novedades (Signals)
  - resources: httResource (Angular 22)
  - linkedSignals
- Directivas propias
- Interceptors y Guards
- Testing -->
