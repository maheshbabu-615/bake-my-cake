import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RouteService } from './route.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):| Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn) {
      this.routeService.navigateToLoginView();
      return false;
    } else return true;
  }
  constructor(
    private authService: AuthService,
    private routeService: RouteService
  ) {}
}