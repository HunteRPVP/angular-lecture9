import { TestBed } from '@angular/core/testing';

import { Mod1Service } from './mod1.service';

describe('Mod1Service', () => {
  let service: Mod1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
