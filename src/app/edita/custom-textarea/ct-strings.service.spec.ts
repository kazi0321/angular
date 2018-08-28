import { TestBed, inject } from '@angular/core/testing';

import { CtStringsService } from './ct-strings.service';

describe('CtStringsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtStringsService]
    });
  });

  it('should be created', inject([CtStringsService], (service: CtStringsService) => {
    expect(service).toBeTruthy();
  }));
});
