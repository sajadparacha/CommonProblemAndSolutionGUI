import { TestBed } from '@angular/core/testing';

import { SolutionListService } from './solution-list.service';

describe('SolutionListService', () => {
  let service: SolutionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
