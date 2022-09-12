import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { AuthService } from '@pages/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  private token:any;
  constructor(private authService: AuthService, private route: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
       this.token = req.clone({
        setHeaders: {
          'Authorization': 'Bear ' + this.authService.getToken()
        }
      });
    return next.handle(this.token).pipe(
      catchError((err:HttpErrorResponse)=>{
        return throwError(() => err)
      })
    );
  }
}
