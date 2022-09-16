import { SubscriberModel } from './../../model/subscriber';
import { FormSubscriberComponent } from './form-subscriber/form-subscriber.component';
import { FormControl, FormGroup } from '@angular/forms';
import { PaginationModel } from '../../model/pagination.model';
import {
  SubscriberListModel,
  ListData,
} from '../../model/subscribersList.model';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BtnDeleteComponent } from 'app/shared/components/buttons/btn-delete/btn-delete.component';
import { BtnEditComponent } from 'app/shared/components/buttons/btn-edit/btn-edit.component';
import { Router, ActivatedRoute } from '@angular/router';
import { SubscribersService } from 'app/services/susbscribers/subscribers.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ConfirmationComponent } from '@app/shared/components/confirmation/confirmation.component';
import { typeMessage } from './../../shared/components/confirmation/model/confirmation.model';
import { FilterComponent } from '@app/shared/filter/filter.component';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./suscribersAdd.style.scss'],
  providers: [
    SubscribersService,
    BtnEditComponent,
    BtnDeleteComponent,
    PaginationComponent,
    ConfirmationComponent,
    FilterComponent,
    FormSubscriberComponent,
  ],
})
export class SubscribersComponent implements OnInit {
  @ViewChild(ConfirmationComponent) child!: ConfirmationComponent;
  @ViewChild(FormSubscriberComponent) formUpdate!: FormSubscriberComponent;

  pagination: PaginationModel = {
    criteria: '',
    page: 1,
    count: 10,
    sortOrder: 'PublicId',
    sortType: 0,
  };
  countList: number = 0;
  listSubscribers: ListData[] = [];

  constructor(
    private subscribersService: SubscribersService,
    private route: Router,
    btnEdit: BtnEditComponent,
    btnDelete: BtnDeleteComponent,
    pagination: PaginationComponent,
    filter: FilterComponent,
    formSubscriberCom: FormSubscriberComponent,
    private rA: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllSubscribersM();
  }

  getAllSubscribersM() {
    this.subscribersService.getAllSubscribers(this.pagination).subscribe({
      next: (res: SubscriberListModel) => {
        this.listSubscribers = res.Data;
        this.countList = res.Count;
      },
      error: (err) => console.log(err),
    });
  }

  changeState(): void {
    this.route.navigate(['subscribers/add']);
  }

  edit(id: number) {
    this.subscribersService.getSubscribers(id).subscribe((res) => {
      if (res) {
        this.formUpdate.showForm();
        this.formUpdate.setDataGroup(res).subscribe(() => {
          this.getAllSubscribersM();
        });
      }
    });
  }

  newPage(page: any) {
    this.pagination.count = page.count;
    this.pagination.page = page.currentPage;
    this.getAllSubscribersM();
  }
  delete(id: number) {
    this.child.showMessageModal(typeMessage.delete).subscribe({
      next: (res) => {
        if (res) {
          this.subscribersService
            .deleteSubscribe(id)
            .subscribe(() =>
              this.child
                .showMessageModal(typeMessage.deleted)
                .subscribe(() => this.getAllSubscribersM())
            );
        }
      },error: ()=>{throw new Error('Error')}
    });
  }
  filterCriteria(criteria: string) {
    this.pagination.criteria = criteria;
    this.getAllSubscribersM();
  }

  filter(opt: string): void {
    if (this.pagination.sortOrder == opt) {
      this.pagination.sortType === 0
        ? (this.pagination.sortType = 1)
        : (this.pagination.sortType = 0);
    } else {
      this.pagination.sortOrder = opt;
      this.pagination.sortType = 0;
    }
    this.getAllSubscribersM();
  }
}
