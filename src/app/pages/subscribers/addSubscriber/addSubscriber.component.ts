import { SubscriberModelMult } from './../../../model/subscriber';
import { FormArray, FormControl, FormGroup, NgForm, Validators  } from '@angular/forms';
import { SubscribersService } from 'app/services/susbscribers/subscribers.service'; 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriberModel } from '../../../model/subscriber';

@Component({
  selector: 'app-addsubscribers',
  templateUrl: './addSuscribers.component.html',
  styleUrls: ['./addSuscriber.scss', '../../../app.component.scss'],
})
export class AddSubscribersComponent {
  subscriberForm:FormGroup = this.subscriberService.getFormGroup()
  formSubscribersGroup = new FormGroup({
    Subscribers: new FormArray([
      this.subscriberForm
    ])
  });
  
  constructor(
    private route: Router,
    private subscriberService: SubscribersService
  ) {
  }

  changeState(): void {
    this.route.navigate(['subscribers']);
  }
  addSubscriber() {
        const newData:SubscriberModelMult = this.formSubscribersGroup.getRawValue()
        this.subscriberService.createSubscriber(newData)
        .subscribe({
          next: (res)=>console.log(res),
          error: (err)=>console.log(err),
        })
  }

  get Subscribers(){
    return this.formSubscribersGroup.controls.Subscribers}

    addSubscribers(){
    const subscriberForm:FormGroup = this.subscriberService.getFormGroup()
    this.Subscribers.push(subscriberForm)
  }
  deleteSubscriber(susIndex: number) {
    if(this.Subscribers.length>1){
      this.Subscribers.removeAt(susIndex)
    }
    
  }
}
