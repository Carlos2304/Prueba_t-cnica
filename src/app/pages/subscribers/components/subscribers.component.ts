import { PaginationComponent } from './../../../shared/components/pagination/pagination.component';
import { BtnDeleteComponent } from './../../../shared/components/buttons/table/btn-delete/btn-delete.component';
import { BtnEditComponent } from 'app/shared/components/buttons/table/btn-edit/btn-edit.component';
import { Router } from '@angular/router';
import { ButtonGenericComponent } from '../../../shared/components/buttons/buttonGeneric/butttonForm.component';
import { ButtonSendComponent } from '../../../shared/components/buttons/send/butttonSend.component';
import { GetAllSubscribers  } from '../service/getAllSubscribers.service'
import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: '../views/subscribers.component.html',
  styleUrls: ['../styles/suscribersAdd.style.scss'],
  providers: [GetAllSubscribers, ButtonGenericComponent, ButtonSendComponent, BtnEditComponent, BtnDeleteComponent, PaginationComponent]
})
export class SubscribersComponent implements OnInit {
    pagination={
    criteria:'',
    page:1,
    count:10,
    sortOrder:'PublicId',
   sortType:0
  }
  countList:number=0;
  data:any;
  listSubscribers:any;

  constructor( private getAllSubscribers: GetAllSubscribers, buttonGenericComponent: ButtonGenericComponent, 
    btnSend: ButtonSendComponent,private route: Router, private btnEdit: BtnEditComponent, btnDelete: BtnDeleteComponent,
    pagination: PaginationComponent){
    }
  
  ngOnInit() {
    this.getAllSubscribersM()
  }
  
 getAllSubscribersM(){
    this.getAllSubscribers.getAllSubscribers(this.pagination)
    .subscribe({
      next:(res)=>{
        this.listSubscribers= res;
        this.countList=this.listSubscribers.Count;
        this.data = this.listSubscribers.Data;
      },
      error:(err)=>console.log("Faill")
    })
  }

  changeState() :void{
    this.route.navigate(['subscribers/add']);
  }
  edit(id:number){
  }
  newPage(page:any){
    this.pagination.count=page.count;
    this.pagination.page=page.currentPage;
    this.getAllSubscribersM()
  }
}
