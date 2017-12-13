import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CitiesService } from './cities.service';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherService } from './weather.service';
import { OrderBy } from './orderBy.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { ForecastComponent } from './forecast/forecast.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    WeatherDetailsComponent,
    OrderBy,
    ForecastComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CitiesService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
