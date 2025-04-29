import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals'; // Add this line

import { MesDepotsComponent } from './mes-depots.component';

declare var describe: any; // Add this line

describe('MesDepotsComponent', () => {
  let component: MesDepotsComponent;
  let fixture: ComponentFixture<MesDepotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDepotsComponent]
    });
    fixture = TestBed.createComponent(MesDepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
