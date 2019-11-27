import { TestBed } from '@angular/core/testing';

import { StripeService } from './stripe.service';

describe('StripeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StripeService = TestBed.get(StripeService);
    expect(service).toBeTruthy();
  });
});
