import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  moduleId: module.id,
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent{

	constructor(private router: Router, private personService: PersonService ) {}

	listPerson: Person[];
	selectedPerson: Person;

	getListPerson() {
	  this.personService.getPersons().then(data => this.listPerson = data).catch(()=> console.log('erro'));
  }

  ngOnInit() {
    this.getListPerson();
  }

  onSelect(person: Person) {
  	this.selectedPerson = person;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedPerson.id]);
  }


	
}
