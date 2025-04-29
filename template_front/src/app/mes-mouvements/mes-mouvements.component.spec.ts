import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesMouvementsComponent } from './mes-mouvements.component';

describe('MesMouvementsComponent', () => {
  let component: MesMouvementsComponent;
  let fixture: ComponentFixture<MesMouvementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesMouvementsComponent]
    });
    fixture = TestBed.createComponent(MesMouvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
