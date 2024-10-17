import { Routes } from '@angular/router';

export const admin: Routes = [
    { 
        path: '', redirectTo: 'admin-products', pathMatch: 'full' 

    },
    {
        path:'admin-dashboard' ,
        loadComponent: () => import('./admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent)
    },
    {
        path:'admin-add-product' ,
        loadComponent: () => import('./admin-add-product/admin-add-product.component').then(c => c.AdminAddProductComponent)
    },
    {
        path:'admin-orders' ,
        loadComponent: () => import('./admin-orders/admin-orders.component').then(c => c.AdminOrdersComponent)
    },
    {
        path:'admin-payments' ,
        loadComponent: () => import('./admin-payments/admin-payments.component').then(c => c.AdminPaymentsComponent)
    },
    {
        path:'admin-products' ,
        loadComponent: () => import('./admin-products/admin-products.component').then(c => c.AdminProductsComponent)
    },
    {
        path:'admin-customers' ,
        loadComponent: () => import('./admin-customers/admin-customers.component').then(c => c.AdminCustomersComponent)
    },
    {
        path:'admin-help' ,
        loadComponent: () => import('./admin-help/admin-help.component').then(c => c.AdminHelpComponent)
    },
    {
        path:'admin-adminsetting' ,
        loadComponent: () => import('./admin-profile-setting/admin-profile-setting.component').then(c => c.AdminProfileSettingComponent)
    },


];

// { 
//     path: 'home-products', 
//     loadComponent: () => import('./home-products/home-products.component').then(c => c.HomeProductsComponent) 
// },
