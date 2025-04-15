import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfileService } from './Services/user-profile.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userProfileService: UserProfileService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.userProfileService.userProfile$.pipe(
      map(profile => {
        if (profile && profile.role === 'Admin') {
          return true;
        } else {
          alert("Only Admins can Access this Page!");
          this.router.navigate(['/User-Login-Page']);
          return false;
        }
      })
    );
  }
}
