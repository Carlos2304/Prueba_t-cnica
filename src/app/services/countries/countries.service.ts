import { ListCountrys } from '@app/model/country'; 
import { PaginationModel } from 'app/model/pagination.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_API } from 'app/shared/config/config'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrieServiceService {

  constructor(private http: HttpClient) { }

  getAllCountres(pagination:PaginationModel):Observable<ListCountrys>{
    return this.http.get<ListCountrys>(`${SERVER_API}/countries/`, {
      params:new HttpParams()
      .set('criteria', pagination.criteria)
      .set('page', pagination.page)
      .set('count', pagination.count)
      .set('sortOrder', pagination.sortOrder)
      .set('sortType', pagination.sortType)
    })
  }
}
