import { Routes } from "@angular/router";

export const home: Routes = [
    
    { 
        path: '', 
        redirectTo: 'user-profiles', 
        pathMatch: 'full' 
    },
    
    {
        path: 'products',
        children: [
            { 
                path: '', 
                redirectTo: 'home-products', 
                pathMatch: 'full' 
            },
            { 
                path: 'home-products', 
                loadComponent: () => import('./home-products/home-products.component').then(c => c.HomeProductsComponent) 
            },
            { 
                path: 'home-products-details', 
                loadComponent: () => import('./home-products-details/home-products-details.component').then(c => c.HomeProductsDetailsComponent) 
            }
        ]
    },
    {
        path: 'user-profiles',
        children: [ 
            {path:'' , 
                redirectTo:'user-profile',
                pathMatch:'full'
            } ,
           
            { 
                path: 'cart-main', 
                loadComponent: () => import('../../header/header/cart-main/cart-main.component').then(c => c.CartMainComponent)
            },
            { 
                path: 'check-out-cart', 
                loadComponent: () => import('../../header/header/check-out-cart/check-out-cart.component').then(c => c.CheckOutCartComponent)
            },
            { 
                path: 'payment-cart', 
                loadComponent: () => import('../../header/header/payment-cart/payment-cart.component').then(c => c.PaymentCartComponent)
            },
            { 
                path: 'user-profile', 
                loadComponent: () => import('../../header/header/user-profile/user-profile.component').then(c => c.UserProfileComponent),
                children:[
                    {path:'' , redirectTo:'my-help-center' , pathMatch:"full"},
                    {path:"my-profile" , loadComponent: () => import('../../header/header/user-profile/my-profile-card-user-profile/my-profile-card-user-profile.component').then(c=>c.MyProfileCardUserProfileComponent) } ,
                    {path:"my-order" , loadComponent: () => import('../../header/header/user-profile/my-ordes-card-user-profile/my-ordes-card-user-profile.component').then(c =>c.MyOrdesCardUserProfileComponent ) , pathMatch:'full'} , 
                    {path:"my-payments" , loadComponent: () => import('../../header/header/user-profile/my-payment-card-user-profile/my-payment-card-user-profile.component').then(c =>c.MyPaymentCardUserProfileComponent ) , pathMatch:'full'} , 
                    {path:"my-addresses" , loadComponent: () => import('../../header/header/user-profile/my-addresses-card-user-profile/my-addresses-card-user-profile.component').then(c =>c.MyAddressesCardUserProfileComponent ) , pathMatch:'full'} , 
                    {path:"my-help-center" , loadComponent: () => import('../../header/header/user-profile/help-center-card-user-profile/help-center-card-user-profile.component').then(c =>c.HelpCenterCardUserProfileComponent ) , pathMatch:'full'} , 
           
                ]
            },
            { 
                path: 'wish-list', 
                loadComponent: () => import('../../header/header/wish-list/wish-list.component').then(c => c.WishListComponent) 
            }
        ]
    }
];
