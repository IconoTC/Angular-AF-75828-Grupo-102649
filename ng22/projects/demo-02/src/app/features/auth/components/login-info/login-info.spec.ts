import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginInfo } from './login-info';

describe('LoginInfo', () => {
  let component: LoginInfo;
  let fixture: ComponentFixture<LoginInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
