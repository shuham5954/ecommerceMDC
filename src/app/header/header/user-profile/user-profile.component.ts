import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  constructor(private router:Router){

  }
  
  // nextRoute(){ this.router.navigate(['/home/user-profiles/user-profile']);  }

nextRouteHelpCenter() {
  this.router.navigate(['/home/user-profiles/user-profile/my-help-center']); 
}
nextRouteMyAddresses() {
  this.router.navigate(['/home/user-profiles/user-profile/my-addresses']); 
}
nextRouteMyProfilePayments() {
  this.router.navigate(['/home/user-profiles/user-profile/my-payments']); 
}
nextRouteMyProfileOrders() {
  this.router.navigate(['/home/user-profiles/user-profile/my-order']); 
}
nextRouteMyProfile() {
  this.router.navigate(['/home/user-profiles/user-profile/my-profile']); 
}

}
