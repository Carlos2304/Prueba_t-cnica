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
    
  //Fail to Authorization header
   getAllSubscribers(pagination:any){
    return this.http.get(`${SERVER_API}/subscribers/`, {
      params: new HttpParams()
        .set('criteria', pagination.criteria)
        .set('page', pagination.page)
        .set('count', pagination.count)
        .set('sortOrder', pagination.sortOrder)
        .set('sortType', pagination.sortType)
    })
  }
  GetAllSubscribersLocal(){
    return store.getters.getDataLocal();
  }
}
