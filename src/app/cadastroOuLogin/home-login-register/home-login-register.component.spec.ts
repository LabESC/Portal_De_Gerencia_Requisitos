import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginRegisterComponent } from './home-login-register.component';

describe('HomeLoginRegisterComponent', () => {
  let component: HomeLoginRegisterComponent;
  let fixture: ComponentFixture<HomeLoginRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoginRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
