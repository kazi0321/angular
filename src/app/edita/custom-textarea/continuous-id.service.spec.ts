import { TestBed, inject } from '@angular/core/testing';

import { ContinuousIDService } from './continuous-id.service';

describe('ContinuousIDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContinuousIDService]
    });
  });

  it('should be created', inject([ContinuousIDService], (service: ContinuousIDService) => {
    expect(service).toBeTruthy();
  }));
});
