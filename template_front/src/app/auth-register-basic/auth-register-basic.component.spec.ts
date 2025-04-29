import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterBasicComponent } from './auth-register-basic.component';

describe('AuthRegisterBasicComponent', () => {
  let component: AuthRegisterBasicComponent;
  let fixture: ComponentFixture<AuthRegisterBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRegisterBasicComponent]
    });
    fixture = TestBed.createComponent(AuthRegisterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
