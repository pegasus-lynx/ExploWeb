import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";

const userRoutes: Routes = [
    {
        path: "dashboard/edit",
        component: EditProfileComponent,
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
