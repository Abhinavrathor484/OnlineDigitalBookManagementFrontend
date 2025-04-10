import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/services/book-page.service';
import { Book } from 'src/app/Models/book.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  // here we making the book object array
  Books:Book[] = [];
  FilterName:string ="";

  constructor(private bookPageservice : BookPageService) {}

  ngOnInit(): void {
    this.bookPageservice.getBooks().subscribe((data:Book[]) => {
        this.Books = data;//.filter(x => x.stockQuantity>0); // Get only the first 6 books
    });
  }

  BuyNow(book:Book){
    alert(book.title + "successfully buy");

  }


}
