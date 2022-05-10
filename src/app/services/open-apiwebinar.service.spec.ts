import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OpenAPIWebinarService } from './open-apiwebinar.service';

describe('OpenAPIWebinarService', () => {
  let service: OpenAPIWebinarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OpenAPIWebinarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
