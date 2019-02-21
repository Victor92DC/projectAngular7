import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BarChartTemperatureComponent } from './components/bar-chart-temperature/bar-chart-temperature.component';
import { WeatherTempComponent } from './components/weather-temp/weather-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherComponent,
    BarChartComponent,
    BarChartTemperatureComponent,
    WeatherTempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
