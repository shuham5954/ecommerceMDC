import { Routes } from '@angular/router';
import { header } from './header/header/header.routes';




export const routes: Routes = [

    {path:"" , redirectTo:'log-in' , pathMatch:'full'} , 
    {path:"log-in" , loadComponent: () => import('./log-in/log-in.component').then(c =>c.LogInComponent ) , pathMatch:'full'} , 
    {path:"home" , loadComponent: () => import('./home/home/home.component').then(c =>c.HomeComponent ) , pathMatch:'full'} ,
    

];