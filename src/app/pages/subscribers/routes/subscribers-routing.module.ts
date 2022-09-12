import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesGuard } from 'app/shared/services/services.guard';

//Components
import { AddSubscribersComponent } from '../components/addSubscriber.component';
import { SubscribersComponent } from '../components/subscribers.component';
import { UpdateSubscriber } from '../service/updateSubscribe.service';

const routes: Routes = [
  {
    path: '',
    title: 'subscriber',
    component: SubscribersComponent,
  },
  {
    path: 'add',
    component: AddSubscribersComponent, pathMatch: 'full'
  },
  {
    path: 'update',
    component: UpdateSubscriber,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SubscribersRoutingModule {}
