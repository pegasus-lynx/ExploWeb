import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { GeneralModule } from "src/app/general/general.module";

import { LoginFormComponent } from "./components/login-form/login-form.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [CommonModule, FormsModule, AuthRoutingModule, GeneralModule]
})
export class AuthModule {}
