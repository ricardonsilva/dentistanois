import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private storageService: StorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const oauth = this.storageService.getToken();

        if (oauth) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + oauth.access_token)
            });

            console.log(authReq);

            return next.handle(authReq);
        }

        return next.handle(req);
    }
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
