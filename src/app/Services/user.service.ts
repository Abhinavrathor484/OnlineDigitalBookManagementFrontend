import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/Models/user.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private GetAllUsersApiUrl = 'https://localhost:7028/api/User';
  private DeleteUserApiUrl = 'https://localhost:7028/api/User';
  private EditUserApiUrl = 'https://localhost:7028/api/User';
  private AddUserApiUrl = 'https://localhost:7028/api/User';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.GetAllUsersApiUrl).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(userId: number): Observable<void> {
    let params = new HttpParams().set("userId", userId.toString());
    return this.http.delete<void>(`${this.DeleteUserApiUrl}/${userId}`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`${this.EditUserApiUrl}/${user.userID}`, user, { responseType: 'text' }).pipe(
      map(response => {
        // Handle the text response here
        return { message: response };
      }),
      catchError(this.handleError)
    );
  }

  addUser(user: User): Observable<any> {
    return this.http.post(`${this.AddUserApiUrl}`, user, { responseType: 'text' }).pipe(
      map(response => {
        // Handle the text response here
        return { message: response };
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.error);
    return throwError('Something went wrong; please try again later.');
  }
}
