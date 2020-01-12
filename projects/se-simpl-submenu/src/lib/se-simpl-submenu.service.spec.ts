import { TestBed } from '@angular/core/testing';

import { SeSimplsubmenuService } from './se-simpl-submenu.service';

describe('SeSimplsubmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeSimplsubmenuService = TestBed.get(SeSimplsubmenuService);
    expect(service).toBeTruthy();
  });
});
