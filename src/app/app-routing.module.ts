import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ForecastComponent } from './forecast/forecast.component';

const Routes = [
  {path: '', component: ContainerComponent},
  {path: 'forecast/:name', component: ForecastComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
