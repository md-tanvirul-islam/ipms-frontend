import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/address/create/create.component';
import { EditComponent } from './components/address/edit/edit.component';
import { IndexComponent } from './components/address/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { IndexComponent as AuditIndexComponent } from './components/audit/index/index.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/address/index',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'address/index',
    component: IndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'address/create',
    component: CreateComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'address/edit/:addressId',
    component: EditComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'audit/index',
    component: AuditIndexComponent,
    canActivate: [AfterLoginService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
