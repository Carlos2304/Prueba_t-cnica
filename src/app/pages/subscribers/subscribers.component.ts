import { PaginationModel } from '../../model/pagination.model';
import { SubscriberListModel, ListData } from '../../model/subscribersList.model';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BtnDeleteComponent } from 'app/shared/components/buttons/btn-delete/btn-delete.component'; 
import { BtnEditComponent } from 'app/shared/components/buttons/btn-edit/btn-edit.component';
import { Router } from '@angular/router';
import { SubscribersService } from 'app/services/susbscribers/subscribers.service'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./suscribersAdd.style.scss'],
  providers: [SubscribersService, BtnEditComponent, BtnDeleteComponent, PaginationComponent]
})
export class SubscribersComponent implements OnInit {
    pagination:PaginationModel={
    criteria:'',
    page:1,
    count:10,
    sortOrder:'PublicId',
   sortType:0
  }
  countList:number=0;
  listSubscribers:ListData[]=[];

  constructor( private SubscribersService: SubscribersService
    ,private route: Router, private btnEdit: BtnEditComponent, btnDelete: BtnDeleteComponent,
    pagination: PaginationComponent){
    }
  
  ngOnInit() {
    this.getAllSubscribersM()
  }
  
 getAllSubscribersM(){
    this.SubscribersService.getAllSubscribers(this.pagination)
    .subscribe({
      next:(res:SubscriberListModel)=>{
        this.listSubscribers= res.Data;
        this.countList=res.Count;
      },
      error:(err)=>console.log(err)
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
