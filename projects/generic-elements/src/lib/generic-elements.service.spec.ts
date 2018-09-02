import { TestBed, inject } from '@angular/core/testing';

import { GenericElementsService } from './generic-elements.service';

describe('GenericElementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenericElementsService]
    });
  });

  it('should be created', inject([GenericElementsService], (service: GenericElementsService) => {
    expect(service).toBeTruthy();
  }));
});
