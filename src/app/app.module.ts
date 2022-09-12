import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ServicesGuard } from './shared/services/services.guard';

//Components
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubscribersModule } from './pages/subscribers/subscribers.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    SubscribersModule
  ],
  providers: [ServicesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
