import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CitiesService } from './cities.service';

import { AppComponent } from './app.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
