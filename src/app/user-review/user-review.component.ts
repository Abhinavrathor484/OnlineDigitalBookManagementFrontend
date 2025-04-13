import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { Review } from '../Models/review.model';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  reviews: Review[] = [];
  newReview: Review = {
    reviewID: 0,
    rating: 0,
    comment: '',
    userID: 0,
    bookID: 0
  };
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReview().subscribe(
      (data: Review[]) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  addReview(): void {
    this.reviewService.addReview(this.newReview).subscribe(
      () => {
        this.loadReviews();
        this.resetForm();
        alert('Review posted successfully!');
      },
      (error) => {
        console.error('Error adding review:', error);
      }
    );
}


  resetForm(): void {
    this.newReview = {
      reviewID: 0,
      rating: 0,
      comment: '',
      userID: 0,
      bookID: 0
    };
  }
}
