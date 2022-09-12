import { Router } from '@angular/router';
import { store } from './../../shared/config/Storage/index';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '../.././shared/config/config';

@Component({
  selector: 'app-auth',
  templateUrl: './views/auth.component.html',
  styleUrls: ['./style/auth.component.scss'],
  providers: [AuthService],
})
export class AuthComponent implements OnInit {

  user:string="";
  password:string="";
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {}

  async signIn(signInForm:NgForm){
    if(signInForm.value.user && signInForm.value.password){
      const res = await this.authService.login(signInForm.value.user, signInForm.value.password);
      if(res){
        localStorage.setItem('Token',JSON.stringify(res.Token));
        console.log(res)
        this.route.navigate(['subscribers']);
      }
    }
  }

}
