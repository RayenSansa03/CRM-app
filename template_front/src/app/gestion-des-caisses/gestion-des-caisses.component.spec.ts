import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesCaissesComponent } from './gestion-des-caisses.component';

describe('GestionDesCaissesComponent', () => {
  let component: GestionDesCaissesComponent;
  let fixture: ComponentFixture<GestionDesCaissesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesCaissesComponent]
    });
    fixture = TestBed.createComponent(GestionDesCaissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
