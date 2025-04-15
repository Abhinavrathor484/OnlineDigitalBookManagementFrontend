import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profile } from '../Models/profile.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'https://localhost:7028/api/User';
  private userProfileSubject = new BehaviorSubject<Profile | null>(null);
  userProfile$ = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/${email}`);
  }

  decodeToken(token: string): any {
    return jwtDecode(token);
  }

  fetchUserProfile(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded: any = this.decodeToken(token);
      const email = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];

      if (email) {
        this.getUserByEmail(email).subscribe(
          (data: Profile) => {
            this.userProfileSubject.next(data);
          },
          (error) => {
            console.error('Error fetching user profile:', error);
            this.userProfileSubject.next(null);
          }
        );
      } else {
        console.error('Email not found in the token.');
        this.userProfileSubject.next(null);
      }
    } else {
      console.error('No authentication token found.');
      this.userProfileSubject.next(null);
    }
  }
}

