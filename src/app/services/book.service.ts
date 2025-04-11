
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public apiUrl = 'https://localhost:7028/api/Book';

  constructor(public http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
