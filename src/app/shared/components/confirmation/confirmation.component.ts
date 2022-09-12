import { Component } from '@angular/core';"@angular/core";
import { Confirmation } from './model/confirmation.model';

@Component({
    selector: 'app-modal-confirmation',
    templateUrl: './confirmation.component.html',
    providers: []
})

export class ConfirmationComponent{
    constructor(private confirmation: Confirmation){}

    async openModal(){
        
    }
}