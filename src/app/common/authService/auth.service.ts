import { Injectable } from '@angular/core';
import { CommonService } from '../commonServices/common.service';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private comms:CommonService) {}

  getAuthToken(): string | null {
    return localStorage.getItem('token'); 
   }

   private loggedIn = false;

  isAuthenticated(): boolean {
    return this.loggedIn; 
  }

  login() {
    this.loggedIn = true; 
    this.comms.userLogIn();
  }

  logout() {
    this.loggedIn = false; 
  }



}
