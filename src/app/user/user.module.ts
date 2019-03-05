import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { GeneralModule } from "src/app/general/general.module";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProfileFormComponent } from "./components/profile-form/profile-form.component";
import { AddProfilePicComponent } from "./components/add-profile-pic/add-profile-pic.component";
import { ProfileComponent } from './components/profile/profile.component';
import { PrevSearchComponent } from './components/prev-search/prev-search.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProfileFormComponent,
        AddProfilePicComponent,
        ProfileComponent,
        PrevSearchComponent,
        EditProfileComponent
    ],
    imports: [CommonModule, UserRoutingModule, GeneralModule]
})
export class UserModule {}
