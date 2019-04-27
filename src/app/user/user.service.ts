import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ProfileInterface, SideInterface } from "./user.interface";

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient) {}

    getProfile(baseUrl: string): Observable<ProfileInterface> {
        return this.http.get<ProfileInterface>(baseUrl);
    }

    getUserInfo(baseUrl: string): Observable<SideInterface> {
        return this.http.get<SideInterface>(baseUrl);
    }

    updateProfile(baseUrl: string) {}

    createProfile(baseUrl: string) {}

    getPreviousSearch(baseUrl: string) {}
}
