import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesClientsComponent } from './mes-clients.component';

describe('MesClientsComponent', () => {
  let component: MesClientsComponent;
  let fixture: ComponentFixture<MesClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesClientsComponent]
    });
    fixture = TestBed.createComponent(MesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
