import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherTempComponent } from './components/weather-temp/weather-temp.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'temperature', component: WeatherTempComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
