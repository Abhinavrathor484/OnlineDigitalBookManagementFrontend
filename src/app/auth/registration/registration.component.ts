import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationData = {
    name: '',
    email: '',
    password: '',
    role: 'user'
  };

  constructor(private fb: FormBuilder, private router: Router, private authService: UserLoginService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [this.registrationData.name, Validators.required],
      email: [this.registrationData.email, [Validators.required, Validators.email]],
      password: [this.registrationData.password, [Validators.required, Validators.minLength(6)]],
      role: [this.registrationData.role, Validators.required]
    });

    this.registrationForm.valueChanges.subscribe(values => {
      this.registrationData = values;
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.authService.register(this.registrationForm.value).subscribe(
        (response: any) => {
          alert('Registration successful!');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration error:', error);
          alert('Registration failed! Please try again.');
        }
      );
    } else {
      alert('Invalid input');
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}