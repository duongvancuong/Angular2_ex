import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { Ang2AppComponent }   from './ang2.component';
import { routing }        from './app.routing';

import { PersonComponent }      from './person/person.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PersonDetailComponent }  from './person-detail/person-detail.component';

import { PersonService }  from './person.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    Ang2AppComponent,
    PersonComponent,
    DashboardComponent,
    PersonDetailComponent
  ],
  providers: [
    PersonService
  ],
  bootstrap: [ Ang2AppComponent ]
})
export class AppModule {
}
