import { TestBed } from '@angular/core/testing';

import { CollatzService } from './collatz.service';

describe('CollatzService', () => {
  let service: CollatzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollatzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate Collatz sequence correctly for even number', () => {
    const sequence = service.generateCollatzSequence(16);
    expect(sequence).toEqual([16, 8, 4, 2, 1]);
  });

  it('should generate Collatz sequence correctly for odd number', () => {
    const sequence = service.generateCollatzSequence(17);
    expect(sequence).toEqual([17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  });

  it('should generate Collatz sequence correctly for 1', () => {
    const sequence = service.generateCollatzSequence(1);
    expect(sequence).toEqual([1]);
  });
});
