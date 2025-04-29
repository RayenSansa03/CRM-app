import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenueSourceComponent } from './retenue-source.component';

describe('RetenueSourceComponent', () => {
  let component: RetenueSourceComponent;
  let fixture: ComponentFixture<RetenueSourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetenueSourceComponent]
    });
    fixture = TestBed.createComponent(RetenueSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
