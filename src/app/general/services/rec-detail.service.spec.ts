import { TestBed } from '@angular/core/testing';

import { RecDetailService } from './rec-detail.service';

describe('RecDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecDetailService = TestBed.get(RecDetailService);
    expect(service).toBeTruthy();
  });
});
