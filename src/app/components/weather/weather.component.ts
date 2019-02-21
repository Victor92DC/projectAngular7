import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import {timer} from 'rxjs';
import * as d3 from 'd3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public records = [];
  public recordsTemperature = [];
  public records1 = [];
  public dataWeather;
  public subscribeTimer;
  public timeLeft;
  public humidity;
  public temperature;
  public date;
  public data;
  public dataT;

  constructor(private api: ApiServiceService, private route: Router) {}

  ngOnInit() {

    this.api.getAllInfo().subscribe( data =>{
      this.dataWeather = data;
    });

    const source = timer(1000, 5000);
    const abc = source.subscribe(val => {
      this.api.getAllInfo().subscribe( data =>{
        this.dataWeather = data;
        this.parseData(this.dataWeather);
      });
    });
  }

   parseData(dataWeather){
    let array = dataWeather.split(" ");
    let date = array[0].substring(0,10);
    let hour = array[0].split("T")[1].substring(0,8);
    let humidity = array[1].split("Humidity(%),")[1].substring(0, 2);
    let temperature = array[1].split(",Temperature(C),")[1];
    this.records.push({
        date : date, 
        hour: hour,
        humidity: parseInt(humidity),
        temperature: parseInt(temperature),
    });
    this.records1.push({
      letter: hour,
      frequency: parseInt(humidity),
    });
    this.recordsTemperature.push({
      date: new Date(date + ' ' + hour),
      value: parseInt(temperature,10)
    });
    if(this.records.length >= 5){
      this.records.splice(0, 1)
    }
    this.data = this.records1;
  }

  changeToTemperature(){
    this.route.navigateByUrl("temperature");
  }

}
