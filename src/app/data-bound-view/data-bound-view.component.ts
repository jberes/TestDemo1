import { Component, OnInit } from '@angular/core';
import { DemoDataSourceService } from '../services/demo-data-source.service';

@Component({
  selector: 'app-data-bound-view',
  templateUrl: './data-bound-view.component.html',
  styleUrls: ['./data-bound-view.component.scss']
})
export class DataBoundViewComponent implements OnInit {
  public demoDataSourceCustomersDemoList: any = null;

  constructor(
    private demoDataSourceService: DemoDataSourceService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.demoDataSourceService.getCustomersDemoList().subscribe(data => this.demoDataSourceCustomersDemoList = data);
  }
}
