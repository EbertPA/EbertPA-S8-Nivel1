import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoStarWars: string = '../assets/images/imgStarWars.png';

  conected: boolean = false;
  user: string = '';

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.conected = this.authService.conected();
    if(this.conected){
      this.user = this.authService.getUser();
    }
    else{
    }
  }

  logout() {
    this.authService.logout();
    this.conected= false;
  }


}
