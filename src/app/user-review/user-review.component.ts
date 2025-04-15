// import { Component, OnInit } from '@angular/core';
// import { ReviewService } from '../Services/review.service';
// import { Review } from '../Models/review.model';

// @Component({
//   selector: 'app-user-review',
//   templateUrl: './user-review.component.html',
//   styleUrls: ['./user-review.component.css']
// })
// export class UserReviewComponent implements OnInit {
//   reviews: Review[] = [];
//   newReview: Review = {
//     reviewID: 0,
//     rating: 0,
//     comment: '',
//     userID: 0,
//     bookID: 0,
//     title: ''
//   };

//   stars: number[] = [1, 2, 3, 4, 5];

//   constructor(private reviewService: ReviewService) {}

//   ngOnInit(): void {
//     this.loadReviews();
//   }

//   loadReviews(): void {
//     this.reviewService.getReview().subscribe(
//       (data: Review[]) => {
//         this.reviews = data.slice(0, 8); // Get only the first 7 books
//       },
//       (error) => {
//         console.error('Error fetching reviews:', error);
//       }
//     );
//   }

//   addReview(): void {
//     this.reviewService.addReview(this.newReview).subscribe(
//       () => {
//         this.loadReviews();
//         this.resetForm();
//         alert('Review posted successfully!');
//       },
//       (error) => {
//         console.error('Error adding review:', error);
//       }
//     );
// }


//   resetForm(): void {
//     this.newReview = {
//       reviewID: 0,
//       rating: 0,
//       comment: '',
//       userID: 0,
//       bookID: 0,
//       title:''
//     };
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { UserProfileService } from '../Services/user-profile.service';
import { Review } from '../Models/review.model';
import { Book } from '../Models/book.model';
import { Profile } from '../Models/profile.model';
import { BookService } from '../Services/home-book.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  reviews: Review[] = [];
  books: Book[] = [];
  newReview: Review = {
    reviewID: 0,
    rating: 0,
    comment: '',
    userID: 0,
    bookID: 0,
    title: ''
  };

  stars: number[] = [1, 2, 3, 4, 5];

  constructor(
    private reviewService: ReviewService,private userProfileService: UserProfileService, private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.loadReviews();
    this.loadBooks();
    this.userProfileService.userProfile$.subscribe((profile: Profile | null) => {
      if (profile) {
        this.newReview.userID = profile.userID; // Set the user ID from the profile
      }
    });
    this.userProfileService.fetchUserProfile(); // Fetch the user profile
  }

  loadReviews(): void {
    this.reviewService.getReview().subscribe(
      (data: Review[]) => {
        this.reviews = data.slice(0, 8); // Get only the first 8 reviews
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }

  loadBooks(): void {
      this.bookService.getBooks().subscribe((data: Book[]) => {
            this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
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
      userID: this.newReview.userID, // Keep the current user ID
      bookID: 0,
      title: ''
    };
  }
}
