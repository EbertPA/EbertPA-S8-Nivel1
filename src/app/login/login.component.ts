import { Component, OnInit } from '@angular/core';
import { Users } from '../interface/users.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nuevo: Users = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  userName: string = '';
  userPassword: string = '';
  userRegistred: boolean = false;

  constructor() {
    if(localStorage.getItem('register')){
      this.nuevo = JSON.parse(localStorage.getItem('register')!);
    }
  }

  ngOnInit(): void {
  }

  logUser(){
    if(this.userName.trim().length === 0 || this.userPassword.trim().length === 0){
      return;
    }
    if((this.userName === this.nuevo.email && this.userPassword === this.nuevo.password)){
      this.userRegistred = true;
      console.log('Usuario registrado:',
      '\nuser: ',this.userName,
      '\npassword: ',this.userPassword
      );
    }else {
      console.log('Usuario No registrado:',
      '\nuser: ',this.userName,
      '\npassword: ',this.userPassword
      );
      this.userRegistred = false;
    }

  }

}
