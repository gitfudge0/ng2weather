import { Component, OnInit } from '@angular/core';
import { city } from '../city';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedCity;
  currentCity: city;

  setCity(event) {
    this.selectedCity = event;
  }
}
