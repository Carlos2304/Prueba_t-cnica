import { SubscribersComponent } from './pages/subscribers/subscribers.component'; 
import { AddSubscribersComponent } from './pages/subscribers/addSubscriber/addSubscriber.component';
import { countriesComponent } from './pages/countries/countries.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesGuard } from './shared/services/services.guard';
const routes: Routes = [
  {
    path: '',
    component: SubscribersComponent,
    canActivate: [ServicesGuard],
  },
  {
    path: 'signIn',
    component: AuthComponent,
  },
  {
    path: 'countries',
    component: countriesComponent,
    canActivate: [ServicesGuard],
  },
  {
    path: 'subscribers',
    component: SubscribersComponent,
    canActivate: [ServicesGuard],
  },
  {
    path: 'subscribers/add',
    component: AddSubscribersComponent,
    canActivate: [ServicesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
