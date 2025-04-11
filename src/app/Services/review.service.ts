import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Review } from '../Models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private GetallReviewApiUrl = 'https://localhost:7028/api/Review';
  private DeletetheReviewapiUrl = 'https://localhost:7028/api/Review';
  private EdittheReviewapiUrl = 'https://localhost:7028/api/Review';
  private AddReviewApiUrl = 'https://localhost:7028/api/Review'; // Add the URL for adding a book

  constructor(private http: HttpClient) {}

  getReview(): Observable<Review[]> {
    return this.http.get<Review[]>(this.GetallReviewApiUrl);
  }

  deleteReview(reviewId: number): Observable<void> {
    let params = new HttpParams().set("reviewId", reviewId.toString());
    return this.http.delete<void>(`${this.DeletetheReviewapiUrl}/${reviewId}`, { params });
  }

  editReview(review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.EdittheReviewapiUrl}/${review.reviewID}`, review);
  }

  addReview(review: Review): Observable<Review> { // Add the method for adding a book
    return this.http.post<Review>(this.AddReviewApiUrl, review);
  }
}

