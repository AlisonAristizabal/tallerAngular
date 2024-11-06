/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SerieService } from './serie.service';

describe('Service: Serie', () => {
  let service: SerieService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});