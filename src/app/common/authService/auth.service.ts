import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor() { }
  getAuthToken(): string | null {
    return localStorage.getItem('token'); // Adjust logic as needed
}
}
