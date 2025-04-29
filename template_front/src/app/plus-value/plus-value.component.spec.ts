import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusValueComponent } from './plus-value.component';

describe('PlusValueComponent', () => {
  let component: PlusValueComponent;
  let fixture: ComponentFixture<PlusValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlusValueComponent]
    });
    fixture = TestBed.createComponent(PlusValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
