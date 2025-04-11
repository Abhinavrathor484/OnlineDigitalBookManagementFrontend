import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../Models/book.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminBookService {
  private GetallBooksApiUrl = 'https://localhost:7028/api/Book';
  private DeletetheBookapiUrl = 'https://localhost:7028/api/Book';
  private EdittheBookapiUrl = 'https://localhost:7028/api/Book';
  private AddBookApiUrl = 'https://localhost:7028/api/Book';
  
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(this.GetallBooksApiUrl);
    }
   
    deleteBook(bookId: number): Observable<void> {
      let params = new HttpParams().set("bookId", bookId.toString());
      return this.http.delete<void>(`${this.DeletetheBookapiUrl}/${bookId}`, { params });
    }
   
    editBook(book: Book): Observable<Book> {
      return this.http.put<Book>(`${this.EdittheBookapiUrl}/${book.bookID}`, book);
    }
   
    addBook(book: Book): Observable<Book> { // Add the method for adding a book
      return this.http.post<Book>(this.AddBookApiUrl, book);
    }
}
