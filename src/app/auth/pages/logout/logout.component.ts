import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-logout",
    templateUrl: "./logout.component.html",
    styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit() {
        this.auth.logout("http://127.0.0.1:8000/logout/").subscribe(
            data => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("username");
                localStorage.removeItem("loggedIn");
                this.router.navigateByUrl("/");
            },
            err => console.log(err)
        );
        console.log("Here");
    }
}
