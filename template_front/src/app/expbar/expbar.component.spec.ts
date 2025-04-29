import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpbarComponent } from './expbar.component';

describe('ExpbarComponent', () => {
  let component: ExpbarComponent;
  let fixture: ComponentFixture<ExpbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpbarComponent]
    });
    fixture = TestBed.createComponent(ExpbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
