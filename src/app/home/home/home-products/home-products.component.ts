import { Component ,NgModule } from '@angular/core';
import { HeaderComponent } from "../../../header/header/header.component";
import { NavBarComponent } from "../../../header/nav-bar/nav-bar.component";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule


// import { OwlModule } from 'ngx-owl-carousel-o';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [CarouselModule,CommonModule], 
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent {

  constructor(){
    console.log("hello");
    
  }

  slidesStore = [
    {
      id: '1',
      src: 'https://via.placeholder.com/300x200?text=Slide+1', // Placeholder image
      alt: 'Description for Slide 1',
      title: 'Slide 1 Title'
    },
    {
      id: '2',
      src: 'https://via.placeholder.com/300x200?text=Slide+2',
      alt: 'Description for Slide 2',
      title: 'Slide 2 Title'
    },
    {
      id: '3',
      src: 'https://via.placeholder.com/300x200?text=Slide+3',
      alt: 'Description for Slide 3',
      title: 'Slide 3 Title'
    },
    {
      id: '4',
      src: 'https://via.placeholder.com/300x200?text=Slide+4',
      alt: 'Description for Slide 4',
      title: 'Slide 4 Title'
    }
  ];



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
  