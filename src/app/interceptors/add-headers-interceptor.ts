import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor(private deviceDetector: DeviceDetectorService) {  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const browser = this.deviceDetector.getDeviceInfo().browser + ' ' + this.deviceDetector.getDeviceInfo().browser_version;
    const os = this.deviceDetector.getDeviceInfo().os;

    const newReq: HttpRequest<any> = req.clone({
      headers: req.headers
                .set('x-user-browser', browser)
                .set('x-user-os', os)
    });

    return next.handle(newReq).pipe(catchError(this.catchErrorHandler));
  }

  private catchErrorHandler(error, caught) {
    this.handleError(error);
    return of(error);
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      console.log('Handled error: ' + err.status);
    }
    throw err;
  }
}
