import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    // {
    //     path: "/home",
    //     component: HomeComponent,
    //     outlet: "main"
    // },
    // {
    //     path: "",
    //     redirectTo: "/home",
    //     pathMatch: "full"
    // },
    // {
    //     path: "**",
    //     component: PageNotFoundComponent,
    //     outlet: "main"
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
