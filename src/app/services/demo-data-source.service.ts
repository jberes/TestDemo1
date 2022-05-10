import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoDataSourceService {
  constructor(private http: HttpClient) { }

  public getCustomersDemoList(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/fd6f3257-fdf0-4e26-2ddd-08da2a1e37cc`);
  }
}
