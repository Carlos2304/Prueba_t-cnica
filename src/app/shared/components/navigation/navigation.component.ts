import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [AuthService]
})
export class NavigationComponent implements OnInit {
  title: string = 'Patatas Subscribers ToGo'
  constructor(public authService: AuthService, private route:Router) { 
  }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.signOut();
    this.route.navigate(['/signIn']);
  }
  changeState(n:number) :void{
    if(n == 1){
      this.route.navigate(['countries']);
    }
    else{
      this.route.navigate(['subscribers']);
    }
  }
}
