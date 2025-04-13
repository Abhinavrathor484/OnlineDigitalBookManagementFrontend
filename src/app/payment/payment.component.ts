// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  order: any = {
    orderID: 12345,
    orderDate: new Date(),
    totalAmount: 100,
    status: '1',
    userID: 10
  };
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  postOrder(): void {
    this.router.navigate(['/Checkout-Page']);
  }
}




