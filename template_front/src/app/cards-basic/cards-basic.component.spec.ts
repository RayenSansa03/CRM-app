import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBasicComponent } from './cards-basic.component';

describe('CardsBasicComponent', () => {
  let component: CardsBasicComponent;
  let fixture: ComponentFixture<CardsBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsBasicComponent]
    });
    fixture = TestBed.createComponent(CardsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
