import { ListCountrys } from './../../model/country';
import { PaginationModel } from 'app/model/pagination.model';
import { FilterComponent } from './../../shared/filter/filter.component';
import { PaginationComponent } from './../../shared/components/pagination/pagination.component';
import { CountrieServiceService } from 'app/services/countries/countries.service'; 
import { Component, OnInit } from '@angular/core';
import { Country } from '@app/model/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss', '.././subscribers/suscribersAdd.style.scss'],
  providers: [PaginationComponent, FilterComponent]
})
export class countriesComponent implements OnInit {
    pagination:PaginationModel={
    criteria:'',
    page:1,
    count:10,
    sortOrder:'Code',
    sortType:0
  }
  countList: number = 0;
  listCountries: Country[] = [];
  constructor( private service: CountrieServiceService, paginationComponent: PaginationComponent, filterComponent: FilterComponent  ) { }

  ngOnInit(){
    this.getAllCountrys()
  }
  getAllCountrys(){
    this.service.getAllCountres(this.pagination)
    .subscribe({
      next:(res:ListCountrys)=>{
        this.listCountries = res.Data;
        this.countList = res.Count;
      },
      
      error:(err)=>console.log(err)
    });
  }
  newPage(page: any) {
    this.pagination.count = page.count;
    this.pagination.page = page.currentPage;
    this.getAllCountrys();
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
    this.getAllCountrys();
  }

  filterCriteria(criteria:string){
    this.pagination.criteria = criteria;
    this.getAllCountrys();
  }

}
