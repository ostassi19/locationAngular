import { TestBed } from '@angular/core/testing';

import { AddMaisonService } from './add-maison.service';

describe('AddMaisonService', () => {
  let service: AddMaisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMaisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
