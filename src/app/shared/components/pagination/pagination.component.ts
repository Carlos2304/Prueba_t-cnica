import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./style/pagination.component.scss'],
  providers: []
})
export class PaginationComponent implements OnInit {

  @Input() state:number = 0; //0 list, 1 add, 2 detail, 3 delete
  @Input() countList: number = 50; //Number of records fetch
  @Input() count:number = 10; //Maximum number of records to display
  @Input() currentPage:number = 1; //Current page
  @Input() pageInitial:number = 1; //Shows the initial number of pagination
  @Input() pageAverage:number = 2; //Shows the average number of pagination, change 
  @Input() pageFinish:number = 3; //Shows the finish number of pagination, number maximum of pages
  @Input() pageMax:number =3

  @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() previousPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() goTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  public onPreviousPage(): void {
    
  }

}
