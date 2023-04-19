import { TestBed } from '@angular/core/testing';

import { MultipleuploadService } from './multipleupload.service';

describe('MultipleuploadService', () => {
  let service: MultipleuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
