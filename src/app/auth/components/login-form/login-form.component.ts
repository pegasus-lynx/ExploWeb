import { Component, OnInit } from "@angular/core";
import { User } from "src/app/user/models/user";

@Component({
    selector: "app-login-form",
    templateUrl: "./login-form.component.html",
    styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
    user: User;
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    ngOnInit() {
        this.submitted = false;
    }
}
