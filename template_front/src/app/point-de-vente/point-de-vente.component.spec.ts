import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointDeVenteComponent } from './point-de-vente.component';

describe('PointDeVenteComponent', () => {
  let component: PointDeVenteComponent;
  let fixture: ComponentFixture<PointDeVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointDeVenteComponent]
    });
    fixture = TestBed.createComponent(PointDeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
