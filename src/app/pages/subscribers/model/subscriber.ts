import { FormControl } from "@angular/forms";

export class Subscriber{
    Id:number=0;
    Name:String="";
    Email:string = "";
    CountryCode:string = "";
    CountryName:string = "";
    PhoneCode:string = "";
    PhoneNumber:string = "";
    JobTitle:string = "";
    Area:string = "";
    Topics:Array<string> = [];

    constructor(){
        
    }
    // constructor(name:string, email:string, countryCode:string, countryName:string, phoneCode:string, phoneNumber:string, 
    //     jobTitle:string, area:string, topics:Array<string>)
    // {
    //     this.Name = name;
    //     this.Email = email;
    //     this.CountryCode = countryCode;
    //     this.CountryName = countryName;
    //     this.PhoneCode = phoneCode;
    //     this.PhoneNumber = phoneNumber;
    //     this.JobTitle = jobTitle;
    //     this.Area = area;
    //     this.Topics = topics;
    // }
    
    setId(id:number):void{
        this.Id = id;
    };
    getId(id:number):number{
        return this.Id;
    };
}