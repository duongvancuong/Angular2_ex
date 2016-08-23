import { Routes, RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component' ;
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonComponent } from './person/person.component';
const appRoutes: Routes = [
	{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
	{
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: PersonDetailComponent
  },
  {
    path: 'persons',
    component: PersonComponent
  }
];
export const routing = RouterModule.forRoot(appRoutes);
