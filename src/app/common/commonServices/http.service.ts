import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { catchError, interval, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {  }
 

  post<T>(url: string, data?: any, options?: { headers?: HttpHeaders; params?: HttpParams }): Observable<T> {
    return this.http.post<T>(url, data, options);
  }

  get<T>(url: string, options?: { headers?: HttpHeaders; params?: HttpParams }): Observable<T> {
    return this.http.get<T>(url, options);
  }


}
