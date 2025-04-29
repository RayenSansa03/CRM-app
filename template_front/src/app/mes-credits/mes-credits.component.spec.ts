import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCreditsComponent } from './mes-credits.component';

describe('MesCreditsComponent', () => {
  let component: MesCreditsComponent;
  let fixture: ComponentFixture<MesCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesCreditsComponent]
    });
    fixture = TestBed.createComponent(MesCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
