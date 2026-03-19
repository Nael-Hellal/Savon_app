import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  // Clonnage de la requête pour lui ajouter le token JWT :

  let authReq = req;

  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 401) {
        authService.logout();
      }
      return throwError(() => error);
    })
  )
  return next(req); // La requête passe à travers.
};