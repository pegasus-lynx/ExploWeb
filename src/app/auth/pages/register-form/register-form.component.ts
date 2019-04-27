import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";
import { registerInterface } from "../../auth.interace";

@Component({
    selector: "register-form",
    templateUrl: "./register-form.component.html",
    styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.registerForm = this.fb.group({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmpassword: ""
        });
    }

    onSubmit() {
        const details: registerInterface = this.registerForm.value;

        let baseUrl: string = "http://127.0.0.1:8000/register/";

        this.auth.register(baseUrl, details).subscribe(
            data => {
                console.log(data);
                this.router.navigateByUrl("/user/profile/add");
            },
            err => {
                console.log(err);
            }
        );
    }
}
