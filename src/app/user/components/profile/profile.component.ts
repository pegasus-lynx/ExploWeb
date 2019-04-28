import { Component, OnInit, DoCheck } from "@angular/core";
import { UserService } from "../../user.service";
import { ProfileInterface } from "../../user.interface";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
    profile: ProfileInterface;
    inEditConfrenceMode: boolean = false;
    inEditJournalMode: boolean = false;

    constructor(private serve: UserService) {}

    ngOnInit() {
        let baseUrl: string = "http://127.0.0.1:8000/user/self";

        this.serve.getProfile(baseUrl).subscribe(data => {
            this.profile = data;
            console.log(this.profile);
        });
    }

    editMode(ind: number) {
        if (ind == 1) {
            this.inEditConfrenceMode = true;
        }

        if (ind == 2) {
            this.inEditJournalMode = true;
        }
    }
}
