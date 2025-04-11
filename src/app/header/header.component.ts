import { Component } from '@angular/core';
import { UserLoginService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor( private router: Router, private userloginService: UserLoginService) {} // Inject Router

  exploreAllBooks(): void {
    this.router.navigate(['/All-Books-Page']); // Redirect to 'book-page'
  }

  logout(): void {
    this.userloginService.logout();
    this.router.navigate(['Web-Page']);
  }

}

