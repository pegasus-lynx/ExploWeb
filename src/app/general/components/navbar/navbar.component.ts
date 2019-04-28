import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    isAuthenticated: boolean = false;
    username: string;

    constructor() {}

    ngOnInit() {
        const loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn == "1") {
            this.isAuthenticated = true;
            this.username = localStorage.getItem("username");
        } else {
            this.isAuthenticated = false;
        }
    }

    ngDoCheck() {
        const loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn == "1") {
            this.isAuthenticated = true;
            this.username = localStorage.getItem("username");
        } else {
            this.isAuthenticated = false;
        }
    }
}
