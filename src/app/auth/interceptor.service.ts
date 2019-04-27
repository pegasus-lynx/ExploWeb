import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem("access_token");

        if (token) {
            request = request.clone({
                headers: request.headers.set("Authorization", "Token " + token)
            });
        }

        if (!request.headers.has("Content-Type")) {
            request = request.clone({
                headers: request.headers.set("Content-Type", "application/json")
            });
        }

        return next.handle(request);
    }
}
