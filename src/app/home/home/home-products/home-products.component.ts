import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header/header.component";
import { NavBarComponent } from "../../../header/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent {

  constructor(){
    console.log("hello");
    
  }
  
  

}
