import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { IndexComponent } from './components/address/index/index.component';
import { CreateComponent } from './components/address/create/create.component';
import { EditComponent } from './components/address/edit/edit.component';
import { IndexComponent as AuditIndexComponent } from './components/audit/index/index.component';
import { NotifierModule } from 'angular-notifier';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    AuditIndexComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NotifierModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
