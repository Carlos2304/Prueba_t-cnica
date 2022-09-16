import { ConfirmationComponent } from '@app/shared/components/confirmation/confirmation.component';
import { SubscriberModelMult } from './../../../model/subscriber';
import { FormArray, FormGroup } from '@angular/forms';
import { SubscribersService } from 'app/services/susbscribers/subscribers.service';
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscriberModel } from '../../../model/subscriber';
import { typeMessage } from '@app/shared/components/confirmation/model/confirmation.model';

@Component({
  selector: 'app-addsubscribers',
  templateUrl: './addSuscribers.component.html',
  styleUrls: ['./addSuscriber.scss', '../../../app.component.scss'],
  providers: [ConfirmationComponent, SubscribersService],
})
export class AddSubscribersComponent {
  @ViewChild(ConfirmationComponent) child!: ConfirmationComponent;
  subscriberForm: FormGroup = this.subscriberService.getFormGroup();
  formSubscribersGroup = new FormGroup({
    Subscribers: new FormArray([this.subscriberForm]),
  });
  isUpdate: boolean = false;
  title: string = 'Registrar subscritores';
  constructor(
    private route: Router,
    private subscriberService: SubscribersService,
    private confirmationComponent: ConfirmationComponent,
    private rA: ActivatedRoute
  ) {}

  changeState(): void {
    this.route.navigate(['subscribers']);
  }
  addSubscriber() {
    const newData: SubscriberModelMult =
      this.formSubscribersGroup.getRawValue();
    this.subscriberService.createSubscriber(newData).subscribe({
      next: () => {
        this.child.showMessageModal(typeMessage.saved).
        subscribe(()=>{
          this.subscriberForm = this.subscriberService.getFormGroup();
          this.formSubscribersGroup = new FormGroup({
            Subscribers: new FormArray([this.subscriberForm]),
          });
        });
     
      },
      error: (err) => console.log(err),
    });
  }

  get Subscribers() {
    return this.formSubscribersGroup.controls.Subscribers;
  }

  addSubscribers() {
    const subscriberForm: FormGroup = this.subscriberService.getFormGroup();
    this.Subscribers.push(subscriberForm);
  }
  deleteSubscriber(susIndex: number) {
    if (this.Subscribers.length > 1) {
      this.Subscribers.removeAt(susIndex);
    }
  }
}
