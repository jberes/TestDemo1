import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { JSONNorthwindCustomersService } from '../services/json-northwind-customers.service';
import { OpenAPIWebinarService } from '../services/open-apiwebinar.service';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.scss']
})
export class AnotherPageComponent implements OnInit {
  public northwindEmployees: any = null;
  public jSONNorthwindCustomersCustomers: any = null;
  public openAPIWebinarApiOrders: any = null;

  constructor(
    private northwindService: NorthwindService,
    private jSONNorthwindCustomersService: JSONNorthwindCustomersService,
    private openAPIWebinarService: OpenAPIWebinarService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.jSONNorthwindCustomersService.getCustomers().subscribe(data => this.jSONNorthwindCustomersCustomers = data);
    this.openAPIWebinarService.getApiOrders().subscribe(data => this.openAPIWebinarApiOrders = data);
  }
}
