import { Injectable } from "@angular/core";
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras,
    CanLoad,
    Route
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(["auth/login"]);
            return false;
        }
        return true;
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        // let url = `/${route.path}`;
        return true;
        // return this.checkLogin(url);
    }
}
