import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/address/create/create.component';
import { EditComponent } from './components/address/edit/edit.component';
import { IndexComponent } from './components/address/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { IndexComponent as AuditIndexComponent } from './components/audit/index/index.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
  },
  {
    path: 'address/index',
    component: IndexComponent,
  },
  {
    path: 'address/create',
    component: CreateComponent,
  },
  {
    path: 'address/edit',
    component: EditComponent,
  },
  {
    path: 'audit/index',
    component: AuditIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
