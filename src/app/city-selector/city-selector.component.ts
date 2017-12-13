import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../cities.service';
import { city } from '../city';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit {

  constructor(
    public citiesService: CitiesService,
    private weatherService: WeatherService
  ) { }

  @Output()
  change: EventEmitter<city> = new EventEmitter<city>();

  ngOnInit() {
    this.getCities();
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