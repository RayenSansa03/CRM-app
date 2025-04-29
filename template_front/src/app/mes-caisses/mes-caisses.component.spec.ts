import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCaissesComponent } from './mes-caisses.component';

describe('MesCaissesComponent', () => {
  let component: MesCaissesComponent;
  let fixture: ComponentFixture<MesCaissesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesCaissesComponent]
    });
    fixture = TestBed.createComponent(MesCaissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
