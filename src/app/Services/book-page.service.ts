import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from 'src/app/Models/book.model';
 
@Injectable({
  providedIn: 'root'
})
export class BookPageService {
  private GetallBooksApiUrl = 'https://localhost:7028/api/Book';
  private DeletetheBookapiUrl = 'https://localhost:7028/api/Book';
  private EdittheBookapiUrl = 'https://localhost:7028/api/Book';
  private AddBookApiUrl = 'https://localhost:7028/api/Book';
  private searchBookApiUrl = 'https://localhost:7028/api/Book';
  private averageRatingApiUrl = 'https://localhost:7028/api/Review/average-rating';
 
  constructor(private http: HttpClient) {}
 
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
 
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.AddBookApiUrl, book);
  }
 
  searchBooks(searchText: string): Observable<any> {
    let params = new HttpParams().set('searchText', searchText);
    return this.http.get(`${this.searchBookApiUrl}/${searchText}`, { params });
  }
 
  getAverageRating(bookId: number): Observable<number> {
    let params = new HttpParams().set('bookId', bookId.toString());
    return this.http.get<number>(this.averageRatingApiUrl, { params });
  }
 
}
 
