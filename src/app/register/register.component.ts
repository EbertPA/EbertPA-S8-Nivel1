import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interface/users.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevo: Users = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    login: false
  }

  error: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createUser(){
    if(this.nuevo.firstName.trim().length === 0 ||
       this.nuevo.lastName.trim().length === 0 ||
       this.nuevo.email.trim().length === 0 ||
       this.nuevo.password.trim().length === 0
    ){
      this.error = true;
      return;
    }
    console.log('Usuario registrado:',
        '\nNombre:', this.nuevo.firstName,
        '\nApellido:', this.nuevo.lastName,
        '\nEmail:', this.nuevo.email,
        '\nPassword:', this.nuevo.password,
    );
    this.error = false;
    localStorage.setItem('register',JSON.stringify(this.nuevo));
    this.router.navigate(['/login']);

  }


}
