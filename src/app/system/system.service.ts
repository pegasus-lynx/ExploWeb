import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpErrorResponse
} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { BarcResult } from "./system.interface";
import { Observable } from "rxjs";

// import { Observable, BehaviorSubject, of } from "rxjs";
// import { tap, delay } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class SystemService {
    constructor(private http: HttpClient) {}

    // getData(): Observable<any> {
    //     return this.http.get(
    //         "localhost:4200/assets/barc__2019_04_15_15_39_59.json"
    //     );
    // }

    getBarcResult(baseurl: string, token: string): Observable<BarcResult> {
        return this.http.get<BarcResult>(baseurl + token);
    }
}
