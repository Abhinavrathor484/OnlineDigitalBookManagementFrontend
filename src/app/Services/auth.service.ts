
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { Login } from '../Models/login-user.model'; 
import { RegisterUser } from '../Models/register-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 
  private userloginapiurl = "https://localhost:7028/api/Account/Login";
  private regiseterloginapiurl = "https://localhost:7028/api";
  constructor( private http:HttpClient){ }
 
  authenticateUser(Userlogin: Login): Observable<Login> {
    return this.http.post<Login>(this.userloginapiurl, Userlogin);
   
  }

  register(user: RegisterUser): Observable<any> {
    console.log("Entered register")
    return this.http.post(`${this.regiseterloginapiurl}/Account/register`, user);
  }

  logout(){
    localStorage.removeItem('authToken');
  }
 
}