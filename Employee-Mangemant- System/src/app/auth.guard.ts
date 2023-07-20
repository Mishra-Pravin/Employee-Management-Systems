import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthServiceService } from './Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('AuthGuard canActivate called'); // Add this line

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      console.log('AuthGuard redirecting to login'); // Add this line
      return this.router.parseUrl('/login');
    }
  }
}












