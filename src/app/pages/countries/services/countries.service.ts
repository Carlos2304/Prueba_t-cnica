import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_API } from './../../../shared/config/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrieServiceService {

  constructor(private http: HttpClient) { }

  getAllCountres(pagination:any){

    return this.http.get<any>(`${SERVER_API}/countries/`, {
      params:new HttpParams()
      .set('criteria', pagination.criteria)
      .set('page', pagination.page)
      .set('count', pagination.count)
      .set('sortOrder', pagination.sortOrder)
      .set('sortType', pagination.sortType)
    })
  }
}
