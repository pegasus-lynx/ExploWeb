import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { GeneralModule } from "src/app/general/general.module";

import { LoginFormComponent } from "./pages/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/register-form/register-form.component";
import { PasswordChangeComponent } from "./pages/password-change/password-change.component";

@NgModule({
    declarations: [
        LoginFormComponent,
        RegisterFormComponent,
        PasswordChangeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        GeneralModule
    ]
})
export class AuthModule {}
