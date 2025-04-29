import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesVehiculesComponent } from './mes-vehicules.component';

describe('MesVehiculesComponent', () => {
  let component: MesVehiculesComponent;
  let fixture: ComponentFixture<MesVehiculesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesVehiculesComponent]
    });
    fixture = TestBed.createComponent(MesVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
