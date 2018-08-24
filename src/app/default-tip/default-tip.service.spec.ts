import { TestBed, inject } from '@angular/core/testing';

import { DefaultTipService } from './default-tip.service';

describe('DefaultTipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultTipService]
    });
  });

  it('should be created', inject([DefaultTipService], (service: DefaultTipService) => {
    expect(service).toBeTruthy();
  }));
});
