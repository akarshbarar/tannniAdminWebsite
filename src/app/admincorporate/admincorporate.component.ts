import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-admincorporate',
  templateUrl: './admincorporate.component.html',
  styleUrls: ['./admincorporate.component.scss']
})
export class AdmincorporateComponent implements OnInit {


  @Input() item = { NuberOfBottles: '', Price: '' };

  constructor(public config: ConfigService,public router: Router) { }

    NumberOfBottleToBeUpdated:any;
    PriceToBeUpdated:any;

    data = [];
    Item: any = [];
    OrderDetails: any = [];
    HistoryOrderDetails: any = [];

    ngOnInit() {
      this.loadItems();
      this.loadOrderDetails();
      this.loadHistoryOrderDetails();

    }

    loadHistoryOrderDetails(){
      console.log('INSIDE LOAD ITEMS');
      return this.config.getCorporateDetailsHistory().subscribe((d: {}) => {
        console.log(d);
        this.HistoryOrderDetails = d;
        this.HistoryOrderDetails.push(d);
      });
    }
    loadOrderDetails(){
      console.log('INSIDE LOAD ITEMS');
      return this.config.getOrderDetails().subscribe((d: {}) => {
        console.log(d);
        this.OrderDetails = d;
        this.OrderDetails.push(d);
      });
    }

    loadItems() {
      console.log('INSIDE LOAD ITEMS');
      return this.config.getData().subscribe((d: {}) => {
        console.log(d);
        this.Item = d;
        this.Item.push(d);
      });
    }

  // Delete employee
  deleteItem(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      console.log(id);
      this.config.deleteItem(id).subscribe(data => {
        this.loadItems();
      });
    }
  }

  update() {

    console.log("Clicked")
    console.log(this.NumberOfBottleToBeUpdated);
    console.log(this.PriceToBeUpdated);
    this.config.updateItem(this.NumberOfBottleToBeUpdated,this.PriceToBeUpdated).subscribe(data => {
      this.loadItems();
    });

  }

  add(form: NgForm) {
    this.item = {
      NuberOfBottles: form.value.NuberOfBottles,
      Price: form.value.Price
    };
    this.config.addData(this.item).subscribe(() => {
       // tslint:disable-next-line:quotemark
       console.log("DATA SEND");
      });
    this.Item.push({
      NuberOfBottles: form.value.NuberOfBottles,
      Price: form.value.Price
    });
  }


}
