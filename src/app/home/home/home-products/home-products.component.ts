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

  

  slidesStore = [
    {
      id: '1',
      src: 'https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder image
      alt: 'Description for Slide 1',
      title: 'Slide 1 Title'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Description for Slide 2',
      title: 'Slide 2 Title'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Description for Slide 3',
      title: 'Slide 3 Title'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1670404160620-a3a86428560e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Description for Slide 4',
      title: 'Slide 4 Title'
    }
  ];



  customOptions: OwlOptions = {
    loop: true,
    autoHeight:false,
    autoWidth:true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };  



}
  