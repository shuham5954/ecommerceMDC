import { Routes } from '@angular/router';
import { authGuardGuard } from './common/authGuard/common/auth-guard.guard';

export const routes: Routes = [
    
    {path:"" , redirectTo:"log-in" , pathMatch:'full'} , 
    {path:"log-in" , loadComponent: () => import('./log-in/log-in.component').then(c =>c.LogInComponent )  } , 
    {path:"home" , loadChildren: () => import('./home/home/home.routes').then(c =>c.home ), canActivate: [authGuardGuard]  } ,
    {path:"admin" , loadChildren: () => import('./admin/admin.routes').then(c =>c.admin ), canActivate: [authGuardGuard]  } ,
    
];