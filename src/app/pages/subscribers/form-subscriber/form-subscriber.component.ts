import { Observable, Subject } from 'rxjs';
import { ConfirmationComponent } from '@app/shared/components/confirmation/confirmation.component';
import { FormGroup } from '@angular/forms';
import { SubscriberModel } from './../../../model/subscriber';
import { Component, ViewChild } from '@angular/core';
import { SubscribersService } from '@app/services/susbscribers/subscribers.service';
import { ActivatedRoute } from '@angular/router';
import { typeMessage } from '@app/shared/components/confirmation/model/confirmation.model';

@Component({
  selector: 'form-subscriber',
  templateUrl: './form-subscriber.component.html',
  styleUrls: ['./form-subscriber.component.scss', '../../../app.component.scss'],
  providers: [SubscribersService, ConfirmationComponent],
})
export class FormSubscriberComponent {
  @ViewChild(ConfirmationComponent) child!: ConfirmationComponent;
  formUpdateSubscriber: FormGroup=this.subscriberService.getFormGroup();
  showFormUpdate: boolean = false;
  valueObserver:Subject<boolean>;
  constructor(public subscriberService: SubscribersService, private rA:ActivatedRoute, private confirmationComponent:ConfirmationComponent ){
    this.valueObserver=new Subject();
  } 
  setDataGroup(dat: SubscriberModel):Observable<boolean>{
    let subs:SubscriberModel = dat
    this.formUpdateSubscriber.setValue(dat)
    return this.valueObserver.asObservable()
  }
  changeState(): void {
    this.formUpdateSubscriber=this.subscriberService.getFormGroup();
    this.showFormUpdate=false;
    this.valueObserver.next(false);
  }
  showForm(): void {
    this.showFormUpdate=true;
  }
  updateSubscriber(){
    this.subscriberService.updateSubscribers(this.formUpdateSubscriber.getRawValue())
    .subscribe((res)=>{
      this.child.showMessageModal(typeMessage.updated)
      .subscribe(()=>{
        this.showFormUpdate=false;
        this.valueObserver.next(true);
      })
      
    })
  }
}
