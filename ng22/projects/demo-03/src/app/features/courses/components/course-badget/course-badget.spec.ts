import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseBadget } from './course-badget';

describe('CourseBadget', () => {
  let component: CourseBadget;
  let fixture: ComponentFixture<CourseBadget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseBadget],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseBadget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
