import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAutorisationsComponent } from './gestion-autorisations.component';

describe('GestionAutorisationsComponent', () => {
  let component: GestionAutorisationsComponent;
  let fixture: ComponentFixture<GestionAutorisationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAutorisationsComponent]
    });
    fixture = TestBed.createComponent(GestionAutorisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
