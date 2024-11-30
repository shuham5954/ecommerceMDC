import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor() {}

  getAuthToken(): string | null {
    return localStorage.getItem('token'); 
   }

   private loggedIn = false;

  isAuthenticated(): boolean {
    return this.loggedIn; 
  }

  login() {
    this.loggedIn = true; 
  }

  logout() {
    this.loggedIn = false; 
  }



}
