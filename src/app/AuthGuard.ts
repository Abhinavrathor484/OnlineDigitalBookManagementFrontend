// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { jwtDecode } from 'jwt-decode';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       const decoded: any = jwtDecode(token);
//       const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
//       console.log(role);
//       if (role === 'Admin') {
//         return true;
//       } else {
//         alert("Only Admins can access the resource!");
//         this.router.navigate(['/User-Login-Page']);
//         return false;
//       }
//     } else {
//       return false;
//     }
//   }
// }

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




