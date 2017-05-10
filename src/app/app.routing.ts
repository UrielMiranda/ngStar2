import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {PeopleComponent} from './components/people/people.component';
import {StarshipsComponent} from './components/starships/starships.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProvides: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
