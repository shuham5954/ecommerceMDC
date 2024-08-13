import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';


export const routes: Routes = [

    {path:'' , redirectTo: 'home' , pathMatch:'full'},

    {path:"logIn", loadComponent:()=> import('../app/log-in/log-in.component').then(res => res.LogInComponent)},

    {path:"home" , loadComponent:() => import ('../app/home/home.component').then(res => res.HomeComponent)}


];
