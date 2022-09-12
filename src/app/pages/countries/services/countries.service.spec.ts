import { TestBed } from '@angular/core/testing';

import { CountrieServiceService } from './countries.service';

describe('CountrieServiceService', () => {
  let service: CountrieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
