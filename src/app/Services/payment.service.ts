import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'https://localhost:7028/api';
  constructor(private http: HttpClient) {}

  createOrder(order: any) {
    return this.http.post(`${this.apiUrl}/Order`, order);
  }
}