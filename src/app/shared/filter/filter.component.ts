import { FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent{

  criteria:FormControl<string|any> = new FormControl('');
  @Output() getFilter: EventEmitter<string> = new EventEmitter<string>();

  filterCriteria(){
    this.getFilter.emit(this.criteria.getRawValue());
  }

}
