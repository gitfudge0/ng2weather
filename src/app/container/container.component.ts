import { Component, OnInit } from '@angular/core';
import { city } from '../city';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {


  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    
  }

  selectedCity;
  currentCity: city;

  setCity(event) {
    this.selectedCity = event;
  }
}
