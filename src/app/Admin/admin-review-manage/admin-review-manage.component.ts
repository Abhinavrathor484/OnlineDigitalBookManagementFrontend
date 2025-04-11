import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/Models/review.model';

@Component({
  selector: 'app-admin-review-manage',
  templateUrl: './admin-review-manage.component.html',
  styleUrls: ['./admin-review-manage.component.css']
})
export class AdminReviewManageComponent implements OnInit{
  Reviews: Review[] = [];
    editReviewForm: FormGroup;
    currentReview: Review | null = null;
    showModal: boolean = false;
    formHeader: string = "Add Review";
constructor(private ReviewServices: ReviewService, private fb: FormBuilder) {
    this.editReviewForm = this.fb.group({
     rating : [''],
      comment: [null],
      userID: [null],
      bookID: [null],
      
    });
  }
ngOnInit(): void {
    this.ReviewServices.getReview().subscribe((data: Review[]) => {
      this.Reviews = data;
    });
  }

  openAddReviewForm(): void {
    this.currentReview = { reviewID: 0,  rating:0, comment: '',  userID: 0, bookID: 0 };
    this.editReviewForm.reset();
    this.formHeader = "Add Review";
    this.showModal = true;
  }

  openEditModal(review: Review): void {
    this.currentReview = review;
    this.editReviewForm.patchValue(review);
    this.formHeader = "Edit Review";
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.currentReview) {
      const updatedReview = { ...this.currentReview, ...this.editReviewForm.value };
      if (this.formHeader === "Add Review") {
        this.ReviewServices.addReview(updatedReview).subscribe((newReview) => {
          alert("Review is added successfully");
          this.Reviews.push(newReview);
          this.closeModal();
        });
      } else {
        this.ReviewServices.editReview(updatedReview).subscribe((updatedReview) => {
          alert("Review is updated successfully");
          this.Reviews = this.Reviews.map(b => b.reviewID === updatedReview.reviewID ? updatedReview : b);
          this.closeModal();
        });
      }
    }
  }

  deleteReview(review: Review): void {
    const confirmation = confirm(`Are you sure you want to delete the review: ${review.reviewID}?`);
    if (confirmation) {
      this.ReviewServices.deleteReview(review.reviewID).subscribe(() => {
        alert("Review is deleted successfully");
        this.Reviews = this.Reviews.filter(b => b.reviewID !== review.reviewID);
      });
    }
  }
}
