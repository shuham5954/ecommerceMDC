import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-products-details',
  standalone: true,
  imports: [],
  templateUrl: './home-products-details.component.html',
  styleUrl: './home-products-details.component.css'
})
export class HomeProductsDetailsComponent {
  constructor(private router:Router){}

  nextRoute(){
    this.router.navigate(['/home/user-profiles/cart-main']);

  }

}
