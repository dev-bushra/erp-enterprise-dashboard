// ✅ Defines an HTTP interceptor that logs all outgoing HTTP requests and their responses for debugging purposes
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`[HTTP] ${req.method} ${req.url}`);
    return next.handle(req).pipe(
      tap(event => console.log('[HTTP Response]', event))
    );
  }
}