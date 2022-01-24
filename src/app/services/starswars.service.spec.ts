import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { StarswarsService } from './starswars.service';

describe('StarswarsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: StarswarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(StarswarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getPilot', () => {

    it('Should return pilot', () => {
      // arrange
      const expectData = [
        {
          birth_year: '31BBY',
          created: '2014-12-15T12:56:32.683000Z',
          edited: '2014-12-20T21:17:50.357000Z',
          eye_color: 'brown',
          films: [
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
          ],
          gender: 'male',
          hair_color: 'black',
          height: '177',
          homeworld: 'https://swapi.dev/api/planets/30/',
          mass: '79',
          name: 'Lando Calrissian',
          skin_color: 'dark',
          species: [],
          starships: ['https://swapi.dev/api/starships/10/'],
          url: 'https://starwars-visualguide.com/assets/img/characters/25.jpg',
          vehicles: [],
        },
      ];
      let dataError, dataResponse;
      // act
      service.getPilot(1).subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataResponse = error;
        }
      );
      const req = httpTestingController.expectOne(
        `https://swapi.dev/api/people/1`
      );
      req.flush(expectData);
      // assert
      expect(dataResponse).toBeTrue;
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined;
    });
  });
});
