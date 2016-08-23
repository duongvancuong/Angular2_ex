import { Injectable } from '@angular/core';
import { Person } from './person';
import { Persons } from './mock-persons';

@Injectable()
export class PersonService {

  // getPersons() {
  // 	let promise = Promise.resolve(Persons);
		// console.log(promise);
		// return promise;
  // }

  getHeroes(): Promise<Person[]> {
    return Promise.resolve(Persons);
  }

  getHeroesSlowly(): Promise<Person[]> {
    return new Promise<Person[]>(resolve =>
      setTimeout(() => resolve(Persons), 2000) // 2 seconds
    );
  }

  // getPerson(id: number) {
  //   return this.getPersons()
  //              .then(persons => persons.find(person => person.id === id));
  // }

  getPerson(id: number): Promise<Person> {
    return this.getHeroes()
               .then(persons => persons.find(person => person.id === id));
  }

}