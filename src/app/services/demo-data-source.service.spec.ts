import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DemoDataSourceService } from './demo-data-source.service';

describe('DemoDataSourceService', () => {
  let service: DemoDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DemoDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
