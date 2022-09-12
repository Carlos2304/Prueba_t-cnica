import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API } from '../../../shared/config/config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router){}
   
  login(user:any){
    return this.http.post<any>(`${SERVER_API}/account/login`,user)
  };
  
  loggedIn():boolean {
    return !!localStorage.getItem("Token"); 
  };
  getToken(){
    return localStorage.getItem("Token");
  }
  signOut(){
    localStorage.removeItem("Token");
    this.router.navigate(['/signIn']);
  }
}
