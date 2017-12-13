import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CitiesService } from './cities.service';

@Injectable()
export class WeatherService {

  
  private url_single: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private url_multi: string = 'https://api.openweathermap.org/data/2.5/group?id=';
  private url_geo: string = 'http://api.openweathermap.org/data/2.5/weather?lat='
  private forecast: string = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private key: string = 'd2f0943d34f3c3e9c586c6460447f9e7';

  private locationIdList = new Array();
  
  constructor(
    private http: HttpClient,
    private citiesService: CitiesService
  ) { 
    this.citiesService.getCities()
    .subscribe(cities => {
      this.locationIdList = cities.map(city => city.id);
      console.log(this.locationIdList)
    })
  }

  /**
   * Get weather details for a particular location
   * @param location {string} - Location for which weather data is being fetched
   */
  getWeatherByLocation(location: string) {
    return this.http.get(this.url_single + location + '&units=metric&appid=' + this.key)
  }

  /**
   * Get current city based on coordinates
   * @param lat Latitude of current location
   * @param lon Longitude of current location
   */
  getLocationByCoords(lat: string, lon: string) {
    return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&sensor=false');
  }

  /**
   * Get weather details for all locations
   */
  getAllWeather() {
    return this.http.get(this.url_multi + this.locationIdList.join() + '&units=metric&appid=' + this.key);
  }

  getForecast(location: string) {
    return this.http.get(this.forecast + location + '&units=metric&appid=' + this.key);
  }
  
}
