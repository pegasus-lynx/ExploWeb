import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-token",
    templateUrl: "./token.component.html",
    styleUrls: ["./token.component.css"]
})
export class TokenComponent implements OnInit {
    @Input() token: string;

    constructor() {}

    ngOnInit() {
        // Token will be returned by the service
    }
}
