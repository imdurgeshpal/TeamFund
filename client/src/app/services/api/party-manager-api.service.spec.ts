import { TestBed } from '@angular/core/testing';

import { PartyManagerApiService } from './party-manager-api.service';

describe('PartyManagerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyManagerApiService = TestBed.get(PartyManagerApiService);
    expect(service).toBeTruthy();
  });
});
