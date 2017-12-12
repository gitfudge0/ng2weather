import { Component, OnInit, Input } from '@angular/core';
import { city } from '../city';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  
  private location;
  private time = new Date();

  @Input() set selectedCity(selectedCity: city) {
    this.location = selectedCity;
  }

  /**
   * Constructor for weather details component
   * @param weatherService Service to fetch weather data
   */
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  
}
