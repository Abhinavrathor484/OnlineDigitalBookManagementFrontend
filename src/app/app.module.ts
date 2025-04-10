import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BookPageComponent } from './Book/book-page/book-page.component';
import { AdminBooksManageComponent } from './Admin/admin-books-manage/admin-books-manage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUserManageComponent } from './Admin/admin-user-manage/admin-users-manage.component';
import { AdminReviewManageComponent } from './Admin/admin-review-manage/admin-review-manage.component';
import { AdminInventoryManageComponent } from './Admin/admin-inventory-manage/admin-inventory-manage.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    BookPageComponent,
    AdminBooksManageComponent,
    AdminUserManageComponent,
    AdminReviewManageComponent,
    AdminInventoryManageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
