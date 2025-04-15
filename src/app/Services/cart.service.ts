import { Injectable } from '@angular/core';
import { Book } from 'src/app/Models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Book[] = [];

  constructor() {
    this.loadCart();
  }

  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  getCart(): Book[] {
    return this.cart;
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, book) => total + book.price, 0);
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(book: Book): void {
    this.cart = this.cart.filter(item => item.bookID !== book.bookID);
    this.saveCart();
  }
}
