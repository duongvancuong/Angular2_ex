import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [PersonService]
})
export class DashboardComponent implements OnInit {
	topPerson: Person[] = [];
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
  	this.getPersonTop();
  }

  getPersonTop() {
  	this.personService.getPersons().then(persons => this.topPerson = persons.slice(1, 5)).catch(() => console.log('error'));
  }

  goToDetail(person: Person) {
  	let link = ['/detail', person.id];
  	this.router.navigate(link);
  }


}
