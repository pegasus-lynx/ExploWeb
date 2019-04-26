import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { LoginFormComponent } from "./pages/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/register-form/register-form.component";
import { PasswordChangeComponent } from "./pages/password-change/password-change.component";

const authRoutes: Routes = [
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
        component: PasswordChangeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
