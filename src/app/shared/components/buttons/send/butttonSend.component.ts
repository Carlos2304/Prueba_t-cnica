import { Component, Input, OnInit } from "@angular/core";

 @Component({
    selector:'btn-submit',
    templateUrl: './view/buttonSend.component.html',
    styleUrls:['../buttonGeneric/buttomGeneric.scss'],
    providers: [],
 })

 export class ButtonSendComponent implements OnInit{
    @Input() titleButton:string="";

    ngOnInit():void{
    }
 }