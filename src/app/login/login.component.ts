import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interface/users.interface';
import { AuthService } from '../services/auth.service';

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
    password: '',
    login: false
  }

  userName: string = '';
  userPassword: string = '';
  userRegistred: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('register')){
      this.nuevo = JSON.parse(localStorage.getItem('register')!);
    }
  }

  logUser(){
    if(this.userName.trim().length === 0 || this.userPassword.trim().length === 0){
      return;
    }
    if((this.userName === this.nuevo.email && this.userPassword === this.nuevo.password)){
      this.userRegistred = false;
      console.log('Usuario registrado:',
      '\nuser: ',this.userName,
      '\npassword: ',this.userPassword
      );
      this.nuevo.login = true;
      localStorage.setItem('register',JSON.stringify(this.nuevo));
      this.router.navigate(['/home']);
    }else {
      console.log('Credenciales no válidas o Usuario No registrado:',
      '\nuser: ',this.userName,
      '\npassword: ',this.userPassword
      );
      this.userRegistred = true;
    }

  }

}
