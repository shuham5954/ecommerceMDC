import { Routes } from "@angular/router";



export const header:Routes = [
    {path:"" , redirectTo:"cart-main" , pathMatch : 'full'},
        //  {path:"cart-main" , loadComponent: () => import('./cart-main/cart-main.component').then(c =>c.CartMainComponent ) , pathMatch:'full'} , 
        //  {path:"chek-out-cart" , loadComponent: () => import('./check-out-cart/check-out-cart.component').then(c =>c.CheckOutCartComponent) , pathMatch:'full'} , 
        //  {path:"payment-cart" , loadComponent: () => import('./payment-cart/payment-cart.component').then(c =>c.PaymentCartComponent) , pathMatch:'full'} , 
        //  {path:"user-profile" , loadComponent: () => import('./user-profile/user-profile.component').then(c =>c.UserProfileComponent) , pathMatch:'full'} , 
        //  {path:"wish-list" , loadComponent: () => import('./wish-list/wish-list.component').then(c =>c.WishListComponent) , pathMatch:'full'} , 

        ]