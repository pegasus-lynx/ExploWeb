import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import {
    ProfileInterface,
    SideInterface,
    profileAddInterface,
    journalInterface,
    confrenceInterface
} from "./user.interface";

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

    createProfile(baseUrl: string, details: profileAddInterface) {
        return this.http.post<ProfileInterface>(baseUrl, details);
    }

    addJournal(baseUrl: string, details: journalInterface) {
        return this.http.post<journalInterface>(baseUrl, details);
    }

    addConfrence(baseUrl: string, details: confrenceInterface) {
        return this.http.post<confrenceInterface>(baseUrl, details);
    }

    getPreviousSearch(baseUrl: string) {}
}
