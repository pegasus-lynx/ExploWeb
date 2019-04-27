import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { GeneralModule } from "src/app/general/general.module";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PrevSearchComponent } from "./components/prev-search/prev-search.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { SideCardComponent } from "./components/side-card/side-card.component";
import { UserContactComponent } from "./components/user-contact/user-contact.component";
import { AuthGuard } from "../auth/auth.guard";
import { AddProfileComponent } from './pages/add-profile/add-profile.component';
import { AddJournalsComponent } from './pages/add-journals/add-journals.component';
import { AddConfrencesComponent } from './pages/add-confrences/add-confrences.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProfileComponent,
        PrevSearchComponent,
        EditProfileComponent,
        SideCardComponent,
        UserContactComponent,
        AddProfileComponent,
        AddJournalsComponent,
        AddConfrencesComponent
    ],
    imports: [CommonModule, GeneralModule, UserRoutingModule]
})
export class UserModule {}
