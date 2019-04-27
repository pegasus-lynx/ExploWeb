import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { PrevSearchComponent } from "./components/prev-search/prev-search.component";
import { AddProfileComponent } from "./pages/add-profile/add-profile.component";
// import { AuthGuard } from "../auth/auth.guard";

const userRoutes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: "",
                component: ProfileComponent,
                pathMatch: "full"
            },
            {
                path: "searches",
                component: PrevSearchComponent,
                pathMatch: "full"
            },
            {
                path: "edit",
                component: EditProfileComponent,
                pathMatch: "full"
            }
        ]
    },
    {
        path: "profile/add",
        component: AddProfileComponent,
        pathMatch: "full"
    },
    {
        path: "profile/edit",
        component: EditProfileComponent,
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
