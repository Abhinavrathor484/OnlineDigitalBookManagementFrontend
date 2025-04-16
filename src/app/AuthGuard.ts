import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = localStorage.getItem('userRole');
    console.log(userRole);
    if (userRole === 'Admin') {
      return true;
    } else {
      alert("Only Admins can access the resource!");
      this.router.navigate(['/User-Login-Page']);
      return false;
    }
  }
}




