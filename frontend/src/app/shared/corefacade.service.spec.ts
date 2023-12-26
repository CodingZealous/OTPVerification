import { TestBed } from '@angular/core/testing';

import { CorefacadeService } from './corefacade.service';

describe('CorefacadeService', () => {
  let service: CorefacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorefacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
