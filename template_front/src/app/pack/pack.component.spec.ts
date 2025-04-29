import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackComponent } from './pack.component';

describe('PackComponent', () => {
  let component: PackComponent;
  let fixture: ComponentFixture<PackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackComponent]
    });
    fixture = TestBed.createComponent(PackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
