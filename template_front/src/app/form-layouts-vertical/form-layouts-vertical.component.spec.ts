import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutsVerticalComponent } from './form-layouts-vertical.component';

describe('FormLayoutsVerticalComponent', () => {
  let component: FormLayoutsVerticalComponent;
  let fixture: ComponentFixture<FormLayoutsVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLayoutsVerticalComponent]
    });
    fixture = TestBed.createComponent(FormLayoutsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
