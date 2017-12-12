import { Component, OnInit, Input } from '@angular/core';
import { city } from '../city';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  
  @Input()
  selectedCity: city = {id: 123, name: "New York"};
  
  constructor() { }

  ngOnInit() {
  }

}
