import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFacturesComponent } from './mes-factures.component';

describe('MesFacturesComponent', () => {
  let component: MesFacturesComponent;
  let fixture: ComponentFixture<MesFacturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesFacturesComponent]
    });
    fixture = TestBed.createComponent(MesFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
