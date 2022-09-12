import { store } from './shared/config/Storage/index';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.sass'],
  providers: [],
})
export class AppComponent {
  title = '';
  constructor(private router: Router){}
  ngOnInit(): void {
    if(!localStorage.getItem('Token')){
      this.router.navigate(['/signIn']);
    }
  }
}
