import { PaginationComponent } from './../../../shared/components/pagination/pagination.component';
import { BtnDeleteComponent } from './../../../shared/components/buttons/table/btn-delete/btn-delete.component';
import { BtnEditComponent } from 'app/shared/components/buttons/table/btn-edit/btn-edit.component';
import { Router } from '@angular/router';
import { ButtonGenericComponent } from '../../../shared/components/buttons/buttonGeneric/butttonForm.component';
import { ButtonSendComponent } from '../../../shared/components/buttons/send/butttonSend.component';
import { GetAllSubscribers  } from '../service/getAllSubscribers.service'
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: '../views/subscribers.component.html',
  providers: [GetAllSubscribers, ButtonGenericComponent, ButtonSendComponent, BtnEditComponent, BtnDeleteComponent, PaginationComponent]
})
@Injectable({
  providedIn: 'root',
})
export class SubscribersComponent implements OnInit {

  listSubscribers:any;
  data:any;

  constructor( private getAllSubscribers: GetAllSubscribers, buttonGenericComponent: ButtonGenericComponent, 
    btnSend: ButtonSendComponent,private route: Router, private btnEdit: BtnEditComponent, btnDelete: BtnDeleteComponent,
    pagination: PaginationComponent){}
  
  ngOnInit() {
    this.getAllSubscribersM();
  }
  
  async getAllSubscribersM(){
    this.listSubscribers = await this.getAllSubscribers.GetAllSubscribersLocal();
    this.data = this.listSubscribers.Data
  }

  changeState() :void{
    this.route.navigate(['subscribers/add']);
  }
  edit(id:number){
    
  }
}
