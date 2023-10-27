import { TestBed } from '@angular/core/testing';

import { CommonProblemService } from './common-problem.service';

describe('CommonProblemService', () => {
  let service: CommonProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
