import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { authService } from '../../authService/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const authSer = inject(authService);
  const router = inject(Router);

  if(authSer.isAuthenticated()){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false; 
  }

};
