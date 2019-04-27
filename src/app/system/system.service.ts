import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpErrorResponse
} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { BarcResult, TokenInterface, BarcQuery } from "./system.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SystemService {
    constructor(private http: HttpClient) {}

    getTokenForBarcQuery(
        baseurl: string,
        query: BarcQuery
    ): Observable<TokenInterface> {
        return this.http.post<TokenInterface>(baseurl, query);
    }

    getBarcResult(baseurl: string, token: string): Observable<BarcResult> {
        return this.http.get<BarcResult>(baseurl + token);
    }
}
