import { Component} from '@angular/core';
import { Observable, Subject } from 'rxjs';
('@angular/core');
import { typeMessage } from './model/confirmation.model';

@Component({
  selector: 'modal-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  providers: [],
})
export class ConfirmationComponent {

  showModal: boolean = false;
  btnAfirmative: string = 'Ok';
  titleOpt:string[] = ['Eliminar registros', 'Confirmación'];
  title:string =this.titleOpt[1];
  message:typeMessage=typeMessage.saved;
  valueObserver:Subject<boolean>;
  valueToReturn:boolean|any;
  constructor() {
    this.valueObserver=new Subject();
  }

  showMessageModal(opt:typeMessage):Observable<boolean>{
    this.message = opt
    this.title=typeMessage.delete ? this.titleOpt[0]:this.titleOpt[1];
    opt==typeMessage.delete ? this.btnAfirmative="Si":this.btnAfirmative="Ok";
    this.showModal = true;
    return this.valueObserver.asObservable()
  }

  getOption(value: boolean) {
    this.showModal = false;
    this.valueObserver.next(value);
  }
}
