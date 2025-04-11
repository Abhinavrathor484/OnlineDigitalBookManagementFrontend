import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../Models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'https://localhost:7028/api/User';
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/${(email)}`);
  }
}
