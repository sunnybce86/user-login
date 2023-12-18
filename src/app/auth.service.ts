import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private router: Router) { 
     
  }
  // Mock user data for demonstration purposes
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
  ];
  private username: string ='';
  private isAuthenticated: boolean = false;
  login(username: string, password: string): boolean {
    
    // Check if user credentials are valid
    const user = this.users.find(u => u.username === username && u.password === password);

    // Simulate authentication
    if (user) {
      // Successful login
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    } else {
      // Failed login
      return false;
    }
  }

  logout(): void {
    // Clear user data from local storage
    localStorage.removeItem('currentUser');
    this.isAuthenticated = false;
    this.username = '';
    this.router.navigate(['/login']); // Redirect to the 'home' route upon successful login
  }

  getUsername(): string {
    return this.username;
  }
}
