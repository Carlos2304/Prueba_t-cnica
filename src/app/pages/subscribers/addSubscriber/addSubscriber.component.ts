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

  formSubscribers:FormGroup = this.subscriberService.getFormGroup()

  
  formSubscribersGroup = new FormGroup({
    Subscribers: new FormArray( [
      this.formSubscribers
    ])
  });
  
  constructor(
    private route: Router,
    private subscriberService: SubscribersService
  ) {
    console.log(this.formSubscribersGroup)
  }

  changeState(): void {
    this.route.navigate(['subscribers']);
  }
  addSubscriber() {
        const newData = this.formSubscribers.getRawValue()
        // this.subscriberService.createSubscriber(newData)
        // .subscribe({
        //   next: (res)=>console.log(res),
        //   error: (err)=>console.log(err),
        // })
  }

  getEmailControl():FormControl {
    return this.formSubscribers.get('Email') as FormControl;
  }

}
