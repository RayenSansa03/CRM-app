import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInputGroupsComponent } from './forms-input-groups.component';

describe('FormsInputGroupsComponent', () => {
  let component: FormsInputGroupsComponent;
  let fixture: ComponentFixture<FormsInputGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsInputGroupsComponent]
    });
    fixture = TestBed.createComponent(FormsInputGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
