import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarShipsModel, Ship } from './interface/starships.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarswarsService {

  // public starships: Ship[] = [];
  public starships: Ship[] = [];
  public url: string='';
  public urlImage: string='';

  public numReg: number = 0;
  public totalPages:number = 0;

  pageNumber:number=1;

  constructor(private http: HttpClient) {
    this.url = 'https://swapi.dev/api/starships/?page=';
    // this.urlImage = 'https://starwars-visualguide.com/assets/img/starships/${{i}}.jpg';
    // this.urlImage = 'https://starwars-visualguide.com/assets/img/starships/';

  }

  // OviewShip(url: string):Observable<any>{
  //     return this.http.get<any>(url);
  // }

  // viewStarShip(numPag: number, j:number){
  viewStarShip(numPag: number, j:number){
    // this.http.get<StarShipsModel>(`https://swapi.dev/api/starships/?page=${this.pageNumber}`)
    this.http.get<StarShipsModel>(`https://swapi.dev/api/starships/?page=${numPag}`)
      .subscribe( resp => {
        this.totalPages= Math.ceil(resp.count/10);
        let numPagesCargadas =  Math.floor(this.starships.length/10);
        if(resp.results[j] !== undefined && numPag > numPagesCargadas && numPag <= this.totalPages && this.starships.length <= this.numReg){

          this.starships.push(resp.results[j]);
        }

        this.numReg = resp.count;
      },
      error => {
        console.log('Error en la petición');
      });
  }

}
