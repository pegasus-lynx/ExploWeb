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

    constructor(private serve: UserService) {}

    ngOnInit() {
        let baseUrl: string = "http://127.0.0.1:8000/user/self/info/";

        this.serve.getUserInfo(baseUrl).subscribe(data => {
            this.info = data;
        });
    }
}
