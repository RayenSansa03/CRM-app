import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expbar2Component } from './expbar2.component';

describe('Expbar2Component', () => {
  let component: Expbar2Component;
  let fixture: ComponentFixture<Expbar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Expbar2Component]
    });
    fixture = TestBed.createComponent(Expbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
