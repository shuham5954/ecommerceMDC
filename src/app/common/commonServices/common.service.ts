import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // fot user navigation and activity 

  public isNavigationShow:boolean=false;
  public islogIn:boolean = false;
  public isAdmin:boolean = false;
  
  constructor() { }

   userLogIn(){
    this.isNavigationShow = true;
    this.islogIn = true ;
   }

   adminLogIn(){

    this.isNavigationShow = true;
    this.isAdmin = true ;

   }

   logOut(){

    this.isNavigationShow=false;
    this.islogIn = false;
    this.isAdmin = false;
    
   }

}
