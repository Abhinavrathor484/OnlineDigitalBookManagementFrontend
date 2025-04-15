import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/order.model';
import { CartService } from '../Services/cart.service';
import { UserProfileService } from '../Services/user-profile.service';
import { PaymentService } from '../Services/payment.service';
import { Profile } from '../Models/profile.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userProfile: Profile | null = null;

  constructor(
    private router: Router,
    private cartService: CartService,
    private userProfileService: UserProfileService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.userProfileService.fetchUserProfile();
    this.userProfileService.userProfile$.subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  proceedToPayment(): void {
    const order: Omit<Order, 'orderID'> = {
      orderDate: new Date(),
      totalAmount: this.cartService.getTotalAmount(),
      status: 1, // Hardcoded status
      userID: this.userProfile?.userID || 0 // Get user ID from userProfile
    };

    this.paymentService.createOrder(order).subscribe(
      (response) => {
        console.log('Order successfully created:', response);
        alert("Order Created Successfully!");
        this.router.navigate(['/Checkout-Page-User']);
      },
      (error) => {
        console.error('Error creating order:', error);
        alert("Failed to create order. Please try again.");
      }
    );
  }
}



