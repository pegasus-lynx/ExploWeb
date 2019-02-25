import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

const generalRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: "contact_us",
        component: ContactUsComponent,
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(generalRoutes)],
    exports: [RouterModule]
})
export class GeneralRoutingModule {}
