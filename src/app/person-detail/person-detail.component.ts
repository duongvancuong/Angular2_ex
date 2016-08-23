import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  moduleId: module.id,
  selector: 'app-person-detail',
  templateUrl: 'person-detail.component.html',
  styleUrls: ['person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

	person: Person;
  constructor(private personService: PersonService, private route: ActivatedRoute) {}


  ngOnInit() {
  	this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.personService.getPerson(id)
        .then(person => this.person = person);
    });
  }

  goBack() {
    window.history.back();
  }

}
