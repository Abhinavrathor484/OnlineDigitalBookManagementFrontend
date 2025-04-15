import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Book[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  removeFromCart(book: Book): void {
    this.cart = this.cart.filter(item => item.bookID !== book.bookID);
    this.saveCart();
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, book) => total + book.price, 0);
  }
}
