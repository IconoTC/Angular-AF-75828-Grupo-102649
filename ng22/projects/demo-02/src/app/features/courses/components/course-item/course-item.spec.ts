import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItem } from './course-item';
import { COURSES } from '../../data/courses';

describe('CourseItem', () => {
  let component: CourseItem;
  let fixture: ComponentFixture<CourseItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItem);
    component = fixture.componentInstance;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course' , () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h3')?.textContent).toContain(COURSES[0].title);
    expect(element.querySelector('p')?.textContent).toContain(COURSES[0].description);
  });
});
