import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { authService } from '../../common/authService/auth.service';

// export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

export function httpInterceptorInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  const authSer = inject(authService);
  const token = authSer.getAuthToken(); // Retrieve the token from your AuthService

  // Clone the request and add the Authorization header if the token exists
  const clonedRequest = req.clone({
      setHeaders: {
          Authorization: `Bearer ${token}`
      }
  });

  return next(clonedRequest); // Pass on the cloned request
}
