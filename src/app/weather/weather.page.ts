import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  weatherDescription: string = '';
  temperature: number = 0;

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.getWeather();
  }

  getWeather() {
    const fakeApiResponse = {
      description: 'Parcialmente soleado',
      temperature: 28,
    };

    this.weatherDescription = fakeApiResponse.description;
    this.temperature = fakeApiResponse.temperature;
  }
}
