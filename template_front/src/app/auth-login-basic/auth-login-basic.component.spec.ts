import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginBasicComponent } from './auth-login-basic.component';

describe('AuthLoginBasicComponent', () => {
  let component: AuthLoginBasicComponent;
  let fixture: ComponentFixture<AuthLoginBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLoginBasicComponent]
    });
    fixture = TestBed.createComponent(AuthLoginBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
