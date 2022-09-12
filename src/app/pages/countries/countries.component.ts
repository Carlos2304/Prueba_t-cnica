import { CountrieServiceService } from './services/countries.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class countriesComponent implements OnInit {
    pagination={
    criteria:'',
    page:1,
    count:10,
    sortOrder:'Code',
   sortType:0
  }
  listCountries:any;
  constructor( private service: CountrieServiceService) { }

  ngOnInit(){
    this.service.getAllCountres(this.pagination)
    .subscribe({
      next:(res)=>this.listCountries = res.Data,
      error:(err)=>console.log(err)
    });
  }

}
