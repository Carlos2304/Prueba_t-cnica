import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersRoutingModule } from './routes/subscribers-routing.module';
import { ServicesGuard } from 'app/shared/services/services.guard';

//Components
import { AddSubscribersComponent } from './components/addSubscriber.component';
import { SubscribersComponent } from './components/subscribers.component';
import { ButtonGenericComponent } from './../../shared/components/buttons/buttonGeneric/butttonForm.component';
import { ButtonSendComponent } from './../../shared/components/buttons/send/butttonSend.component';
import { PaginationComponent } from './../../shared/components/pagination/pagination.component';


@NgModule({
  declarations: [
    SubscribersComponent,
    AddSubscribersComponent,
    PaginationComponent,
    ButtonGenericComponent,
    ButtonSendComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule, 
    SubscribersRoutingModule,
    FormsModule
  ],
  providers: [ServicesGuard]
})
export class SubscribersModule { }
