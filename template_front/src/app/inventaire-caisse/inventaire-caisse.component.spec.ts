import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireCaisseComponent } from './inventaire-caisse.component';

describe('InventaireCaisseComponent', () => {
  let component: InventaireCaisseComponent;
  let fixture: ComponentFixture<InventaireCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventaireCaisseComponent]
    });
    fixture = TestBed.createComponent(InventaireCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
