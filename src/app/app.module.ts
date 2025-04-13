import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BookPageComponent } from './Book/book-page/book-page.component';
import { AdminBooksManageComponent } from './Admin/admin-books-manage/admin-books-manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminUserManageComponent } from './Admin/admin-user-manage/admin-users-manage.component';
import { AdminReviewManageComponent } from './Admin/admin-review-manage/admin-review-manage.component';
import { AdminInventoryManageComponent } from './Admin/admin-inventory-manage/admin-inventory-manage.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { WebPageComponent } from './web-page/web-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserReviewComponent } from './user-review/user-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BookPageComponent,
    AdminBooksManageComponent,
    AdminUserManageComponent,
    AdminReviewManageComponent,
    AdminInventoryManageComponent,
    AdminHomeComponent,
    LoginComponent,
    RegistrationComponent,
    WebPageComponent,
    ProfileComponent,
    PaymentComponent,
    CheckoutComponent,
    UserReviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
