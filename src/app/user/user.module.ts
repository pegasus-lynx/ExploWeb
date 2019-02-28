import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { AddProfilePicComponent } from './components/add-profile-pic/add-profile-pic.component';

@NgModule({
  declarations: [ProfileComponent, ProfileEditComponent, DashboardComponent, ProfileFormComponent, AddProfilePicComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
