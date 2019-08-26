import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface UserAll {
  rut: string,
  cellphone: string,
  email: string,
  income: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendUser(user: UserAll) {
    const url = 'http://localhost:3000';

    return this.http
      .post(url, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError (httpError: HttpErrorResponse) {
    let customError: any = {};

    if (httpError.status >= 400 && httpError.status <= 599) {
      customError.status = httpError.status;
      customError.message = httpError.error.message;
    } else {
      customError.status = 500;
      customError.message = 'Error in service, please try later';
    }
    return throwError(customError);
  }
}
