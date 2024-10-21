import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {path:"" , redirectTo:"log-in" , pathMatch:'full'} , 
    {path:"log-in" , loadComponent: () => import('./log-in/log-in.component').then(c =>c.LogInComponent ) } , 
    {path:"home" , loadChildren: () => import('./home/home/home.routes').then(c =>c.home ) } ,
    {path:"admin" , loadChildren: () => import('./admin/admin.routes').then(c =>c.admin ) } ,
    
];