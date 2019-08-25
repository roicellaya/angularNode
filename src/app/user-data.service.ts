import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

interface User {
  rut: string,
  cellphone: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private user: User;
  private userSubject = new BehaviorSubject<User>({ rut: '', cellphone: '', email: '' });
  public userData$ = this.userSubject.asObservable();

  saveUser(user: User) {
    this.user = user;
    this.userSubject.next(this.user);
  }

  constructor() { }
}
