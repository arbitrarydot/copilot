import { TestBed } from '@angular/core/testing';

import { TeslaApiService } from './tesla-api.service';

describe('TeslaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeslaApiService = TestBed.get(TeslaApiService);
    expect(service).toBeTruthy();
  });
});
