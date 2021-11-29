import { Component, OnInit } from '@angular/core';

interface Usuario {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevo: Usuario = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  error: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newUser(){
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

  }


}
