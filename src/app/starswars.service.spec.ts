import { TestBed } from '@angular/core/testing';

import { StarswarsService } from './starswars.service';

describe('StarswarsService', () => {
  let service: StarswarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarswarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
