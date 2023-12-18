import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  username: string;

  constructor(private authService: AuthService) {
    // Retrieve the username from the authentication service
    this.username = authService.getUsername();
  }

  logout(): void {
    alert("logout");
    this.authService.logout();
  }
}
