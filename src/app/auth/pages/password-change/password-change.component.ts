import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: "app-password-change",
    templateUrl: "./password-change.component.html",
    styleUrls: ["./password-change.component.css"]
})
export class PasswordChangeComponent implements OnInit {
    passwordChangeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.passwordChangeForm = this.fb.group({
            password: "",
            new_password: ""
        });
    }
}
