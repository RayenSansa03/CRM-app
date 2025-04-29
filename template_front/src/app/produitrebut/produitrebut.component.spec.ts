import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitrebutComponent } from './produitrebut.component';

describe('ProduitrebutComponent', () => {
  let component: ProduitrebutComponent;
  let fixture: ComponentFixture<ProduitrebutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitrebutComponent]
    });
    fixture = TestBed.createComponent(ProduitrebutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
