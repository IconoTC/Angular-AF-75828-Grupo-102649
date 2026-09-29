import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoCoders } from './logo-coders';

describe('LogoCoders', () => {
  let component: LogoCoders;
  let fixture: ComponentFixture<LogoCoders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCoders],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoCoders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
