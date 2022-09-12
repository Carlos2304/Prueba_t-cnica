import { AddSubscriberService } from './../service/addSubcriber.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscriber } from '../model/subscriber';
@Component({
    selector:'app-addsubscribers',
    templateUrl: '../views/addSuscribers.component.html',
    styleUrls:['../styles/addSuscriber.scss'],
    providers: [AddSubscriberService]
})

export class AddSubscribersComponent implements OnInit {
    newSubcriber;
    constructor(private router:ActivatedRoute, private route:Router, private addSubscriberService:AddSubscriberService) {
        this.newSubcriber = new Subscriber();
    }
    ngOnInit(): void {
    }
    changeState() :void{
        this.route.navigate(['subscribers'])
    }
    async addSubscriber(subscriberForm:NgForm){
    if(subscriberForm.value.Name!='' && (subscriberForm.value.Email!='' || subscriberForm.value.CountrieCode!='') && subscriberForm.value.PhoneNumber!=''){
       const res = this.addSubscriberService.createSubscriber(subscriberForm.value)   
    }
    }
}