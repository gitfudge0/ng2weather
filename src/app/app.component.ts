import { Component, Input } from '@angular/core';
import { city } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedCity = {id: 123, name: "New York"}
  currentCity: city;

  setCity(event) {
    this.selectedCity = event;
  }
}
