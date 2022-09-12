import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./style/pagination.component.scss'],
  providers: []
})
export class PaginationComponent implements OnInit {

  @Input() countList: number = 50; //Number of records fetch
  count:number = 10; //Maximum number of records to display
  currentPage:number = 1; //Current page
  pageInitial:number = 1; //Shows the initial number of pagination
  pageAverage:number = 2; //Shows the average number of pagination, change 
  pageFinish:number = 3; //Shows the finish number of pagination, number maximum of pages
  pageMax:number =3

  @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  public onPreviousPage(): void {
    if(this.currentPage>1){
    
    }
    this.previousPage.emit();
  }

}
