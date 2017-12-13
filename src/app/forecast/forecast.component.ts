import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { over, lensProp, pipe, splitEvery, map, nth } from 'ramda';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  private forecast;

  constructor(
    private weatherService: WeatherService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getName()
  }

  /**
   * Get name of the city
   */
  getName(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.weatherService.getForecast(name)
      .subscribe(data => {
        this.forecast = data
        this.forecast = over(
          lensProp("list"),
          pipe(
            splitEvery(8),
            map(nth(3))
          )
        )(this.forecast)
        console.log(this.forecast)
      });
  }

  /**
   * Go to previous state
   */
  goBack(): void {
    this.location.back();
  }

}
