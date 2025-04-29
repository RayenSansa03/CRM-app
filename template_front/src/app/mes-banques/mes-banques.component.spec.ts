import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesBanquesComponent } from './mes-banques.component';

describe('MesBanquesComponent', () => {
  let component: MesBanquesComponent;
  let fixture: ComponentFixture<MesBanquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesBanquesComponent]
    });
    fixture = TestBed.createComponent(MesBanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
