import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/Services/book-page.service';
import { Book } from 'src/app/Models/book.model';
 
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  books: Book[] = [];
  filterName: string = "";
  showSortDropdown: boolean = false;
  stars: number[] = [1, 2, 3, 4, 5];
  isLoading: boolean = false;
  errorMessage: string = "";
 
  constructor(private bookPageService: BookPageService) {}
 
  ngOnInit(): void {
    this.getAllBooks();
  }
 
  searchBooks(searchText: string): void {
    if (!searchText.trim()) {
      this.errorMessage = "Search input cannot be empty.";
      return;
    }
    this.isLoading = true;
    this.bookPageService.searchBooks(searchText).subscribe(
      (data: Book[]) => {
this.books=data.map(book=>({...book,authorName:book.author?.authorName ||'',categoryName:book.category?.categoryName ||''}));
       // this.books = data;
        this.loadRatings();
        this.errorMessage = "";
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching books', error);
        this.errorMessage = "Error fetching books. Please try again later.";
        this.isLoading = false;
      }
    );
  }
 
  toggleSortDropdown(): void {
    this.showSortDropdown = !this.showSortDropdown;
  }
 
  sortBooks(criterion: string): void {
    if (criterion === 'title') {
      this.books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criterion === 'price') {
      this.books.sort((a, b) => a.price - b.price);
    }
  }
 
  getAllBooks(): void {
    this.isLoading = true;
    this.bookPageService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
      this.loadRatings();
      this.isLoading = false;
    }, (error) => {
      console.error('Error fetching books', error);
      this.errorMessage = "Error fetching books. Please try again later.";
      this.isLoading = false;
    });
  }
 
  loadRatings(): void {
    this.books.forEach(book => {
        if (book.bookID !== undefined && book.bookID !== null) {
            this.bookPageService.getAverageRating(book.bookID).subscribe(
             
                (rating:any) => {
                    if (rating !== null && isNaN(rating)
                    ) { console.log();
                        book.averageRating = Math.round(rating.averageRating);
                        console.log(`Average rating for book ID ${book.bookID}: ${book.averageRating}`);
                    } else {
                        console.warn(`No valid rating found for book ID ${book.bookID}`);
                        book.averageRating = 0; // or any default value
                    }
                },
                (error) => {
                    console.error(`Error fetching average rating for book ID ${book.bookID}`, error);
                }
            );
        } else {
            console.error(`Book ID is undefined or null for book:`, book);
        }
    });
}

  BuyNow(book: Book): void {
    alert(book.title + " successfully bought");
  }
}