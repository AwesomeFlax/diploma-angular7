import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  token: string;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    localStorage.getItem('token') !== null ? this.token = localStorage.getItem('token') : this.token = '';

    const clonedReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.token}`
        }
    });

    return next.handle(clonedReq);
  }
}