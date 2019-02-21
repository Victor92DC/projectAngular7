import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTempComponent } from './weather-temp.component';

describe('WeatherTempComponent', () => {
  let component: WeatherTempComponent;
  let fixture: ComponentFixture<WeatherTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
