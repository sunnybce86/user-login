import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Call the authentication service to validate user credentials
    if (this.authService.login(this.username, this.password)) {
      // Successful login
      console.log('Login successful');
      this.router.navigate(['/home']); // Redirect to the 'home' route upon successful login
    
    } else {
      // Failed login
      console.log('Login failed');
    }
  }
}
