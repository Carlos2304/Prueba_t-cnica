import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@pages/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router) { }

  canActivate():boolean{
    console.log(this.AuthService.loggedIn());
    if(this.AuthService.loggedIn())
    { 
      return true
    };
    this.router.navigate(['/signIn']);
    return false;
  }
  
}
