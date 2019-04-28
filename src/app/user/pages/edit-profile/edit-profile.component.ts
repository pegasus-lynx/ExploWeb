import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../user.service";
import { Router } from "@angular/router";
import { profileAddInterface, ProfileInterface } from "../../user.interface";

@Component({
    selector: "app-edit-profile",
    templateUrl: "./edit-profile.component.html",
    styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
    editProfileForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private serve: UserService,
        private router: Router
    ) {}

    ngOnInit() {
        let curData: ProfileInterface;

        this.serve.getProfile("http://127.0.0.1:8000/user/self/").subscribe(
            data => {
                curData = data;
            },
            err => {
                console.log(err);
            }
        );

        this.editProfileForm = this.fb.group({
            bio: curData.bio,
            role: curData.role,
            gender: curData.gender,
            department: curData.department,
            institution: curData.institution,
            dob: curData.dob,
            area_of_interest: curData.area_of_interests
        });
    }

    onSubmit() {
        let details: profileAddInterface = this.preprocessData(
            this.editProfileForm.value
        );
        console.log(details);
        let baseUrl: string = "http://127.0.0.1:8000/user/self/";
        this.serve.editProfile(baseUrl, details).subscribe(
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
