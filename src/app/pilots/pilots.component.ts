import { Component, Input, OnInit } from '@angular/core';
import { Ship } from '../interface/starships.interface';
import { StarswarsService } from '../services/starswars.service';
import { Pilot } from '../interface/pilots.interface';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  @Input() ship!: Ship;
  nave: string='';

  pilots: Pilot[] = [];

  constructor( private starswarsService: StarswarsService ) { }

  ngOnInit(): void {
    this.pilots = [];
    const regex = /\d+/g;

    this.ship.pilots.map(pilot => {
      const idInUrl: RegExpMatchArray | null = pilot.match(regex);
      const id: number = parseInt(idInUrl![0]);
      this.starswarsService.getPilot(id).subscribe(resp => {
        const regex = /\d+/g;
        const idInUrl: RegExpMatchArray | null = resp.url.match(regex);
        const idPilot: number = parseInt(idInUrl![0]);
        resp.url = `https://starwars-visualguide.com/assets/img/characters/${idPilot}.jpg`;
        this.pilots.push(resp);
      });
    });
  }

}
