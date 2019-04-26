import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { loginInterface } from "../../auth.interace";

@Component({
    selector: "login-form",
    templateUrl: "./login-form.component.html",
    styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private auth: AuthService) {}

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: "",
            password: ""
        });
    }

    onSubmit() {
        const credentials: loginInterface = this.loginForm.value;
        console.log(credentials);
        let baseUrl: string = "http://127.0.0.1:8000/login/";
        this.auth.login(baseUrl, credentials).subscribe();
        localStorage.setItem("username", credentials.username);
    }
}
