import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginFormComponent } from "./pages/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/register-form/register-form.component";
import { PasswordChangeComponent } from "./pages/password-change/password-change.component";

const systemRoutes: Routes = [
    {
        path: "login",
        component: LoginFormComponent
    },
    {
        path: "register",
        component: RegisterFormComponent
    },
    {
        path: "change/password",
        component: PasswordChangeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(systemRoutes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {}
