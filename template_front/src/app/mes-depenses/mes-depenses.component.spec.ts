import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDepensesComponent } from './mes-depenses.component';

describe('MesDepensesComponent', () => {
  let component: MesDepensesComponent;
  let fixture: ComponentFixture<MesDepensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDepensesComponent]
    });
    fixture = TestBed.createComponent(MesDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
