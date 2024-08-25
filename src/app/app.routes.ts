import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';



export const routes: Routes = [

    {path:"" , loadComponent: () => import('./log-in/log-in.component').then(c =>c.LogInComponent ) , pathMatch:'full'} , 

    {path:"client" , loadComponent: () => import('./client/client.component').then(c =>c.ClientComponent ) , pathMatch:'full'} 
    

];
