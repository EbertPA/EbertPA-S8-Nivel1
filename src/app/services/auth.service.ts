import { Injectable } from '@angular/core';
import { Users } from '../interface/users.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login: boolean = false;

  nuevo: Users = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    login: false
  };

  constructor() {
   }

  logout() {
    if(this.nuevo.login === true){
      this.nuevo.login = false;
      localStorage.setItem('register',JSON.stringify(this.nuevo));
    }
  }

  conected() {
    if(localStorage.getItem('register')){
      this.nuevo = JSON.parse(localStorage.getItem('register')!);
      this.login = this.nuevo.login;
    }
    return this.login;
  }

  getUser() {
    return this.nuevo.firstName;
  }

}
