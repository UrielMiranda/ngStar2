import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { PeopleComponent } from './components/people/people.component';
import {StarServicesService} from './services/star-services.service';
import {StarwarsService} from './services/starwars.service';
import {MaterialModule} from '@angular/material';
import {appRoutingProvides, routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    HomeComponent,
    StarshipsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [StarServicesService, StarwarsService, appRoutingProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
