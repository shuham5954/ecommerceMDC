import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-main',
  standalone: true,
  imports: [],
  templateUrl: './cart-main.component.html',
  styleUrl: './cart-main.component.css'
})
export class CartMainComponent {

  constructor(private router:Router){}

  nextRoute(){
    this.router.navigate(['/home/user-profiles/check-out-cart']);

  }

}
