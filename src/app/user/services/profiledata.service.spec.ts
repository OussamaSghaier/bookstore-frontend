import { TestBed, inject } from '@angular/core/testing';

import { ProfiledataService } from './profiledata.service';

describe('ProfiledataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfiledataService]
    });
  });

  it('should be created', inject([ProfiledataService], (service: ProfiledataService) => {
    expect(service).toBeTruthy();
  }));
});
