import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./general/components/page-not-found/page-not-found.component";
// import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    {
        path: "recSys",
        redirectTo: "/recommender",
        pathMatch: "full"
    },
    {
        path: "recommender",
        loadChildren: "./system/system.module#SystemModule"
    },
    {
        path: "user",
        loadChildren: "./user/user.module#UserModule"
        // canLoad: [AuthGuard]
    },
    {
        path: "auth",
        loadChildren: "./auth/auth.module#AuthModule"
    },
    {
        path: "",
        loadChildren: "./general/general.module#GeneralModule"
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
