import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesGuard } from './shared/services/services.guard';
const routes: Routes = [

  {
    path: 'signIn', component:AuthComponent,pathMatch: 'prefix'
  },
  { path: 'subscribers', loadChildren: () => import('./pages/subscribers/subscribers.module').then(m => m.SubscribersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
