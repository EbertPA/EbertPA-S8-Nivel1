import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoStarWars: string = '../assets/images/imgStarWars.png';

  constructor() { }

  ngOnInit(): void {
  }

}
