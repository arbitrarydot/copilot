import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeslaApiService } from '../services/tesla-api/tesla-api.service';

@Injectable()
export class TeslaApiInterceptor implements HttpInterceptor {
    constructor(private tesla : TeslaApiService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const userToken = this.tesla.getToken();
        console.log(request);
        if (userToken) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${userToken}`
                }
            });
        }

        return next.handle(request);
    }
}