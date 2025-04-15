import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebPageComponent } from './web-page/web-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AdminUserManageComponent } from './Admin/admin-user-manage/admin-users-manage.component';
import { AdminBooksManageComponent } from './Admin/admin-books-manage/admin-books-manage.component';
import { AdminInventoryManageComponent } from './Admin/admin-inventory-manage/admin-inventory-manage.component';
import { AdminReviewManageComponent } from './Admin/admin-review-manage/admin-review-manage.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BookPageComponent } from './Book/book-page/book-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: 'Web-Page', pathMatch: 'full' },
  { path: 'Web-Page', component: WebPageComponent },
  { path: 'User-Login-Page' , component:LoginComponent},
  { path: 'Admin-Home' , component:AdminHomeComponent},
  { path:'Register-Page' , component:RegistrationComponent},
  { path:'Manage-User' , component:AdminUserManageComponent},
  { path:'Manage-Book' , component:AdminBooksManageComponent},
  { path:'Manage-Inventory' , component:AdminInventoryManageComponent},
  { path:'Manage-Reviews' , component:AdminReviewManageComponent},
  { path:'App-Home', component:HomeComponent},
  { path:'All-Books-Page', component:BookPageComponent},
  { path:'Profile-Page', component:ProfileComponent},
  { path:'Payment-Page', component:PaymentComponent},
  { path:'Checkout-Page-User', component:CheckoutComponent},
  { path:'User-Review-Page', component:UserReviewComponent},
  { path:'User-Cart-Page', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
