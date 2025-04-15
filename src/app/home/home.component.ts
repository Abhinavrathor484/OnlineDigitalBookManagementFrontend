import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { BookService } from '../Services/book.service';
import { Book } from '../Models/book.model';
import { UserLoginService } from '../Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router, private userloginService: UserLoginService) {} // Inject Router

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data.slice(0, 8); // Get only the first 7 books
    });
  }
  
  exploreAllBooks(): void {
    this.router.navigate(['/All-Books-Page']); // Redirect to 'book-page'
  }

  logout(): void {
    this.userloginService.logout();
    this.router.navigate(['Web-Page']);
  }
}

