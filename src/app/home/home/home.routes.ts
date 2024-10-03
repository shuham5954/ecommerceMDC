import { Routes } from "@angular/router";

export const home: Routes = [
    
    
    { 
        path: '', 
        redirectTo: 'products', 
        pathMatch: 'full' 
    },
    
    {
        path: 'products',
        children: [
            { 
                path: '', 
                redirectTo: 'home-products-details', 
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
                loadComponent: () => import('../../header/header/user-profile/user-profile.component').then(c => c.UserProfileComponent)
            },
            { 
                path: 'wish-list', 
                loadComponent: () => import('../../header/header/wish-list/wish-list.component').then(c => c.WishListComponent) 
            }
        ]
    }
];
