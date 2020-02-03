import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminresidential',
  templateUrl: './adminresidential.component.html',
  styleUrls: ['./adminresidential.component.scss']
})
export class AdminresidentialComponent implements OnInit {

  OrderDetails: any = [];
  HistoryOrderDetails: any = [];

  constructor(public config: ConfigService,public router: Router) { }

  ngOnInit() {
    this.loadOrderDetails();
    this.loadHistoryOrderDetails();

  }

  loadOrderDetails(){
    console.log('INSIDE LOAD ITEMS');
    return this.config.getResidentialDetails().subscribe((d: {}) => {
      console.log(d);
      this.OrderDetails = d;
      this.OrderDetails.push(d);
    });
  }

  loadHistoryOrderDetails(){
    console.log('INSIDE LOAD ITEMS');
    return this.config.getResidentialDetailsHistory().subscribe((d: {}) => {
      console.log(d);
      this.HistoryOrderDetails = d;
      this.HistoryOrderDetails.push(d);
    });
  }

}
