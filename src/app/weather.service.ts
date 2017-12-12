import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CitiesService } from './cities.service';

@Injectable()
export class WeatherService {

  
  private url_single: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private url_multi: string = 'https://api.openweathermap.org/data/2.5/group?id='
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
  getWeather(location: string) {
    return this.http.get(this.url_single + location + '&units=metric&appid=' + this.key)
  }

  /**
   * Get weather details for all locations
   */
  getAllWeather() {
    return this.http.get(this.url_multi + this.locationIdList.join() + '&units=metric&appid=' + this.key);
  }
  
}
