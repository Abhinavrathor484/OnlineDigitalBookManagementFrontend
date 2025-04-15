import { Component } from '@angular/core'; // Decorator used to store metadata - Data about data
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login-user.model';
import { jwtDecode } from 'jwt-decode';
import { UserLoginService } from 'src/app/Services/auth.service';
 
@Component({
  selector: 'app-login', // used in app.component.html
  templateUrl: './login.component.html', // Defines the html file for this component
  styleUrls: ['./login.component.css'], // Defines the css file for this component
  standalone: false // Means that it should be declared in NgModule and can not work independently it relies on the dependency injection
})
export class LoginComponent { // LoginComponent is the name of the component 
                              
  user:Login = {  // Export Keyword Means it can be imported by other files in the angular application
    email: '',
    password: ''
  };
 
  errorMessage: string = '';
 
  constructor(private loginService: UserLoginService, private router: Router) {}
 
  onLogin() {
    this.loginService.authenticateUser(this.user).subscribe(
      (response: any) => {
        console.log('Login Response:', response); // Log the response to verify structure
        const token = response.jwtToken; // Access the jwtToken field directly
        if (token) {
          localStorage.setItem('authToken', token);
          console.log('JWT Token:', token); // Log the token
          const decoded: any = jwtDecode(token); // Decode the JWT
          console.log(decoded);
          console.log(decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/email'] || null);
          // alert('Login Successful!');
          // Redirect to the Manage Events page
          const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          localStorage.setItem('userRole', role); // Store the role in local storage
 
          alert('Login Successful!'); 
          // Redirect based on role
          if (role === 'Admin') {
            this.router.navigate(['/Admin-Home']);
          } else if (role === 'User') {
            this.router.navigate(['/App-Home']);
          } else {
            this.router.navigate(['/Web-page']); // Default redirection
          }
        } else {
          console.error('Token not found in the response.');
          alert('Login failed. Please try again.');
        }
      },
      (error) => {
        // Handle errors
        if (error.status === 401) {
          this.errorMessage = 'Invalid email or password. Please try again.';
        } else {
          console.error('Error during login:', error);
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      }
    );
  }
}
 
