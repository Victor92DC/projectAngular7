import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTemperatureComponent } from './bar-chart-temperature.component';

describe('BarChartTemperatureComponent', () => {
  let component: BarChartTemperatureComponent;
  let fixture: ComponentFixture<BarChartTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
