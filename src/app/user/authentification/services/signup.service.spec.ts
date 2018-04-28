import { TestBed, inject } from '@angular/core/testing';

import { signupService } from './signup.service';

describe('signupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [signupService]
    });
  });

  it('should be created', inject([signupService], (service: signupService) => {
    expect(service).toBeTruthy();
  }));
});
