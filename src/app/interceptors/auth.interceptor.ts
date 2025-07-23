import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const access_token=localStorage.getItem('access_token')
     console.log('🔐 Interceptor Activated');
    console.log('✅ Original URL:', request.url);
    console.log('✅ Token from localStorage:', access_token);
    
    const authReq=request.clone({
      headers:request.headers.set('authorization',`Bearer ${access_token}`)
    })
    return next.handle(authReq);
  }
}
