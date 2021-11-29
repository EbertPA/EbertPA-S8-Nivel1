import { Component, OnInit } from '@angular/core';
import { Ship } from '../interface/starships.interface';
import { StarswarsService } from '../starswars.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  get starships() {
    return this.starswarsService.starships;
  }

  ship!: Ship;

  numPage: number = this.starswarsService.pageNumber;

  selected: boolean = true;
  nave: string='';

  constructor(private starswarsService: StarswarsService) {}

  ngOnInit(): void {
    if(this.numPage === 1){
      for(let j=0; j < 10; j++){
        this.starswarsService.viewStarShip(this.numPage, j);
      }
    }
    this.numPage++;
  }

  volver(){
    this.selected  = true;
  }

  viewShip(ship: Ship) {
    const regex = /\d+/g;
    const idInUrl: RegExpMatchArray | null = ship.url.match(regex);
    const id: number = parseInt(idInUrl![0]);
    this.nave = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    this.ship = ship;
    this.selected = !this.selected;
  }

  addMore(){
    let totalPages= Math.ceil(this.starswarsService.numReg/10);
    console.log('this.numPage: ',this.numPage, 'totalPages: ',totalPages);
    if(this.numPage <= totalPages){
      if(this.numPage <= totalPages){
        for(let j=0; j < 10; j++){
          this.starswarsService.viewStarShip(this.numPage, j);
        }
      }
      this.numPage++;
      this.starswarsService.pageNumber = this.numPage;
    }
  }

}
