import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "register-form",
    templateUrl: "./register-form.component.html",
    styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        });
    }
}
