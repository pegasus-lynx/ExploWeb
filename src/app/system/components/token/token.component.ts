import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-token",
    templateUrl: "./token.component.html",
    styleUrls: ["./token.component.css"]
})
export class TokenComponent implements OnInit {
    token: String;

    constructor() {}

    ngOnInit() {
        this.token = "barc__2019_04_15_15_39_59";

        // Token will be returned by the service
    }
}
