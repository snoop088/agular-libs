import { TestBed } from '@angular/core/testing';

import { NgxInteractiveEditService } from './ngx-interactive-edit.service';

describe('NgxInteractiveEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxInteractiveEditService = TestBed.get(NgxInteractiveEditService);
    expect(service).toBeTruthy();
  });
});
