import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToastsComponent } from './ui-toasts.component';

describe('UiToastsComponent', () => {
  let component: UiToastsComponent;
  let fixture: ComponentFixture<UiToastsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiToastsComponent]
    });
    fixture = TestBed.createComponent(UiToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
