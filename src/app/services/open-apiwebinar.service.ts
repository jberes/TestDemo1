import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class OpenAPIWebinarService {
  constructor(private http: HttpClient) { }

  public getApiOrders(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/api/orders`);
  }
}
