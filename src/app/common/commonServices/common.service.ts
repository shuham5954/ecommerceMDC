import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public isAdmin:boolean = false;
  private isLogInSubject = new BehaviorSubject<boolean>(false);
  isLogIn = this.isLogInSubject.asObservable();
  
  constructor() { }

   userLogIn(){
    this.isLogInSubject.next(true);
   }

   adminLogIn(){

   }

   logOut(){

    
   }

}
