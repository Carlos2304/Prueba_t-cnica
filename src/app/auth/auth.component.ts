import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './page/auth.component.html',
  providers: [AuthService],
})
export class AuthComponent implements OnInit {

  user:string="";
  password:string="";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  async signIn(signInForm:NgForm){
    if(signInForm.value.user && signInForm.value.password){
      const res = await this.authService.login(signInForm.value.user, signInForm.value.password);
      if(res){
        localStorage.setItem('token', res.token);
        
      }
    }
  }

}
