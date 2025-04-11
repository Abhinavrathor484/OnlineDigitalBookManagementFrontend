import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../Models/profile.model';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile | null = null;
  errorMessage: string = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log('Decoded Token:', decoded); // Log the entire decoded token

      const email = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
      console.log('Extracted Email:', email); // Log the extracted email

      if (email) {
        this.profileService.getUserByEmail(email).subscribe(
          (data: Profile) => {
            this.profile = data;
          },
          (error) => {
            console.error('Error fetching user profile:', error);
            if (error.status === 404) {
              this.errorMessage = 'User profile not found. Please check the email or try again later.';
            } else {
              this.errorMessage = 'An error occurred while fetching the profile. Please try again later.';
            }
          }
        );
      } else {
        this.errorMessage = 'Email not found in the token.';
      }
    } else {
      this.errorMessage = 'No authentication token found. Please log in.';
    }
  }
}
