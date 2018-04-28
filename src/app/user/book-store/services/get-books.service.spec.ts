import { TestBed, inject } from '@angular/core/testing';

import { GetBooksService } from './get-books.service';

describe('GetBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBooksService]
    });
  });

  it('should be created', inject([GetBooksService], (service: GetBooksService) => {
    expect(service).toBeTruthy();
  }));
});
