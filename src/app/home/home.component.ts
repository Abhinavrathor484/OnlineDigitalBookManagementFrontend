import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../Models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[]=[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data:Book[]) => {
        this.books = data;//.filter(x => x.stockQuantity>0); // Get only the first 6 books
    });
  }
}

