import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesTypesComponent } from './mes-types.component';

describe('MesTypesComponent', () => {
  let component: MesTypesComponent;
  let fixture: ComponentFixture<MesTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesTypesComponent]
    });
    fixture = TestBed.createComponent(MesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
