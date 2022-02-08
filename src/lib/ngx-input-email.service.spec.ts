import { TestBed } from '@angular/core/testing';

import { NgxInputEmailService } from './ngx-input-email.service';

describe('NgxInputEmailService', () => {
  let service: NgxInputEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInputEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
