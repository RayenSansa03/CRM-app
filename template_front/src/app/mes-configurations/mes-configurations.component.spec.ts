import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesConfigurationsComponent } from './mes-configurations.component';

describe('MesConfigurationsComponent', () => {
  let component: MesConfigurationsComponent;
  let fixture: ComponentFixture<MesConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesConfigurationsComponent]
    });
    fixture = TestBed.createComponent(MesConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
