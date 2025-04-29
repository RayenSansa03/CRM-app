import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedUiTextDividerComponent } from './extended-ui-text-divider.component';

describe('ExtendedUiTextDividerComponent', () => {
  let component: ExtendedUiTextDividerComponent;
  let fixture: ComponentFixture<ExtendedUiTextDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtendedUiTextDividerComponent]
    });
    fixture = TestBed.createComponent(ExtendedUiTextDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
