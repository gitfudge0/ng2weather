import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../cities.service';
import { city } from '../city';
import { WeatherService } from '../weather.service';
import { pipe, prop, head, filter, contains, uniqBy } from 'ramda';

@Component({
  selector: 'city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit {

  private geolocationPosition;
  private detectedCity;

  constructor(
    public citiesService: CitiesService,
    private weatherService: WeatherService
  ) { }

  @Output()
  change: EventEmitter<city> = new EventEmitter<city>();

  ngOnInit() {
    this.getCities();
    
    // Detect location from browser and add to default list
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position;
              let lat = this.geolocationPosition.coords.latitude;
              let lon = this.geolocationPosition.coords.longitude;
              this.weatherService.getLocationByCoords(lat, lon)
                .subscribe(data => {
                  let city = pipe(
                    prop("results"),
                    head,
                    prop("address_components"),
                    filter(
                      pipe(
                        prop("types"),
                        contains("locality")
                      )
                    ),
                    head,
                    prop("long_name")
                  )(data);
                  this.weatherService.getWeatherByLocation(city)
                    .subscribe(weather => {
                      this.detectedCity = weather
                      this.cities.push(this.detectedCity);
                      this.cities = uniqBy(prop("name"), this.cities);
                    })
                })

          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
  };

    this.weatherService.getAllWeather()
      .subscribe(data => {
        this.cities = data;
        this.cities = this.cities.list;
      });
  }

  private cities: any;
  private selectedCity: city;
  private sortOrder: string = '+';

  /**
   * Get list of base cities
   */
  getCities(): void {
    this.citiesService.getCities()
      .subscribe(cities => this.cities = cities)
  }
  
  /**
   * Select a city and pass to weather component
   * @param city selected city
   */
  select(city: any): void {
    this.selectedCity = city;
    this.change.emit(this.selectedCity);
  }

  /**
   * Change sorting order of list
   */
  switchSortOrder(): void {
    this.sortOrder == '+' ? this.sortOrder = '-' : this.sortOrder = '+';
  } 

}