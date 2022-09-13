import { PaginationModel } from './../model/pagination.model';
import { SubscriberListModel } from './../model/subscribersList.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { store } from './../../../shared/config/Storage/index';
import { SERVER_API, Store } from '../../../shared/config/config';
import { Subscriber } from './../model/subscriber';
import { TokenInterceptorService } from 'app/shared/services/token.interceptor.service';
import { AuthService } from '@pages/auth/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllSubscribers {
  constructor(private http:HttpClient){}
  
   getAllSubscribers(pagination:PaginationModel):Observable<SubscriberListModel>{
    return this.http.get<SubscriberListModel>(`${SERVER_API}/subscribers/`, {
      params: new HttpParams()
        .set('criteria', pagination.criteria)
        .set('page', pagination.page)
        .set('count', pagination.count)
        .set('sortOrder', pagination.sortOrder)
        .set('sortType', pagination.sortType)
    })
  }
}
