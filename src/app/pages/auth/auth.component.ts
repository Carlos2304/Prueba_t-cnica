import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './views/auth.component.html',
  styleUrls: ['./style/auth.component.scss'],
})
export class AuthComponent implements OnInit {
  UserName:any;
   Password:any;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('Token')){
      this.route.navigate(['subscribers'])
    }
  }

  signIn(signInForm:NgForm) {
    if (signInForm.value.UserName != '' && signInForm.value.Password != '') {
      this.authService
        .login(signInForm.value)
        .subscribe({
          next: (res) => {
            localStorage.setItem('Token', res.Token)
             this.route.navigate(['/subscribers']);
          },
          error: (err) => console.log('Error: ' + err.message),
        });
    }
  }
}
