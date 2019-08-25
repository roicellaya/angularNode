import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Response } from '@angular/http';
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

  private handleError (error: Response) {
    console.log('ApiService::handleError', error);

    return throwError(error);
  }
}
