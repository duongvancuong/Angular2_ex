import { Component, OnInit } from '@angular/core';
// import { PersonComponent } from './person/person.component';
// import { Person } from './person';
// import { PersonService } from './person.service';


@Component({
  moduleId: module.id,
  selector: 'app',
  // directives:[PersonComponent],
  templateUrl: 'ang2.component.html',
  styleUrls: ['ang2.component.css']
  // providers: [PersonService]
})
export class Ang2AppComponent {
	// constructor(public personSevice: PersonService) { }
  title = 'AngularJS 2 Example!';

  ngOnInit() {
  }
}