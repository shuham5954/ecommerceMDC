import { Routes } from '@angular/router';




export const clientRoutes: Routes = [

    {path:"" , loadComponent: () => import('').then(c =>c.LogInComponent ) , pathMatch:'full'} , 


];