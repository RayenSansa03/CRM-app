import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFideliteComponent } from './carte-fidelite.component';

describe('CarteFideliteComponent', () => {
  let component: CarteFideliteComponent;
  let fixture: ComponentFixture<CarteFideliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteFideliteComponent]
    });
    fixture = TestBed.createComponent(CarteFideliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
