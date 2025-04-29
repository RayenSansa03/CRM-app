import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDevisComponent } from './mes-devis.component';

describe('MesDevisComponent', () => {
  let component: MesDevisComponent;
  let fixture: ComponentFixture<MesDevisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDevisComponent]
    });
    fixture = TestBed.createComponent(MesDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
