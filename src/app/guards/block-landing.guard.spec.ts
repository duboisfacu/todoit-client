import { TestBed } from '@angular/core/testing';

import { BlockLandingGuard } from './block-landing.guard';

describe('BlockLandingGuard', () => {
  let guard: BlockLandingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlockLandingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
