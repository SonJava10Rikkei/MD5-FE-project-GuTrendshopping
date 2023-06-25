import { TestBed } from '@angular/core/testing';

import { SizecolumnService } from './sizecolumn.service';

describe('SizecolumnService', () => {
  let service: SizecolumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizecolumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
