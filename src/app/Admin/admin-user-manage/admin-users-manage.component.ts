/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-admin-users-manage',
  templateUrl: './admin-users-manage.component.html',
  styleUrls: ['./admin-users-manage.component.css']
})
export class AdminUsersManageComponent implements OnInit {
  Users: User[] = [];
  editUserForm: FormGroup;
  currentUser: User | null = null;
  showModal: boolean = false;
  formHeader: string = "Add User";

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.editUserForm = this.fb.group({
      Name: [''],
      Email: [''],
      Password: [''],
      Role: ['']
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.Users = data;
    });
  }

  openAddUserForm(): void {
    this.currentUser = { userID: 0, name: '', email: '', password: '', role: '' };
    this.editUserForm.reset();
    this.formHeader = "Add User";
    this.showModal = true;
  }

  openEditModal(user: User): void {
    this.currentUser = user;
    this.editUserForm.patchValue(user);
    this.formHeader = "Edit User";
    this.showModal = true;
  }
  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.currentUser) {
      const updatedUser = { ...this.currentUser, ...this.editUserForm.value };
      if (this.formHeader === "Add User") {
        this.userService.addUser(updatedUser).subscribe((newUser) => {
          alert("User is added successfully");
          this.Users.push(newUser);
          this.closeModal();
        });
      } else {
        this.userService.editUser(updatedUser).subscribe((updatedUser) => {
          alert("User is updated successfully");
          this.Users = this.Users.map(u => u.userID === updatedUser.userID ? updatedUser : u);
          this.closeModal();
        });
      }
    }
  }

  deleteUser(user: User): void {
      const confirmation = confirm(`Are you sure you want to delete the user: ${user.name}?`);
      if (confirmation) {
        this.userService.deleteUser(user.userID).subscribe(() => {
          alert("User is deleted successfully");
          this.Users = this.Users.filter(b => b.userID !== user.userID);
          this.closeModal();
        });
  }
}
}*/
/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookPageService } from 'src/app/services/book-page.service';
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

  constructor(private bookPageServices: BookPageService, private fb: FormBuilder) {
    this.editBookForm = this.fb.group({
      title: [''],
      price: [null],
      stockQuantity: [null],
      authorID: [null],
      categoryID: [null]
    });
  }

  ngOnInit(): void {
    this.bookPageServices.getBooks().subscribe((data: Book[]) => {
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
        this.bookPageServices.addBook(updatedBook).subscribe((newBook) => {
          alert("Book is added successfully");
          this.Books.push(newBook);
          this.closeModal();
        });
      } else {
        this.bookPageServices.editBook(updatedBook).subscribe((updatedBook) => {
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
      this.bookPageServices.deleteBook(book.bookID).subscribe(() => {
        alert("Book is deleted successfully");
        this.Books = this.Books.filter(b => b.bookID !== book.bookID);
      });
    }
  }
}*/

 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-admin-users-manage',
  templateUrl: './admin-users-manage.component.html',
  styleUrls: ['./admin-users-manage.component.css']
})
export class AdminUserManageComponent implements OnInit {
  Users: User[] = [];
  editUserForm: FormGroup;
  currentUser: User | null = null;
  showModal: boolean = false;
  formHeader: string = "Add User";

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.editUserForm = this.fb.group({
      name: [''],
      email: [null],
      password: [null],
      role: [null],
      
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.Users = data;
    });
  }

  openAddUserForm(): void {
    this.currentUser = {userID:0, name: '', email: '', password: '', role: '' };
    this.editUserForm.reset();
    this.formHeader = "Add User";
    this.showModal = true;
  }

  openEditModal(user: User): void {
    this.currentUser = user;
    this.editUserForm.patchValue(user);
    this.formHeader = "Edit User";
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.currentUser) {
      const updatedUser = { ...this.currentUser, ...this.editUserForm.value };
      if (this.formHeader === "Add User") {
        this.userService.addUser(updatedUser).subscribe((newUser) => {
          alert("User is added successfully");
          this.Users.push(newUser);
          this.closeModal();
        });
      } else {
        this.userService.editUser(updatedUser).subscribe((updatedBook) => {
          alert("User is updated successfully");
          this.Users = this.Users.map(b => b.userID== updatedUser.userID ? updatedUser : b);
          this.closeModal();
        });
      }
    }
  }

  deleteUser(user: User): void {
    const confirmation = confirm(`Are you sure you want to delete the User: ${user.name}?`);
    if (confirmation) {
      this.userService.deleteUser(user.userID).subscribe(() => {
        alert("User is deleted successfully");
        this.Users = this.Users.filter(b => b.userID !== user.userID);
      });
    }
  }
}
