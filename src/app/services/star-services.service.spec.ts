import { TestBed, inject } from '@angular/core/testing';

import { StarServicesService } from './star-services.service';

describe('StarServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarServicesService]
    });
  });

  it('should ...', inject([StarServicesService], (service: StarServicesService) => {
    expect(service).toBeTruthy();
  }));
});
