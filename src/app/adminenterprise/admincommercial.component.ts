import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminenterprise',
  templateUrl: './admincommercial.component.html',
  styleUrls: ['./admincommercial.component.scss']
})
export class AdmincommercialComponent implements OnInit {

  @Input() item = { NuberOfBottles: '', Price: '' };

  constructor(public config: ConfigService,public router: Router) { }

  CommercialNumberOfBottleToBeUpdated:any;
  CommercialPriceToBeUpdated:any;

    data = [];
    CommercialItem: any = [];
    CommercialOrderDetails: any = [];
    HistoryOrderDetails: any = [];

    ngOnInit() {
      this.loadCommercialItems();
      this.loadCommercialOrderDetails();
      this.loadHistoryOrderDetails();

    }

    loadHistoryOrderDetails(){
      console.log('INSIDE LOAD ITEMS');
      return this.config.getCommercialDetailsHistory().subscribe((d: {}) => {
        console.log(d);
        this.HistoryOrderDetails = d;
        this.HistoryOrderDetails.push(d);
      });
    }


    loadCommercialOrderDetails(){
      console.log('INSIDE LOAD ITEMS');
      return this.config.getCommercialDetails().subscribe((d: {}) => {
        console.log(d);
        this. CommercialOrderDetails = d;
        this. CommercialOrderDetails.push(d);
      });
    }

    loadCommercialItems() {
      console.log('INSIDE LOAD ITEMS');
      return this.config.getCommercialData().subscribe((d: {}) => {
        console.log(d);
        this. CommercialItem = d;
        this. CommercialItem.push(d);
      });
    }

  // Delete employee
  deleteItemCommercial(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      console.log(id);
      this.config.deleteCommercialItem(id).subscribe(data => {
        this.loadCommercialItems();
      });
    }
  }



  updateCommercial() {

    console.log("Clicked")
    console.log(this.CommercialNumberOfBottleToBeUpdated);
    console.log(this.CommercialPriceToBeUpdated);
    this.config.updateItem(this.CommercialNumberOfBottleToBeUpdated,this.CommercialPriceToBeUpdated).subscribe(data => {
      this.loadCommercialItems();
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
    this.CommercialItem.push({
      NuberOfBottles: form.value.NuberOfBottles,
      Price: form.value.Price
    });
  }


  addCommercial(form: NgForm) {
    this.item = {
      NuberOfBottles: form.value.NuberOfBottles,
      Price: form.value.Price
    };
    this.config.addCommercialData(this.item).subscribe(() => {
       // tslint:disable-next-line:quotemark
       console.log("DATA SEND");
      });
    this.CommercialItem.push({
      NuberOfBottles: form.value.NuberOfBottles,
      Price: form.value.Price
    });
  }

}
