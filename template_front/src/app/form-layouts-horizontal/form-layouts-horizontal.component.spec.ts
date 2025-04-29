import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayoutsHorizontalComponent } from './form-layouts-horizontal.component';

describe('FormLayoutsHorizontalComponent', () => {
  let component: FormLayoutsHorizontalComponent;
  let fixture: ComponentFixture<FormLayoutsHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLayoutsHorizontalComponent]
    });
    fixture = TestBed.createComponent(FormLayoutsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
