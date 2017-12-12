import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../cities.service';
import { city } from '../city';

@Component({
  selector: 'city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit {

  constructor(public citiesService: CitiesService) { }

  @Output()
  change: EventEmitter<city> = new EventEmitter<city>();

  ngOnInit() {
    this.getCities();
  }

  cities: city[];
  selectedCity: city;

  /**
   * Get list of base cities
   */
  getCities(): void {
    this.citiesService.getCities()
      .subscribe(cities => this.cities = cities)
  }
  
  select(city: city): void {
    this.selectedCity = city;
    this.change.emit(this.selectedCity);
  }

}