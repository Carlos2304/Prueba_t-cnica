export class PaginationService{
    
    countList: number = 50; //Number of records fetch
    count:number = 10; //Maximum number of records to display
    currentPage:number = 1; //Current page
    pageInitial:number = 1; //Shows the initial number of pagination
    pageAverage:number = 2; //Shows the average number of pagination, change 
    pageFinish:number = 3; //Shows the finish number of pagination, number maximum of pages
    pageMax:number =3

    previusPage():void{
        if(this.currentPage!=1 && this.currentPage>0){
          this.currentPage-=1;
        }
      }
      nextPage():void{
          this.currentPage+=1;
      }
      maxPages():void{
    
      }
      getCurrentPage():number{
        return this.currentPage
      }
}