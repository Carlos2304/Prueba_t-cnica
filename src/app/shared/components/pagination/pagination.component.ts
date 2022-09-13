import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./style/pagination.component.scss'],
  providers: [],
})
export class PaginationComponent implements OnInit {
  @Input() countList: number = 15; //Number of records fetch
  @Output() goTo: EventEmitter<object> = new EventEmitter<object>();
  count: number = 10;
  currentPage: number = 1; //Current page
  pageInitial: number = 1; //Shows the initial number of pagination
  pageAverage: number = 2; //Shows the average number of pagination, change
  pageFinish: number = 3; //Shows the finish number of pagination, number maximum of pages
  pageMax: number = 0;

  ngOnChanges(changes: SimpleChanges){
      this.maxPage();
  }
  constructor() {}
  ngOnInit(): void {
    this.maxPage()
  }
  public onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
    this.changePage('previous')
    this.onGoTo();
  }
  public onNextPage(): void {
    if (this.currentPage < this.pageMax) {
      this.currentPage += 1;
    }
    this.changePage('next')
    this.onGoTo();
  }
  maxPage() {
    this.pageMax = this.countList / this.count;
    if(this.pageMax<1){
      this.pageMax=1
    }
    if (this.pageMax > Math.trunc(this.pageMax) && this.countList > this.count) {
      this.pageMax = Math.trunc(this.pageMax) + 1;
    }else{
      this.pageMax = Math.trunc(this.pageMax)
    }
  }
  public onGoTo() {
    this.goTo.emit({ count: this.count, currentPage: this.currentPage });
  }
  changePageNumber(page:number) {
    this.currentPage = page;
    this.onGoTo();
  }

  changePage(option: string) {
    if (this.pageMax <= 3|| this.currentPage<=3) {
      this.pageInitial = 1;
      this.pageAverage = 2;
      this.pageFinish = 3;
    } else {
      if (this.currentPage >= 3 && this.currentPage <= this.pageMax) {
        if (option === 'previous') {
          this.pageInitial -= 1;
          this.pageAverage -= 1;
          this.pageFinish -= 1;
        }
        else if(option === 'next'){
          this.pageInitial+= 1;
          this.pageAverage += 1;
          this.pageFinish += 1;
        }
      } 
    }
  }
  changeCount(value:any){
    this.maxPage();
    if(this.currentPage>this.pageMax){
      this.currentPage=this.pageMax
    }
    this.onGoTo();
  }
}
