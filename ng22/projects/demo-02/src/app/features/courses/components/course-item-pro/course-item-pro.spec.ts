import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemPro } from './course-item-pro';
import { COURSES } from '../../data/courses';

describe('CourseItemPro', () => {
  let component: CourseItemPro;
  let fixture: ComponentFixture<CourseItemPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseItemPro],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseItemPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const header = element.querySelector('header');
    const details = element.querySelector('.details');
    expect(header?.querySelector('h3')?.textContent).toContain(COURSES[0].title);
    expect(details?.querySelector('p')?.textContent).toContain(COURSES[0].description);
  });

  it('should display the correct course image', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const img = element.querySelector('img');
    expect(img?.src).toContain(COURSES[0].image);
  });

  describe('Utility buttons', () => {


    it('should increase, decrease and reset the course utility', () => { 
      const buttons = fixture.nativeElement.querySelectorAll('.course-courseStats-buttons button');
      const decreaseButton = buttons[0] as HTMLButtonElement;
      const increaseButton = buttons[1] as HTMLButtonElement;

      const output = fixture.nativeElement.querySelector('.course-stats output') as HTMLElement;

      const debugElements = fixture.debugElement.queryAll((de) => de.nativeElement.tagName === 'BUTTON');
      const resetButton = debugElements[2] ;

      // Initial utility value
      const initialUtility = component['course']().courseStats.utility ;

      // Increase utility
      increaseButton.click();
      fixture.detectChanges();
      // expect(component['course']().courseStats.utility).toBe(initialUtility + 1);
      expect(output.textContent).toContain((initialUtility + 1).toString());

      // Decrease utility
      decreaseButton.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      // expect(component['course']().courseStats.utility).toBe(initialUtility);
      expect(output.textContent).toContain(initialUtility.toString());

      // Reset utility
      resetButton.triggerEventHandler('click', null);
      fixture.detectChanges();
      // expect(component['course']().courseStats.utility).toBe(0);
      expect(output.textContent).toContain('0');
    });
  })
});
