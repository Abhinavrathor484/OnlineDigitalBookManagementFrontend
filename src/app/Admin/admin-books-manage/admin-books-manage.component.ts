
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminBookService } from 'src/app/Services/admin-book.service';
import { Book } from 'src/app/Models/book.model';

@Component({
  selector: 'app-admin-books-manage',
  templateUrl: './admin-books-manage.component.html',
  styleUrls: ['./admin-books-manage.component.css']
})
export class AdminBooksManageComponent implements OnInit {
  Books: Book[] = [];
  editBookForm: FormGroup;
  currentBook: Book | null = null;
  showModal: boolean = false;
  formHeader: string = "Add Book";

  constructor(private adminBookServices: AdminBookService, private fb: FormBuilder) {
    this.editBookForm = this.fb.group({
      title: [''],
      price: [null],
      stockQuantity: [null],
      authorID: [null],
      categoryID: [null]
    });
  }

  ngOnInit(): void {
    this.adminBookServices.getBooks().subscribe((data: Book[]) => {
      this.Books = data;
    });
  }

  openAddBookForm(): void {
    this.currentBook = { bookID: 0, title: '', price: 0, stockQuantity: 0, authorID: 0, categoryID: 0 };
    this.editBookForm.reset();
    this.formHeader = "Add Book";
    this.showModal = true;
  }

  openEditModal(book: Book): void {
    this.currentBook = book;
    this.editBookForm.patchValue(book);
    this.formHeader = "Edit Book";
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.currentBook) {
      const updatedBook = { ...this.currentBook, ...this.editBookForm.value };
      if (this.formHeader === "Add Book") {
        this.adminBookServices.addBook(updatedBook).subscribe((newBook) => {
          alert("Book is added successfully");
          this.Books.push(newBook);
          this.closeModal();
        });
      } else {
        this.adminBookServices.editBook(updatedBook).subscribe((updatedBook) => {
          alert("Book is updated successfully");
          this.Books = this.Books.map(b => b.bookID === updatedBook.bookID ? updatedBook : b);
          this.closeModal();
        });
      }
    }
  }

  deleteBook(book: Book): void {
    const confirmation = confirm(`Are you sure you want to delete the book: ${book.title}?`);
    if (confirmation) {
      this.adminBookServices.deleteBook(book.bookID).subscribe(() => {
        alert("Book is deleted successfully");
        this.Books = this.Books.filter(b => b.bookID !== book.bookID);
      });
    }
  }
}