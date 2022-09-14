import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Component } from '@angular/core';
import { AuthCredentials } from './auth.model';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss', '../../app.component.scss'],
})
export class AuthComponent{ 

  formAuth= new FormGroup({
    UserName: new FormControl('', {validators:[Validators.required], nonNullable:false}),
    Password: new FormControl('', {validators:[Validators.required], nonNullable:false})
  })

  constructor(private authService: AuthService, private route: Router) {
    }

  signIn() {
    if(this.formAuth.valid){
      const credentials:AuthCredentials=this.formAuth.getRawValue()
      this.authService.login(credentials)
        .subscribe({
          next: (res) => {
            this.authService.setToken(res.Token)
          },
          error: (err) => console.log('Error: ' + err.message),
        });
    }

  }
}

