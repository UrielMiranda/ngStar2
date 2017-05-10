import { Component, OnInit } from '@angular/core';
import {StarwarsService} from '../../services/starwars.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Array<Object>;
  constructor(private starwarsService: StarwarsService) { }

  listCharacters() {
    const category = 'people';
    this.starwarsService.listCategory(category)
      .then(response => {
        this.people = response.results;
        console.log(this.people);
      });
  }

  ngOnInit() {
    this.listCharacters();
  }

}
