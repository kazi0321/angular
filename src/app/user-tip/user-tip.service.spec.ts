import { TestBed, inject } from '@angular/core/testing';

import { UserTipService } from './user-tip.service';

describe('UserTipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTipService]
    });
  });

  it('should be created', inject([UserTipService], (service: UserTipService) => {
    expect(service).toBeTruthy();
  }));
});
