import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/services/token.interceptor.service';
import { ServicesGuard } from './shared/services/services.guard';

//Components
import { BtnEditComponent } from 'app/shared/components/buttons/table/btn-edit/btn-edit.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { countriesComponent } from './pages/countries/countries.component';
import { AddSubscribersComponent } from './pages/subscribers/components/addSubscriber.component';
import { SubscribersComponent } from './pages/subscribers/components/subscribers.component';
import { ButtonGenericComponent } from './shared/components/buttons/buttonGeneric/butttonForm.component';
import { ButtonSendComponent } from './shared/components/buttons/send/butttonSend.component';
import { BtnDeleteComponent } from './shared/components/buttons/table/btn-delete/btn-delete.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavigationComponent,
    countriesComponent,
    PaginationComponent,
    AddSubscribersComponent,
    SubscribersComponent,
    ButtonGenericComponent,
    ButtonSendComponent,
    BtnEditComponent,
    BtnDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ServicesGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
