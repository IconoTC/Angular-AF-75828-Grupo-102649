import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timestamp } from './timestamp';

describe('Timestamp', () => {
  let component: Timestamp;
  let fixture: ComponentFixture<Timestamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timestamp],
    }).compileComponents();

    fixture = TestBed.createComponent(Timestamp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
