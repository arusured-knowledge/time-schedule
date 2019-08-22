import { TestBed } from '@angular/core/testing';

import { TimeBoxService } from './time-box.service';

describe('TimeBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeBoxService = TestBed.get(TimeBoxService);
    expect(service).toBeTruthy();
  });
});
