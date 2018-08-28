import { TestBed, inject } from '@angular/core/testing';

import { EditorTipService } from './editor-tip.service';

describe('EditorTipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorTipService]
    });
  });

  it('should be created', inject([EditorTipService], (service: EditorTipService) => {
    expect(service).toBeTruthy();
  }));
});
