import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../user.service";
import { Router } from "@angular/router";
import { profileAddInterface } from "../../user.interface";

@Component({
    selector: "app-add-profile",
    templateUrl: "./add-profile.component.html",
    styleUrls: ["./add-profile.component.css"]
})
export class AddProfileComponent implements OnInit {
    addProfileForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private serve: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        this.addProfileForm = this.fb.group({
            bio: "",
            role: "",
            gender: "M",
            department: "",
            institution: "",
            dob: "",
            area_of_interest: ""
        });
    }

    onSubmit() {
        let details: profileAddInterface = this.preprocessData(
            this.addProfileForm.value
        );
        console.log(details);
        let baseUrl: string = "http://127.0.0.1:8000/user/self/create/";
        this.serve.createProfile(baseUrl, details).subscribe(
            data => {
                console.log(data);
                this.router.navigateByUrl("/user/dashboard");
            },
            err => {
                console.log(err);
            }
        );
    }

    preprocessData(rawDetails) {
        let str = rawDetails.area_of_interest;
        rawDetails.area_of_interest = this.convertToArray(str);
        return rawDetails;
    }

    convertToArray(str: string) {
        return str.split(",");
    }
}
