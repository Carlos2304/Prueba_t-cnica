import { SubscriberModelMult } from './../../model/subscriber';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriberModel } from '../../model/subscriber';
import { SERVER_API } from 'app/shared/config/config';
import { PaginationModel } from 'app/model/pagination.model';
import { SubscriberListModel } from 'app/model/subscribersList.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private http: HttpClient) {}

  getAllSubscribers(
    pagination: PaginationModel
  ): Observable<SubscriberListModel> {
    return this.http.get<SubscriberListModel>(`${SERVER_API}/subscribers/`,{
      params: new HttpParams()
        .set('criteria', pagination.criteria)
        .set('page', pagination.page)
        .set('count', pagination.count)
        .set('sortOrder', pagination.sortOrder)
        .set('sortType', pagination.sortType),
    });
  }

  getSubscribers(id: number): Observable<SubscriberModel> {
    return this.http.get<SubscriberModel>(`${SERVER_API}/subscribers/${id}`); //no retorna el pais, ni el telefono
  }

  createSubscriber(subscriber:SubscriberModelMult) {
    return this.http.post(`${SERVER_API}/subscribers`,subscriber);
  }
  deleteSubscribe(id: number): Observable<any> {
    return this.http.delete(`${SERVER_API}/subscribers/${id}`);
  }

  updateSubscribers(newDate:SubscriberModel): Observable<any> {
    return this.http.put(`${SERVER_API}/subscribers/${newDate.Id}`,newDate);
  };

  getFormGroup():FormGroup {
    let formAddSubscriber = new FormGroup({
      SystemId: new FormControl('', { nonNullable: true }),
      PublicId: new FormControl(0, { nonNullable: true }),
      EndpointsCount: new FormControl(0, { nonNullable: true }),
      LastActivity: new FormControl('', { nonNullable: true }),
      LastActivityUtc: new FormControl('', { nonNullable: true }),
      LastActivityString: new FormControl('', { nonNullable: true }),
      SubscriptionDate: new FormControl('', { nonNullable: true }),
      SubscriptionMethod: new FormControl(0, { nonNullable: true }),
      SubscriptionState: new FormControl(0, { nonNullable: true }),
      SubscriptionStateDescription: new FormControl('', { nonNullable: true }),
      ValidEmail: new FormControl(false, { nonNullable: true }),
      Activity: new FormControl('', { nonNullable: true }),
      ConnectionState: new FormControl(0, { nonNullable: true }),
      Id: new FormControl(0, { nonNullable: true }),

      Name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: false,
      }),
      Email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        nonNullable: false,
      }),
      CountryCode: new FormControl('', {
        validators: [Validators.required],
        nonNullable: false,
      }),
      CountryName: new FormControl('', { nonNullable: true }),
      PhoneCode: new FormControl('', { nonNullable: true }),
      PhoneNumber: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(16)],
        nonNullable: false,
      }),
      PhoneCodeAndNumber: new FormControl('', { nonNullable: true }),
      JobTitle: new FormControl('', { nonNullable: true }),
      Area: new FormControl('', { nonNullable: true }),
      Topics: new FormControl([], { nonNullable: true }),
    });
    return formAddSubscriber;
  }
  }
