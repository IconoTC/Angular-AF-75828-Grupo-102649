import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('app-title', 'Test-01');
    fixture.componentRef.setInput('subtitle', 'Curso de Angular 22');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   // Test de implementación
  // Test de caja blanca
  it('should have a title property', () => {
    expect(component['title']()).toBe('Test-01');
  });

    // Test de comportamiento
  // Test de caja negra
  it('should render title', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Test-01');
  });

});
