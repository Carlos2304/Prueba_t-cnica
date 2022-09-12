import { Component, Input, OnInit } from "@angular/core";

 @Component({
    selector:'app-button',
    templateUrl: './view/buttonForm.component.html',
    styleUrls:['./buttomGeneric.scss'],
    providers: [],
 })

 export class ButtonGenericComponent implements OnInit{
    @Input() titleButton:string="";

    ngOnInit():void{
    }
 }