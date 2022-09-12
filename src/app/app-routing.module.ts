import { SubscribersComponent } from './pages/subscribers/components/subscribers.component';
import { UpdateSubscriber } from './pages/subscribers/service/updateSubscribe.service';
import { AddSubscribersComponent } from './pages/subscribers/components/addSubscriber.component';
import { countriesComponent } from './pages/countries/countries.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesGuard } from './shared/services/services.guard';
const routes: Routes = [

  {
    path: 'signIn', component:AuthComponent
  },
  {
    path: 'countries', component:countriesComponent, canActivate: [ServicesGuard]
  }, 
  { path: 'subscribers', component: SubscribersComponent, canActivate: [ServicesGuard]},
  {
    path: 'subscribers/add',
    component: AddSubscribersComponent, canActivate: [ServicesGuard]
  },
  {
    path: 'subscribers/update',
    component: UpdateSubscriber,
    canActivate: [ServicesGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
