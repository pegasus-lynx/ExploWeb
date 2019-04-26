import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

import { AccessTokenInterface, loginInterface } from "./auth.interace";

import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private http: HttpClient, public jwt: JwtHelperService) {}

    public isLoggedIn(): boolean {
        const token = localStorage.getItem("access_token");
        return !this.jwt.isTokenExpired(token);
    }

    login(baseurl: string, credentials: loginInterface) {
        console.log(credentials);
        return this.http.post<AccessTokenInterface>(baseurl, credentials).pipe(
            tap(res => {
                localStorage.setItem("access_token", res.token);
            })
        );
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
    }

    register() {}
}
