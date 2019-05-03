import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import { SideInterface } from "../../user.interface";

@Component({
    selector: "app-side-card",
    templateUrl: "./side-card.component.html",
    styleUrls: ["./side-card.component.css"]
})
export class SideCardComponent implements OnInit {
    info: SideInterface;
    role: string;

    constructor(private serve: UserService) {}

    ngOnInit() {
        let baseUrl: string = "http://127.0.0.1:8000/user/self/info/";

        this.serve.getUserInfo(baseUrl).subscribe(data => {
            this.info = data;
            this.role = this.getRole(this.info.role);
        });

        // console.log(this.info.role);

        // console.log(this.role);
    }

    getRole(role: number) {
        console.log(role);
        if (role == 0) {
            return "Student";
        } else if (role == 1) {
            console.log("OK");
            return "Researcher";
        } else if (role == 2) {
            return "Professor";
        } else {
            return "Others";
        }
    }
}
