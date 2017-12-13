import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { over, lensProp, pipe, splitEvery, map, nth, prop } from 'ramda';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  private forecast;
  type = 'line';
  data = {
    labels: ["1 Day", "2 Day", "3 Day", "4 Day", "5 Day"],
    datasets: [
      {
        label: "Temperature",
        data: [],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)'
        ],
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

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
        this.data.datasets[0].data = pipe(
          prop("list"),
          splitEvery(8),
          map(nth(3)),
          map(prop("main")),
          map(prop("temp"))
        )(data)
        console.log(this.data)
      });
  }

  /**
   * Go to previous state
   */
  goBack(): void {
    this.location.back();
  }

}
