import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageService } from './image.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: ImageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'x-auth-token': token
        }
      });
    }
    return next.handle(request);
  }
}
