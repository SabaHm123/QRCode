import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  weatherData: any;
  city: string = 'tunis'; // Ville par défaut

  constructor(private http: HttpClient) {}

  fetchWeather() {
    const apiKey = '41dfd3eb80914553fc49161dee62ab30';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const url = `${baseUrl}?q=${this.city}&appid=${apiKey}&units=metric`;

    this.http.get(url).subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données météo', error);
      }
    );
  }
}
