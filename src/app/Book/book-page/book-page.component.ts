// import { Component, OnInit } from '@angular/core';
// import { BookPageService } from 'src/app/services/book-page.service'; // Updated to use the correct service
// import { Book } from 'src/app/Models/book.model';

// @Component({
//   selector: 'app-book-page',
//   templateUrl: './book-page.component.html',
//   styleUrls: ['./book-page.component.css']
// })
// export class BookPageComponent implements OnInit {
//   // here we making the book object array
//   books: Book[] = [];
//   filterName: string = "";
//   showSortDropdown: boolean = false;

//   constructor(private bookPageService: BookPageService) {} // Updated to use the correct service

//   ngOnInit(): void {
//     this.bookPageService.getBooks().subscribe((data: Book[]) => {
//       this.books = data; //.filter(x => x.stockQuantity > 0); // Get only the first 6 books
//     });
//   }

//   searchBooks(searchText: string): void {
//     this.bookPageService.searchBooks(searchText).subscribe(
//       (data: Book[]) => {
//         this.books = data;
//       },
//       (error) => {
//         console.error('Error fetching books', error);
//       }
//     );
//   }

//   toggleSortDropdown(): void {
//     this.showSortDropdown = !this.showSortDropdown;
//   }

//   sortBooks(criterion: string): void {
//     if (criterion === 'title') {
//       this.books.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (criterion === 'price') {
//       this.books.sort((a, b) => a.price - b.price);
//     }
//   }

//   BuyNow(book: Book): void {
//     alert(book.title + " successfully bought");
//   }
// }
import { Component, OnInit } from '@angular/core';
import { BookPageService } from 'src/app/services/book-page.service';
import { Book } from 'src/app/Models/book.model';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  // here we making the book object array
  books: Book[] = [];
  filterName: string = "";
  showSortDropdown: boolean = false;

  constructor(private bookPageService: BookPageService) {} // Updated to use the correct service

  ngOnInit(): void {
    this.getAllBooks();
  }

  searchBooks(searchText: string): void {
    this.bookPageService.searchBooks(searchText).subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books', error);
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
    this.bookPageService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  BuyNow(book: Book): void {
    alert(book.title + " successfully bought");
  }
}

