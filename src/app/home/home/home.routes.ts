import { Routes } from "@angular/router";



export const home:Routes = [
         {path:"" , loadComponent: () => import('./home-products/home-products.component').then(c =>c.HomeProductsComponent ) , pathMatch:'full'} , 
         {path:"home-products" , loadComponent: () => import('./home-products-details/home-products-details.component').then(c =>c.HomeProductsDetailsComponent ) , pathMatch:'full'} , 

]