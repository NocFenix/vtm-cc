/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClansService } from './clans.service';

describe('Service: Clans', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClansService]
    });
  });

  it('should ...', inject([ClansService], (service: ClansService) => {
    expect(service).toBeTruthy();
  }));
});
