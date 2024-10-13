import { Routes } from "@angular/router";
import path from "node:path";



export const home:Routes = [
    {path:'',redirectTo:"my-profile" , pathMatch:'full'},

         {path:"my-profile" , loadComponent: () => import('./my-profile-card-user-profile/my-profile-card-user-profile.component').then(c =>c.MyProfileCardUserProfileComponent ) , pathMatch:'full'} , 
         {path:"my-order" , loadComponent: () => import('./my-ordes-card-user-profile/my-ordes-card-user-profile.component').then(c =>c.MyOrdesCardUserProfileComponent ) , pathMatch:'full'} , 
         {path:"my-payments" , loadComponent: () => import('./my-payment-card-user-profile/my-payment-card-user-profile.component').then(c =>c.MyPaymentCardUserProfileComponent ) , pathMatch:'full'} , 
         {path:"my-addresses" , loadComponent: () => import('./my-addresses-card-user-profile/my-addresses-card-user-profile.component').then(c =>c.MyAddressesCardUserProfileComponent ) , pathMatch:'full'} , 
         {path:"my-help-center" , loadComponent: () => import('./help-center-card-user-profile/help-center-card-user-profile.component').then(c =>c.HelpCenterCardUserProfileComponent ) , pathMatch:'full'} , 

]