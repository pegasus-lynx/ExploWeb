import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    UserComponent
  ]
})
export class UserModule { }
