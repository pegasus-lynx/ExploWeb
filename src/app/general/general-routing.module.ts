import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { DetailsComponent } from "./pages/details/details.component";

const generalRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: "home",
        redirectTo: "",
        pathMatch: "full"
    },
    {
        path: "contact_us",
        component: ContactUsComponent
    },
    {
        path: "details/:id",
        component: DetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(generalRoutes)],
    exports: [RouterModule]
})
export class GeneralRoutingModule {}
