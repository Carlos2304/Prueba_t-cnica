import { Router } from '@angular/router';
import { ButtonGenericComponent } from '../../../shared/components/buttons/buttonGeneric/butttonForm.component';
import { ButtonSendComponent } from '../../../shared/components/buttons/send/butttonSend.component';
import { GetAllSubscribers  } from '../service/getAllSubscribers.service'
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: '../views/subscribers.component.html',
  providers: [GetAllSubscribers, ButtonGenericComponent, ButtonSendComponent]
})
@Injectable({
  providedIn: 'root',
})
export class SubscribersComponent implements OnInit {

  listSubscribers={}

  constructor( private getAllSubscribers: GetAllSubscribers, buttonGenericComponent: ButtonGenericComponent, btnSend: ButtonSendComponent,private route: Router){}
  
  ngOnInit() {
    this.getAllSubscribersM();
  }
  
  async getAllSubscribersM(){
    this.listSubscribers = await this.getAllSubscribers.GetAllSubscribersLocal();
  }

  changeState() :void{
    this.route.navigate(['subscribers/add']);
  }
}
